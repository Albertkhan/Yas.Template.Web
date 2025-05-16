
namespace Yas.Template.Web.Services
{
    /// <summary>
    /// سرویس مدیریت استثنا
    /// </summary>
    public class AppException:Exception
    {
        public AppException(string message,int id=-1,object data=null):base(message,new Exception("AppException"))
        {
            HResult = id;
        }
    }
}
