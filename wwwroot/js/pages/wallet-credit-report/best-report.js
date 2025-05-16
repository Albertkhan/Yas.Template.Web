
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
                    userId: bestReportRecordId,
                    DateOf: $("#fdateOfText").val(),
                    DateTo: $("#fdateToText").val()
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
                { data: "user", name: "user", orderable: false },
                { data: "userName", name: "userName", orderable: false },
                { data: "mobile", name: "mobile", orderable: false },
                { data: "date", name: "date", orderable: false },
                { data: "discountCode", name: "discountCode", orderable: false },
                { data: "discountPercent", name: "discountPercent", orderable: false },
                { data: "agentPercent", name: "agentPercent", orderable: false },
                { data: "price", name: "price", orderable: false },
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
