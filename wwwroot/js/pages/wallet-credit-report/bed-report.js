
var tableBedReport;

function initTableBedReport() {

    if (tableBedReport != undefined) {
        tableBedReport.destroy();
    }

    tableBedReport = $('#tableBedReport').DataTable(
        {
            ajax: {
                url: "/WalletCreditReport/BedReportGetAll",
                type: "POST",
                data: {
                    userId: bedReportRecordId,
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
                { data: "date", name: "date", orderable: false },
                { data: "price", name: "price", orderable: false },
                { data: "accountNumber", name: "accountNumber", orderable: false },
                { data: "verificationCode", name: "verificationCode", orderable: false },
            ],
            columnDefs: [
                { "className": "dt-center", "targets": "_all" },
            ],

        }
    );
}

$(document).ready(function () {
    initTableBedReport();
});
