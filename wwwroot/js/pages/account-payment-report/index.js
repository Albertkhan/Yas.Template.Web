var planOfInstance = new mds.MdsPersianDateTimePicker(document.getElementById('fplanOf'), {
    targetTextSelector: '[data-name="planof-text"]',
    targetDateSelector: '[data-name="planof-date"]',
});

var planToInstance = new mds.MdsPersianDateTimePicker(document.getElementById('fplanTo'), {
    targetTextSelector: '[data-name="planto-text"]',
    targetDateSelector: '[data-name="planto-date"]',
});

var tableAccountPaymentReportIndex;

function initTableAccountPaymentReportIndex() {

    if (tableAccountPaymentReportIndex != undefined) {
        tableAccountPaymentReportIndex.destroy();
    }
    
    tableAccountPaymentReportIndex = $('#tableAccountPaymentReportIndex').DataTable(
        {
            ajax: {
                url: "/AccountPaymentReport/GetAll",
                type: "POST",
                data: {
                    UserId: $("#fUserId").val(),
                    UserType: $("#fUserType").val(),
                    PlanDateOf: $("#fplanOfText").val(),
                    PlanDateTo: $("#fplanToText").val()
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
                    render: function (data, type, row, meta) {
                        return '<button title="پلن های خریداری شده" row-id=' + row.rowId + ' type="button" class="btn action-buyplanreport btn-icon btn-light-success glow"><i class="bx bx-spreadsheet"></i></button><button title="صورتحسابها" row-id=' + row.rowId + ' type="button" class="btn action-head btn-icon btn-light-success glow"><i class="bx bx-spreadsheet"></i></button><button title="کیف پول" row-id=' + row.rowId + ' type="button" class="btn action-credit btn-icon btn-light-success glow"><i class="bx bx-spreadsheet"></i></button>'
                    }
                },
                { data: "userName", name: "userName", orderable: false },
                { data: "accountName", name: "accountName", orderable: false },
                { data: "mobile", name: "mobile", orderable: false },
                { data: "agentName", name: "agentName", orderable: false },
                { data: "endDate", name: "endDate", orderable: false },
                { data: "status", name: "status", orderable: false },
            ],
            columnDefs: [
                { "className": "dt-center", "targets": "_all" },
            ],

        }
    );
}

$(document).on("click", ".action-buyplanreport", function () {
    var id = $(this).attr("row-id");
    $(".modal-xlarge").load('/AccountPaymentReport/BuyPlanReport?modal=modal-xlarge&reload=true&id=' + id, function () {
        var myModal = new bootstrap.Modal(document.getElementById('modal-xlarge'), {
            keyboard: false,
            backdrop: 'static'
        })
        myModal.show()
    });
});

$(document).on("click", ".action-head", function () {
    var id = $(this).attr("row-id");
    window.open("/Head/Index?AccountId=" + id, '_blank').focus();
});

$(document).on("click", ".action-credit", function () {
    var id = $(this).attr("row-id");
    window.open("/AccountTransactions/Index?AccountId=" + id, '_blank').focus();
});

$(document).on("click", ".action-bedreport", function () {
    var id = $(this).attr("row-id");
    $(".modal-xlarge").load('/WalletCreditReport/BedReport?modal=modal-xlarge&reload=true&id=' + id, function () {
        var myModal = new bootstrap.Modal(document.getElementById('modal-xlarge'), {
            keyboard: false,
            backdrop: 'static'
        })
        myModal.show()
    });
});

$(document).on("click", ".action-accountreport", function () {
    var id = $(this).attr("row-id");
    $(".modal-xlarge").load('/WalletCreditReport/AccountReport?modal=modal-xlarge&reload=true&id=' + id, function () {
        var myModal = new bootstrap.Modal(document.getElementById('modal-xlarge'), {
            keyboard: false,
            backdrop: 'static'
        })
        myModal.show()
    });
});

$("#formAccountPaymentReportFilter").submit(function (e) {

    e.preventDefault();

    initTableAccountPaymentReportIndex();

});

$(document).ready(function () {

    initTableAccountPaymentReportIndex();
});
