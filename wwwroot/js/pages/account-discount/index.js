var exoireOfInstance = new mds.MdsPersianDateTimePicker(document.getElementById('fExpireOf'), {
    targetTextSelector: '[data-name="expireof-text"]',
    targetDateSelector: '[data-name="expireof-date"]',
});

var expireToInstance = new mds.MdsPersianDateTimePicker(document.getElementById('fExpireTo'), {
    targetTextSelector: '[data-name="expireto-text"]',
    targetDateSelector: '[data-name="expireto-date"]',
});

var tableAccountDiscountIndex;

function initTableAccountDiscountIndex() {

    if (tableAccountDiscountIndex != undefined) {
        tableAccountDiscountIndex.destroy();
    }

    tableAccountDiscountIndex = $('#tableAccountDiscountIndex').DataTable(
        {
            ajax: {
                url: "/AccountDiscount/GetAll",
                type: "POST",
                data: {
                    discountCode: $('#fDiscountCode').val(),
                    userId: $("#fUserId").val(),
                    expireOnOf: $('#fExpireOfText').val(),
                    expireOnTo: $('#fExpireToText').val(),
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
            filter: false,
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
                        return '<button title="حذف" row-id=' + row.rowId + ' type="button" class="btn action-delete-accountdiscount btn-icon btn-light-success glow"><i class="bx bx-trash"></i></button><button row-id=' + row.rowId + ' title="مشاهده و ویرایش" type="button" class="btn action-get-accountdiscount btn-icon btn-light-success glow"><i class="bx bx-edit"></i></button><button title="تغییر وضعیت" row-id=' + row.rowId + ' type="button" class="btn action-changestatus-accountdiscount btn-icon btn-light-success glow"><i class="bx bx-user-check"></i></button>'
                    }
                },
                { data: "createOn", name: "createOn" },
                { data: "discountCode", name: "discountCode" },
                { data: "percentValue", name: "percentValue" },
                { data: "agentPercent", name: "agentPercent" },
                { data: "useCount", name: "useCount" },
                { data: "expireOn", name: "expireOn" },
                { data: "user", name: "user" },
                { data: "used", name: "Used" },
                { data: "status", name: "status" },
            ],
            columnDefs: [
                { "className": "dt-center", "targets": "_all" },
            ],

        }
    );
}

$(document).on('click', '.action-changestatus-accountdiscount', function () {

    var id = $(this).attr("row-id");

    var fileData = new FormData();
    fileData.append("AccountDiscountId", id);
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
            runQuery('/AccountDiscount/ChangeStatus', fileData, "#demo", function (result) {
                toastr.success(result.message, '', {
                    rtl: true,
                    positionClass: 'toast-top-full-width'
                });
                tableAccountDiscountIndex.ajax.reload(null, false);
            });
        }
    });
});


$(document).on('click', '.action-delete-accountdiscount', function () {

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
            runQuery('/Accountdiscount/Delete', fileData, "#demo", function (result) {
                toastr.success(result.message, '', {
                    rtl: true,
                    positionClass: 'toast-top-full-width'
                });
                tableAccountDiscountIndex.ajax.reload(null, false);
            });
        }
    });
});

$(document).on('click', '.action-get-accountdiscount', function () {

    var id = $(this).attr("row-id");

    $(".modal-xlarge").load('/AccountDiscount/Information?modal=modal-xlarge&reload=true&id=' + id, function () {
        var myModal = new bootstrap.Modal(document.getElementById('modal-xlarge'), {
            backdrop: 'static',
            keyboard: false
        })
        myModal.show()
    });
});


$(document).on("click", ".action-create-accountdiscount", function () {

    $(".modal-xlarge").load('/AccountDiscount/Information?modal=modal-xlarge&reload=true', function () {
        var myModal = new bootstrap.Modal(document.getElementById('modal-xlarge'), {
            keyboard: false,
            backdrop: 'static'
        })
        myModal.show()
    });
});

$(document).on("click", "#buttonFilter", function () {
    initTableAccountDiscountIndex();
});


$(document).ready(function () {
    initTableAccountDiscountIndex();
});
