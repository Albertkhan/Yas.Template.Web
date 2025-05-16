
using Yas.Template.Web.Databases;
using static Yas.Template.Web.Models.AppModel;

namespace Yas.Template.Web.Models
{
    public class ProductModel
    {
        public class Create
        {
            public string ProductName { get; set; }

            public string ProductNumber { get; set; }

            public string? UnitName { get; set; }

            public byte TaxValue { get; set; }

            public Guid AccountId { get; set; }
        }

        public class Update
        {
            public string ProductName { get; set; }

            public string ProductNumber { get; set; }

            public string? UnitName { get; set; }

            public byte TaxValue { get; set; }

        }

        public class GetAll
        {
            public class Parameters:GetAllBase
            {
                public Guid? AccountId { get; set; }
            }

            public class Result
            {
                public IQueryable<TbProduct> Data { get; set; }
                public int TotalRecord { get; set; }
                public int FilterRecord { get; set; }
            }
        }

    }
}
