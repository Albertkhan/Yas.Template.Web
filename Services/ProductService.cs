
using Yas.Template.Web.Models;
using Yas.Template.Web.Databases;
using ClosedXML.Excel;
using DocumentFormat.OpenXml.Math;
using DocumentFormat.OpenXml.Office2016.Drawing.ChartDrawing;
using DocumentFormat.OpenXml.Spreadsheet;
using DocumentFormat.OpenXml.Vml.Office;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using System.Collections;
using System.IO.Compression;
using System.Runtime.CompilerServices;
//using static Org.BouncyCastle.Math.EC.ECCurve;

namespace Yas.Template.Web.Services
{
    /// <summary>
    /// سرویس کالا و خدمات
    /// </summary>
    public class ProductService
    {
        /// <summary>
        /// ایجاد
        /// </summary>
        /// <param name="model"></param>
        /// <param name="context"></param>
        /// <returns></returns>
        /// <exception cref="AppException"></exception>
        public static TbProduct Create(TbProduct model, TaxContext? context = null)
        {
            TaxContext taxContext = context == null ? new TaxContext() : context;

            if (string.IsNullOrEmpty(model.ProductName) || string.IsNullOrWhiteSpace(model.ProductName))
            {
                throw new AppException("نام کالا / خدمت وارد نشده است");
            }

            if (string.IsNullOrEmpty(model.ProductNumber) || string.IsNullOrWhiteSpace(model.ProductNumber))
            {
                throw new AppException("شناسه کالا / خدمت وارد نشده است");
            }

            if (model.ProductNumber.Length != 13)
            {
                throw new AppException("طول شناسه کالا / خدمت باید 13 کاراکتر باشد");
            }

            //if (string.IsNullOrEmpty(model.UnitName) || string.IsNullOrWhiteSpace(model.UnitName))
            //{
            //    throw new AppException("واحد کالا وارد نشده است");
            //}

            if (model.TaxValue == null)
            {
                throw new AppException("درصد مالیات وارد نشده است");
            }

            //IQueryable<TbProduct> filterProduct = Get(null, taxContext).Where(x => (x.ProductName == model.ProductName && x.AccountId == model.AccountId) || (x.ProductName == model.ProductName && x.AccountId == null));

            //if (filterProduct.Any())
            //{
            //    throw new AppException("نام کالا تکراری است");
            //}

            IQueryable<TbProduct> filterProductNumber = Get(null, taxContext).Where(x => (x.ProductNumber == model.ProductNumber && x.AccountId == model.AccountId) || (x.ProductNumber == model.ProductNumber && x.AccountId == null));

            if (filterProductNumber.Any())
            {
                throw new AppException("شناسه کالا تکراری است");
            }

            taxContext.Add(model);

            return model;
        }

        /// <summary>
        /// بروزرسانی
        /// </summary>
        /// <param name="model"></param>
        /// <param name="context"></param>
        /// <returns></returns>
        /// <exception cref="AppException"></exception>
        public static TbProduct Update(TbProduct model, TaxContext? context = null)
        {
            TaxContext taxContext = context == null ? new TaxContext() : context;

            if (string.IsNullOrEmpty(model.ProductName) || string.IsNullOrWhiteSpace(model.ProductName))
            {
                throw new AppException("نام محصول وارد نشده است");
            }

            if (string.IsNullOrEmpty(model.ProductNumber) || string.IsNullOrWhiteSpace(model.ProductNumber))
            {
                throw new AppException("کد محصول وارد نشده است");
            }

            if (model.ProductNumber.Length != 13)
            {
                throw new AppException("طول شناسه کالا / خدمت باید 13 کاراکتر باشد");
            }

            //if (string.IsNullOrEmpty(model.UnitName) || string.IsNullOrWhiteSpace(model.UnitName))
            //{
            //    throw new AppException("واحد کالا وارد نشده است");
            //}

            if (model.TaxValue == null)
            {
                throw new AppException("درصد مالیات وارد نشده است");
            }

            Guid? accountId = model.AccountId;

            //IQueryable<TbProduct> filterProduct = Get(null, taxContext).Where(x => x.ProductId != model.ProductId && ((x.ProductName == model.ProductName && x.AccountId == accountId) || (x.ProductName == model.ProductName && x.AccountId == null)));

            //if (filterProduct.Any())
            //{
            //    throw new AppException("نام کالا تکراری است");
            //}

            IQueryable<TbProduct> filterProductNumber = Get(null, taxContext).Where(x => x.ProductId != model.ProductId && ((x.ProductNumber == model.ProductNumber && x.AccountId == accountId) || (x.ProductNumber == model.ProductNumber && x.AccountId == null)));

            if (filterProductNumber.Any())
            {
                throw new AppException("شناسه کالا تکراری است");
            }

            taxContext.Update(model);

            return model;
        }

