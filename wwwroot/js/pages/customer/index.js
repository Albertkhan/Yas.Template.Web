
var tableCustomerIndex;

function initTableCustomerIndex() {

    if (tableCustomerIndex != undefined) {
        tableCustomerIndex.destroy();
    }

    tableCustomerIndex = $('#tableCustomer').DataTable(
        {
            ajax: {
                url: "/Customer/GetAll",
                type: "POST",
            },
            processing: true,
            serverSide: true,
            responsive: true,
            filter: true,
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
                        return '<button title="حذف ردیف" row-id=' + row.customerId + ' type="button" class="btn action-delete btn-icon btn-light-success glow"><i class="bx bx-trash"></i></button><button row-id=' + row.customerId + ' title="مشاهده و ویرایش" type="button" class="btn action-get btn-icon btn-light-success glow"><i class="bx bx-edit"></i></button>'
                    }
                },
                { data: "name", name: "Name" },
                { data: "economicCode", name: "EconomicCode" },
                { data: "shenaseMelli", name: "shenaseMelli" },
                { data: "postalCode", name: "PostalCode" },
                { data: "telephone", name: "Telephone" },
                { data: "customerTypeName", name: "CustomerType" },
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
            runQuery('/Customer/Delete', fileData, "#demo", function (result) {
                toastr.success(result.message, '', {
                    rtl: true,
                    positionClass: 'toast-top-full-width'
                });
                tableCustomerIndex.ajax.reload(null, false);
            });
        }
    });
});

$(document).on('click', '.action-get', function () {

    var id = $(this).attr("row-id");

    $(".modal-xlarge").load('/Customer/Information?modal=modal-xlarge&reload=true&id=' + id, function () {
        var myModal = new bootstrap.Modal(document.getElementById('modal-xlarge'), {
            backdrop: 'static',
            keyboard: false
        })
        myModal.show()
    });
});


$(document).on("click", ".action-create", function () {

    $(".modal-xlarge").load('/Customer/Information?modal=modal-xlarge&reload=true', function () {
        var myModal = new bootstrap.Modal(document.getElementById('modal-xlarge'), {
            keyboard: false,
            backdrop: 'static'
        })
        myModal.show()
    });
});


$(document).ready(function () {
    initTableCustomerIndex();
});
