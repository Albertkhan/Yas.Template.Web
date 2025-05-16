

namespace Yas.Template.Web.Databases;

public partial class TbLog
{
    public Guid LogId { get; set; }

    public Guid? UserId { get; set; }

    public Guid? AccountId { get; set; }

    public string Form { get; set; } = null!;

    public string Action { get; set; } = null!;

    public string Message { get; set; } = null!;

    public DateTime CreateOn { get; set; }

    public string Ipaddress { get; set; } = null!;

   
}