        /// <summary>
        /// دریافت
        /// </summary>
        /// <param name="id"></param>
        /// <param name="context"></param>
        /// <returns></returns>
        public static IQueryable<TbProduct> Get(Guid? id = null, TaxContext? context = null)
        {
            TaxContext taxContext = context == null ? new TaxContext() : context;

            IQueryable<TbProduct> filter = taxContext.TbProducts;

            if (id != null)
            {
                filter = filter.Where(x => x.ProductId == id);
            }

            return filter;
        }

        /// <summary>
        /// حذف
        /// </summary>
        /// <param name="id"></param>
        /// <param name="context"></param>
        /// <exception cref="AppException"></exception>
        public static void Delete(Guid id, TaxContext? context = null)
        {
            TaxContext taxContext = context == null ? new TaxContext() : context;

            TbProduct? entity = Get(id, taxContext).FirstOrDefault();

            if (entity == null)
            {
                throw new AppException("رکورد یافت نشد");
            }

            taxContext.TbProducts.Remove(entity);
        }

        /// <summary>
        /// ورود با اکسل
        /// </summary>
        /// <param name="excelFiles"></param>
        /// <param name="webHostEnvironment"></param>
        /// <param name="httpContext"></param>
        /// <param name="context"></param>
        /// <exception cref="AppException"></exception>
        public static async void ExcelImport(IFormFile excelFiles, IWebHostEnvironment? webHostEnvironment, HttpContext httpContext, TaxContext? context = null)
        {
            TaxContext taxContext = context == null ? new TaxContext() : context;

            IFormFile file = excelFiles;

            long fileSize = file.Length;
            string fileName = file.FileName;
            string mimeType = file.ContentType;
            string ext = Path.GetExtension(fileName).ToLower();

            string[] zipExtension = { ".zip" };
            string[] excelExtension = { ".xls", ".xlsx" };

            XLWorkbook? workbook = null;

            if (zipExtension.Contains(ext))
            {
                ZipArchive zipArchive = new ZipArchive(file.OpenReadStream());

                if (!excelExtension.Contains(Path.GetExtension(zipArchive.Entries[0].Name).ToLower()))
                {
                    throw new AppException("فرمت فایل باید اکسل باشد");
                }

                zipArchive.Entries[0].ExtractToFile(webHostEnvironment.WebRootPath + @"\img\upload\setting\\stufflist.xlsx", true);

                Stream stream = new MemoryStream(File.ReadAllBytes(webHostEnvironment.WebRootPath + @"\img\upload\setting\\stufflist.xlsx"));

                workbook = new XLWorkbook(stream);
            }
            else if (excelExtension.Contains(ext))
            {
                workbook = new XLWorkbook(file.OpenReadStream());
            }

            int headerRow = 0;
            int bodyRow = 0;
            int paymentRow = 0;


            //تعیین شیت
            var sheet = workbook.Worksheet(1);

            IXLRows rows = sheet.Rows();

            int rowIndex = 0;


            LogService.Create(new TbLog
            {
                Action = "ExcelImport",
                Form = "ProductService",
                Message = string.Format("َشروع عملیات")
            }, httpContext, null);

            try
            {
                var queryExcel = (from a in rows
                                  select new TbProduct
                                  {
                                      ProductId = Guid.NewGuid(),
                                      ProductNumber = a.Cell(1).GetValue<string>(),
                                      ProductName = a.Cell(2).GetValue<string>(),
                                      TaxValue = a.RowNumber() == 1 ? (byte)0 : (a.Cell(3).IsEmpty() ? (byte)0 : a.Cell(3).GetValue<byte>())
                                  }).ToList();


                var queryDb = (from a in taxContext.TbProducts
                               select new TbProduct
                               {
                                   ProductNumber = a.ProductNumber,
                               }).ToList();


                var resultAdd = queryExcel.Where(p => !queryDb.Any(k => p.ProductNumber == k.ProductNumber));

                taxContext.TbProducts.AddRange(resultAdd);

                taxContext.SaveChanges();

                LogService.Create(new TbLog
                {
                    Action = "ExcelImport",
                    Form = "ProductService",
                    Message = string.Format("پایان عملیات")
                }, httpContext, null);
            }
            catch (Exception ex)
            {
                LogService.Create(new TbLog
                {
                    Action = "ExcelImport",
                    Form = "ProductService",
                    Message = string.Format("بروز خطا به علت: "+ex.Message)
                }, httpContext, null);
            }

          

        }

     
    }

}

