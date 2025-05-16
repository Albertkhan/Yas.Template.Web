

using Yas.Template.Web.Models;
using Yas.Template.Web.Databases;

namespace Yas.Template.Web.Services
{
    /// <summary>
    /// سرویس اصلی
    /// </summary>
    public class ContextService
    {

        /// <summary>
        /// دریافت حساب پیش فرض
        /// </summary>
        /// <param name="httpContext"></param>
        /// <returns></returns>
        public static Guid? GetDefaultAccountId(HttpContext httpContext)
        {
            return new Guid("E7E47127-0BE2-4C87-B3B0-78DEB1277732");
        }



    }
}
