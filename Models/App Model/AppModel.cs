

namespace Yas.Template.Web.Models
{
    public class AppModel
    {
        public static string UnknownError = "یک خطای ناشناخته رخ داد لطفا مجددا تلاش کنید و در صورت بروز مجدد خطا با پشتیبان سیستم تماس بگیرید";
        public static string SuccessMessage = "عملیات با موفقیت انجام شد";

        public class JsonResultModel
        {
            public int Id { get; set; }
            public string? Message { get; set; }
            public object? Data { get; set; }
        }

        public class Select2OptionModel
        {
            public string id { get; set; }
            public string text { get; set; }
        }

        public class GetAllBase
        {
            public string? SortColumn { get; set; }
            public string? SortDirection { get; set; }
            public string? SearchValue { get; set; }
            public int? PageSize { get; set; } = 10;
            public int PageNumber { get; set; } = 0;
        }
    }
}
