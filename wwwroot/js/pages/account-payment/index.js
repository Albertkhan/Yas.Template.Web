var payOfInstance = new mds.MdsPersianDateTimePicker(document.getElementById('fPayOf'), {
    targetTextSelector: '[data-name="payof-text"]',
    targetDateSelector: '[data-name="payof-date"]',
});

var payToInstance = new mds.MdsPersianDateTimePicker(document.getElementById('fPayTo'), {
    targetTextSelector: '[data-name="payto-text"]',
    targetDateSelector: '[data-name="payto-date"]',
});

var createOfInstance = new mds.MdsPersianDateTimePicker(document.getElementById('fCreateOf'), {
    targetTextSelector: '[data-name="createof-text"]',
    targetDateSelector: '[data-name="createof-date"]',
});

var createToInstance = new mds.MdsPersianDateTimePicker(document.getElementById('fCreateTo'), {
    targetTextSelector: '[data-name="createto-text"]',
    targetDateSelector: '[data-name="createto-date"]',
});

var tableAccountPaymentIndex;

function initTableAccountPaymentIndex() {

    if (tableAccountPaymentIndex != undefined) {
        tableAccountPaymentIndex.destroy();
    }

    tableAccountPaymentIndex = $('#tableAccountPaymentIndex').DataTable(
        {
            ajax: {
                url: "/AccountPayment/GetAll",
                type: "POST",
                data: {
                    AccountBuyPlanId: $('#fAccountBuyPlanId').val(),
                    CreateOf: $('#fCreateOf').val(),
                    CreateTo: $('#fCreateTo').val(),
                    DiscountCode: $('#fDiscountCode').val(),
                    PayOf: $('#fPayOfText').val(),
                    PayTo: $('#fPayToText').val(),
                    CreateOf: $('#fCreateOfText').val(),
                    CreateTo: $('#fCreateToText').val(),
                    ReferenceCode: $('#fReferenceCode').val(),
                    Status: $('#fStatus').val(),
                    UserId: $('#fUser').val(),
                    BuyStatus: $('#fBuyStatus').val(),
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
                    orderable: false,
                    "render": function (data, type, row, meta) {
                        return '<button style="visibility: ' + row.editShow +';" row-id=' + row.rowId + ' title="مشاهده و ویرایش" type="button" class="btn action-get btn-icon btn-light-success glow"><i class="bx bx-edit"></i></button>';
                    }
                },
                { data: "createOn", name: "createOn" },
                { data: "user", name: "User" },
                { data: "accountName", name: "accountName" },
                { data: "economicCode", name: "EconomicCode" },
                { data: "shenaseMelli", name: "ShenaseMelli" },
                { data: "agentName", name: "agentName" },
                {
                    data: null,
                    title: "فاکتور",
                    render: function (data, type, row, meta) {
                        return '<div class="form-check mt-3"><input class="form-check-input" ' + row.isInvoice + ' type ="checkbox" id ="isApi" name="IsApi" disabled></div>'
                    }
                },
                { data: "total", name: "Total" },
                { data: "buyPlanName", name: "BuyPlanName" },
                { data: "pricePerUnit", name: "PricePerUnit" },
                { data: "discountCode", name: "DiscountCode" },
                { data: "discountPercent", name: "DiscountPercent" },
                { data: "discount", name: "Discount" },
                { data: "tax", name: "Tax" },
             
                { data: "status", name: "Status", orderable: false },
                { data: "payType", name: "payType" },
                { data: "payOn", name: "PayOn" },
                { data: "referenceCode", name: "ReferenceCode" },
                { data: "invoiceNumber", name: "invoiceNumber" },
                { data: "invoiceDate", name: "invoiceDate" },
                { data: "moaref", name: "moaref" },
               
            ],
            columnDefs: [
                { "className": "dt-center", "targets": "_all" },
            ],
        }
    );
}

$(document).on('click', '.action-delete-accountpayment', function () {

    var id = $(this).attr("row-id");

    var fileData = new FormData();
    fileData.append("RecordId", id);
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
            runQuery('/AccountPayment/Delete', fileData, "#demo", function (result) {
                toastr.success(result.message, '', {
                    rtl: true,
                    positionClass: 'toast-top-full-width'
                });
                tableAccountPaymentIndex.ajax.reload(null, false);
            });
        }
    });
});

$(document).on('click', '.action-get', function () {

    var id = $(this).attr("row-id");

    $(".modal-xlarge").load('/AccountPayment/Information?modal=modal-xlarge&reload=true&id=' + id, function () {
        var myModal = new bootstrap.Modal(document.getElementById('modal-xlarge'), {
            backdrop: 'static',
            keyboard: false
        })
        myModal.show()
    });
});

$("#formFilter").submit(function (e) {

    e.preventDefault();

    initTableAccountPaymentIndex();

});


$(document).ready(function () {
    initTableAccountPaymentIndex();
});
