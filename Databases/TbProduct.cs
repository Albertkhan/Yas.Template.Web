

namespace Yas.Template.Web.Databases;

public partial class TbProduct
{
    public Guid ProductId { get; set; }

    public string ProductName { get; set; } = null!;

    public string ProductNumber { get; set; } = null!;

    public string? UnitName { get; set; }

    public byte TaxValue { get; set; }

    public Guid? AccountId { get; set; }

}
