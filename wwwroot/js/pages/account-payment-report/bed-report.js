
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
                    userId: bedReportRecordId
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
                { data: "date", name: "date" },
                { data: "price", name: "price" },
                { data: "accountNumber", name: "accountNumber" },
                { data: "verificationCode", name: "verificationCode" },
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
