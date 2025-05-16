
var tableBestReport;

function initTableBestReport() {

    if (tableBestReport != undefined) {
        tableBestReport.destroy();
    }
    
    tableBestReport = $('#tableBestReport').DataTable(
        {
            ajax: {
                url: "/WalletCreditReport/BestReportGetAll",
                type: "POST",
                data: {
                    userId: bestReportRecordId
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
                { data: "userName", name: "userName" },
                { data: "mobile", name: "mobile" },
                { data: "date", name: "date" },
                { data: "discountCode", name: "discountCode" },
                { data: "discountPercent", name: "discountPercent" },
                { data: "agentPercent", name: "agentPercent" },
                { data: "price", name: "price" },
            ],
            columnDefs: [
                { "className": "dt-center", "targets": "_all" },
            ],

        }
    );
}

$(document).ready(function () {

    initTableBestReport();
});
