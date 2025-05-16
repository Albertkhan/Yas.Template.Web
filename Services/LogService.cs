using Yas.Template.Web.Databases;

namespace Yas.Template.Web.Services
{
    /// <summary>
    /// ثبت ثبت لاگ
    /// </summary>
    public class LogService
    {
        /// <summary>
        /// ایجاد
        /// </summary>
        /// <param name="model"></param>
        /// <param name="httpContext"></param>
        /// <param name="context"></param>
        /// <returns></returns>
        public static TbLog Create(TbLog model, HttpContext httpContext, TaxContext? context = null)
        {
            TaxContext taxContext = context == null ? new TaxContext() : context;

            model.Ipaddress= httpContext.Request.HttpContext.Connection.RemoteIpAddress.ToString();
            model.CreateOn = DateTime.Now;
           // model.UserId = ContextService.GetUserId(httpContext);
            model.LogId = Guid.NewGuid();
           // model.AccountId = ContextService.GetDefaultAccountId(httpContext);

            taxContext.Add(model);

            if (context==null)
            {
                taxContext.SaveChanges();
            }

            return model;
        }

        /// <summary>
        /// دریافت
        /// </summary>
        /// <param name="id"></param>
        /// <param name="context"></param>
        /// <returns></returns>
        public static IQueryable<TbLog> Get(Guid? id = null, TaxContext? context = null)
        {
            TaxContext taxContext = context == null ? new TaxContext() : context;

            IQueryable<TbLog> filter = taxContext.TbLogs;

            if (id != null)
            {
                filter = filter.Where(x => x.LogId == id);
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

            TbLog? entity = Get(id, taxContext).FirstOrDefault();

            if (entity == null)
            {
                throw new AppException("رکورد یافت نشد");
            }

            taxContext.TbLogs.Remove(entity);

            if (context == null)
            {
                taxContext.SaveChanges();
            }
        }


    }
}
