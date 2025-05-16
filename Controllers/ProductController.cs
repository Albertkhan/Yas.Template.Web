using Yas.Template.Web.Models;
using Yas.Template.Web.Services;
using Yas.Template.Web.Databases;
using ClosedXML.Excel;
using DocumentFormat.OpenXml.Bibliography;
using DocumentFormat.OpenXml.InkML;
using DocumentFormat.OpenXml.Spreadsheet;
using DocumentFormat.OpenXml.Vml.Office;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
//using Net.Pkcs11Interop.HighLevelAPI40;
using System.IO.Compression;
using System.Net.Http;

namespace Yas.Template.Web.Controllers
{
    /// <summary>
    /// محصول
    /// </summary>
    public class ProductController : Controller
    {
        private readonly IWebHostEnvironment webHostEnvironment;
        public ProductController(IWebHostEnvironment webHostEnvironment)
        {
            this.webHostEnvironment = webHostEnvironment;
            System.Text.Encoding.RegisterProvider(System.Text.CodePagesEncodingProvider.Instance);
        }

        /// <summary>
        /// نمای صفحه اصلی
        /// </summary>
        /// <returns></returns>
        public IActionResult Index()
        {
            return View();
        }

       

        /// <summary>
        /// نمای ثبت اطلاعات
        /// </summary>
        /// <returns></returns>
        public IActionResult Information()
        {
            ViewBag.unitName = new SelectList(LookupService.Mu(), "id", "text");

            return View();
        }

        /// <summary>
        /// ایجاد
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        /// <exception cref="AppException"></exception>
        public IActionResult Create(ProductModel.Create model)
        {
            try
            {
                if (TempData["AppError"] != null)
                {
                    throw new AppException(TempData["AppError"].ToString());
                }

                TaxContext context = new TaxContext();

//todo          Guid? accountId = ContextService.GetDefaultAccountId(HttpContext);
                Guid? accountId = new Guid("E7E47127-0BE2-4C87-B3B0-78DEB1277732");

                ProductService.Create(new TbProduct
                {
                    AccountId = accountId,
                    ProductName = model.ProductName,
                    ProductNumber = model.ProductNumber,
                    TaxValue = model.TaxValue,
                    UnitName = model.UnitName,
                    ProductId = Guid.NewGuid()
                }, context);

                context.SaveChanges();

                return Ok(new AppModel.JsonResultModel
                {
                    Id = 0,
                    Message = AppModel.SuccessMessage,
                    Data = null
                });

            }
            catch (Exception ex)
            {
                string message = MessageService.GetExceptionMessage(ex);
                return BadRequest(new AppModel.JsonResultModel
                {
                    Id = ex.HResult,
                    Message = message,
                    Data = null
                });
            }
        }

        /// <summary>
        /// دریافت اطلاعات یک ردیف
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        /// <exception cref="AppException"></exception>
        public IActionResult Get(Guid id)
        {

            try
            {
                if (TempData["AppError"] != null)
                {
                    throw new AppException(TempData["AppError"].ToString());
                }

                TaxContext context = new TaxContext();

                TbProduct? result = ProductService.Get(id, context).FirstOrDefault();

                return Ok(new AppModel.JsonResultModel
                {
                    Id = 0,
                    Message = AppModel.SuccessMessage,
                    Data = new
                    {
                        result.TaxValue,
                        UnitName = result.UnitName,
                        result.ProductName,
                        result.ProductId,
                        result.ProductNumber
                    }
                });

            }
            catch (Exception ex)
            {
                string message = MessageService.GetExceptionMessage(ex);
                return BadRequest(new AppModel.JsonResultModel
                {
                    Id = ex.HResult,
                    Message = message,
                    Data = null
                });
            }
        }

        /// <summary>
        /// بروزرسانی
        /// </summary>
        /// <param name="id"></param>
        /// <param name="model"></param>
        /// <returns></returns>
        /// <exception cref="AppException"></exception>
        public IActionResult Update(Guid id, ProductModel.Update model)
        {

            try
            {
                if (TempData["AppError"] != null)
                {
                    throw new AppException(TempData["AppError"].ToString());
                }

                TaxContext context = new TaxContext();

                TbProduct product = ProductService.Get(id, context).FirstOrDefault();

                product.ProductName = model.ProductName;
                product.ProductNumber = model.ProductNumber;
                product.TaxValue = model.TaxValue;
                product.UnitName = model.UnitName;

                ProductService.Update(product, context);

                context.SaveChanges();

                return Ok(new AppModel.JsonResultModel
                {
                    Id = 0,
                    Message = AppModel.SuccessMessage,
                    Data = null
                });

            }
            catch (Exception ex)
            {
                string message = MessageService.GetExceptionMessage(ex);
                return BadRequest(new AppModel.JsonResultModel
                {
                    Id = ex.HResult,
                    Message = message,
                    Data = null
                });
            }
        }

