var tableAccountBuyPlanIndex;

function initTableAccountBuyPlanIndex() {

    if (tableAccountBuyPlanIndex != undefined) {
        tableAccountBuyPlanIndex.destroy();
    }

    tableAccountBuyPlanIndex = $('#tableAccountBuyPlanIndex').DataTable(
        {
            ajax: {
                url: "/AccountBuyPlan/GetAll",
                type: "POST",
                data: {
                    name: $('#fName').val(),
                    status:$('#fPlanStatus').val(),
                },
                error: function (result, xhr, status, error) {

                    toastr.error(result.responseJSON.message, '', {
                        rtl: true,
                        positionClass: 'toast-top-full-width'
                    });
                },
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
                    render: function (data, type, row, meta) {
                        return '<button title="حذف" row-id=' + row.rowId + ' type="button" class="btn action-delete-accountbuyplan btn-icon btn-light-success glow"><i class="bx bx-trash"></i></button><button row-id=' + row.rowId + ' title="مشاهده و ویرایش" type="button" class="btn action-get-accountbuyplan btn-icon btn-light-success glow"><i class="bx bx-edit"></i></button><button title="تغییر وضعیت" row-id=' + row.rowId + ' type="button" class="btn action-changestatus-accountbuyplan btn-icon btn-light-success glow"><i class="bx bx-user-check"></i></button>'
                    }
                },
                { data: "name", name: "name" },
                { data: "price", name: "price" },
                { data: "salePrice", name: "salePrice" },
                { data: "number", name: "number" },
                { data: "unit", name: "unit" },
                { data: "priority", name: "priority" },
                { data: "status", name: "status" },
            ],
            columnDefs: [
                { "className": "dt-center", "targets": "_all" },
            ],
        }
    );
}

$(document).on('click', '.action-delete-accountbuyplan', function () {

    var id = $(this).attr("row-id");

    var fileData = new FormData();
    fileData.append("id", id);
    Swal.fire({
        title: 'حذف ردیف',
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
            runQuery('/AccountBuyPlan/Delete', fileData, "#demo", function (result) {
                toastr.success(result.message, '', {
                    rtl: true,
                    positionClass: 'toast-top-full-width'
                });
                tableAccountBuyPlanIndex.ajax.reload(null, false);
            });
        }
    });
});

$(document).on('click', '.action-changestatus-accountbuyplan', function () {

    var id = $(this).attr("row-id");

    var fileData = new FormData();
    fileData.append("AccountBuyPlanId", id);
    Swal.fire({
        title: 'تغییر وضعیت',
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
            runQuery('/AccountBuyPlan/changeStatus', fileData, "#demo", function (result) {
                toastr.success(result.message, '', {
                    rtl: true,
                    positionClass: 'toast-top-full-width'
                });
                tableAccountBuyPlanIndex.ajax.reload(null, false);
            });
        }
    });
});

$(document).on('click', '.action-get-accountbuyplan', function () {

    var id = $(this).attr("row-id");

    $(".modal-xlarge").load('/AccountBuyPlan/Information?modal=modal-xlarge&reload=true&id=' + id, function () {
        var myModal = new bootstrap.Modal(document.getElementById('modal-xlarge'), {
            backdrop: 'static',
            keyboard: false
        })
        myModal.show()
    });
});


$(document).on("click", ".action-create-accountbuyplan", function () {

    $(".modal-xlarge").load('/AccountBuyPlan/Information?modal=modal-xlarge&reload=true', function () {
        var myModal = new bootstrap.Modal(document.getElementById('modal-xlarge'), {
            keyboard: false,
            backdrop: 'static'
        })
        myModal.show()
    });
});

$("#formAccountBuyPlanFilter").submit(function (e) {

    e.preventDefault();

    initTableAccountBuyPlanIndex();

});


$(document).ready(function () {
    initTableAccountBuyPlanIndex();
});
