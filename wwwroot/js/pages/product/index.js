var tableProductIndex;

function initTableProductIndex() {

    if (tableProductIndex != undefined) {
        tableProductIndex.destroy();
    }

    tableProductIndex = $('#tableProductIndex').DataTable(
        {
            ajax: {
                url: "/Product/GetAll",
                type: "POST",
            },
            processing: true,
            serverSide: true,
            responsive: true,
            filter: true,
            width:"100%",
            layout: {
                topCenter: {
                    buttons: ['excel']
                }
            },
            columns: [
                {
                    data: null,
                    title: "عملیات",
                    orderable: false,
                    render: function (data, type, row, meta) {
                        return '<button title="حذف ردیف" row-id=' + row.productId + ' type="button" class="btn action-delete btn-icon btn-light-success glow"><i class="bx bx-trash"></i></button><button row-id=' + row.productId + ' title="مشاهده و ویرایش" type="button" class="btn action-get btn-icon btn-light-success glow"><i class="bx bx-edit"></i></button>'
                    }
                },
                { data: "productName", name: "ProductName" },
                { data: "productNumber", name: "ProductNumber" },
                { data: "unitName", name: "UnitName" },
                { data: "taxValue", name: "TaxValue" },

            ],
            columnDefs: [
                { "className": "dt-center", "targets": "_all" },
            ],

        }
    );
}

$(document).on('click', '.action-delete', function () {

    var id = $(this).attr("row-id");

    var fileData = new FormData();
    fileData.append("id", id);
    Swal.fire({
        title: 'حذف رکورد',
        text: "آیا مطمئن هستید؟",
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'تایید',
        confirmButtonClass: 'btn btn-primary',
        cancelButtonClass: 'btn btn-danger ml-1',
        cancelButtonText: 'انصراف',
        buttonsStyling: false,
    }).then(function (result) {
        if (result.value) {
            runQuery('/Product/Delete', fileData, "#demo", function (result) {
                toastr.success(result.message, '', {
                    rtl: true,
                    positionClass: 'toast-top-full-width'
                });
                tableProductIndex.ajax.reload(null, false);
            });
        }
    });
});

$(document).on('click', '.action-get', function () {

    var id = $(this).attr("row-id");

    $(".modal-xlarge").load('/Product/Information?modal=modal-xlarge&reload=true&id=' + id, function () {
        var myModal = new bootstrap.Modal(document.getElementById('modal-xlarge'), {
            backdrop: 'static',
            keyboard: false
        })
        myModal.show()
    });
});


$(document).on("click", ".action-create", function () {

    $(".modal-xlarge").load('/Product/Information?modal=modal-xlarge&reload=true', function () {
        var myModal = new bootstrap.Modal(document.getElementById('modal-xlarge'), {
            backdrop: 'static',
            keyboard: false
        })
        myModal.show()
    });
});





$(document).on("click", ".action-head-excel", function () {

    $(".modal-xlarge").load('/Product/Excel?modal=modal-xlarge&reload=true', function () {
        var myModal = new bootstrap.Modal(document.getElementById('modal-xlarge'), {
            keyboard: false,
            backdrop: 'static'

        })
        myModal.show()

        $("#modal-xlarge").on("hidden.bs.modal", function () {

           
        });
    });
});

$(document).ready(function () {


    initTableProductIndex();
});