        /// <summary>
        /// دریافت کلیه اطلاعات
        /// </summary>
        /// <returns></returns>
        /// <exception cref="AppException"></exception>
        public IActionResult GetAll()
        {

            try
            {
                if (TempData["AppError"] != null)
                {
                    throw new AppException(TempData["AppError"].ToString());
                }

                var draw = HttpContext.Request.Form["draw"].FirstOrDefault();
                var sortColumn = HttpContext.Request.Form["columns[" + HttpContext.Request.Form["order[0][column]"].FirstOrDefault() + "][name]"].FirstOrDefault();
                var sortDirection = HttpContext.Request.Form["order[0][dir]"].FirstOrDefault();
                var searchValue = HttpContext.Request.Form["search[value]"].FirstOrDefault();
                int pageSize = Convert.ToInt32(HttpContext.Request.Form["length"].FirstOrDefault() ?? "0");
                int pageNumber = Convert.ToInt32(HttpContext.Request.Form["start"].FirstOrDefault() ?? "0") / pageSize;

                Guid? accountId = ContextService.GetDefaultAccountId(HttpContext);

                int totalRecord, filterRecord = 0;

                TaxContext taxContext = new TaxContext();


                IQueryable<TbProduct> filter = ProductService.Get().Where(x => x.AccountId == accountId || x.AccountId == null);

                totalRecord = filter.Count();

                if (!string.IsNullOrEmpty(searchValue) && !string.IsNullOrWhiteSpace(searchValue))
                {
                    filter = filter.Where(x => x.ProductName.Contains(searchValue) || x.ProductNumber.Contains(searchValue));
                }

                filterRecord = filter.Count();

                filter = filter.OrderBy(x => x.ProductName);

                if (!string.IsNullOrEmpty(sortColumn) && !string.IsNullOrWhiteSpace(sortColumn))
                {
                    switch (sortColumn.ToLower())
                    {
                        case "taxvalue": filter = (sortDirection == "asc" ? filter.OrderBy(x => x.TaxValue) : filter.OrderByDescending(x => x.TaxValue)); break;
                        case "unitname": filter = (sortDirection == "asc" ? filter.OrderBy(x => x.UnitName) : filter.OrderByDescending(x => x.UnitName)); break;
                        case "productname": filter = (sortDirection == "asc" ? filter.OrderBy(x => x.ProductName) : filter.OrderByDescending(x => x.ProductName)); break;
                        case "productnumber": filter = (sortDirection == "asc" ? filter.OrderBy(x => x.ProductNumber) : filter.OrderByDescending(x => x.ProductNumber)); break;
                    }
                }

                filter = filter.Skip(pageNumber * pageSize).Take(pageSize);

                var final = from a in filter.ToList()
                            select new
                            {
                                a.TaxValue,
                                UnitName = a.UnitName == null || a.UnitName == string.Empty ? "--" : LookupService.Mu(a.UnitName)[0].text,
                                ProductName=a.ProductName.Length>50? a.ProductName.Remove(40,a.ProductName.Length-40).Insert(40," ..."):a.ProductName,
                                a.ProductNumber,
                                a.ProductId,
                            };

                return Ok(new
                {
                    draw = draw,
                    recordsTotal = totalRecord,
                    recordsFiltered = filterRecord,
                    data = final
                });

            }
            catch (Exception ex)
            {
                string message = MessageService.GetExceptionMessage(ex);
                return BadRequest(new AppModel.JsonResultModel
                {
                    Id = ex.HResult,
                    Message = message,
                    Data = null
                });
            }
        }

        /// <summary>
        /// حذف
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        /// <exception cref="AppException"></exception>
        public IActionResult Delete(Guid id)
        {

            try
            {
                if (TempData["AppError"] != null)
                {
                    throw new AppException(TempData["AppError"].ToString());
                }

                TaxContext context = new TaxContext();

                TbProduct product = ProductService.Get(id, context).FirstOrDefault();


                ProductService.Delete(id, context);

                context.SaveChanges();

                return Ok(new AppModel.JsonResultModel
                {
                    Id = 0,
                    Message = AppModel.SuccessMessage,
                    Data = null
                });
            }
            catch (Exception ex)
            {
                string message = MessageService.GetExceptionMessage(ex);
                return BadRequest(new AppModel.JsonResultModel
                {
                    Id = ex.HResult,
                    Message = message,
                    Data = null
                });
            }
        }

        /// <summary>
        /// لوکاپ
        /// </summary>
        /// <param name="q"></param>
        /// <returns></returns>
        /// <exception cref="AppException"></exception>
        public IActionResult Lookup(string q)
        {
            try
            {
                if (TempData["AppError"] != null)
                {
                    throw new AppException(TempData["AppError"].ToString());
                }

                Guid? accountId = ContextService.GetDefaultAccountId(HttpContext);


                IQueryable<TbProduct> filter = ProductService.Get().Where(x => x.AccountId == accountId || x.AccountId == null);

                if (!string.IsNullOrEmpty(q) && !string.IsNullOrWhiteSpace(q))
                {
                    filter = filter.Where(x =>x.ProductNumber.Contains(q));
                }

                var query = from a in filter.Take(10)
                            select new
                            {
                                id = a.ProductId.ToString(),
                                text = a.ProductName + " | کد محصول: " + a.ProductNumber,
                            };

                return Json(new { items = query.ToList() });

            }
            catch (Exception ex)
            {
                string message = MessageService.GetExceptionMessage(ex);
                return BadRequest(new AppModel.JsonResultModel
                {
                    Id = ex.HResult,
                    Message = message,
                    Data = null
                });

            }
        }

       



        

    }
}
