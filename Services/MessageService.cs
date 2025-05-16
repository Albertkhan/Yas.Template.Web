using Yas.Template.Web.Models;
using Microsoft.AspNetCore.Http.HttpResults;
using System;

namespace Yas.Template.Web.Services
{
    /// <summary>
    /// سرویس مدیت استثنا
    /// </summary>
    public class MessageService
    {
        /// <summary>
        /// پردازش پیام
        /// </summary>
        /// <param name="ex"></param>
        /// <returns></returns>
        public static string GetExceptionMessage(Exception ex)
        {
            string Message = string.Empty;

            if (ex.InnerException != null)
                if (ex.InnerException.Message == "AppException")
                {
                    return Message = ex.Message;
                }
                else if (ex.InnerException.Message.Contains("conflicted"))
                {
                    return "ابتدا رکوردهای وابسته به این فرم را حذف نمایید";
                }

            return AppModel.UnknownError;

        }
    }
}
