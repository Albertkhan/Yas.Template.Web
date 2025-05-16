
var tableBuyPlanReport;

function initTableBuyPlanReport() {

    if (tableBuyPlanReport != undefined) {
        tableBuyPlanReport.destroy();
    }
    
    tableBuyPlanReport = $('#tableBuyPlanReport').DataTable(
        {
            ajax: {
                url: "/AccountPaymentReport/BuyPlanReportGetAll",
                type: "POST",
                data: {
                    accountId: buyPlanReportRecordId
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
                { data: "buyPlanName", name: "BuyPlanName" },
                { data: "startDate", name: "StartDate" },
                { data: "endDate", name: "EndDate" },
                { data: "total", name: "Total" },
                { data: "discountCode", name: "DiscountCode" },
                { data: "discount", name: "Discount" },
            ],
            columnDefs: [
                { "className": "dt-center", "targets": "_all" },
            ],

        }
    );
}

$(document).ready(function () {

    initTableBuyPlanReport();
});
