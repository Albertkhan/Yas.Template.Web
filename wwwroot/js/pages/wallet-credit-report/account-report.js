
var tableAccountReport;

function initTableAccountReport() {

    if (tableAccountReport != undefined) {
        tableAccountReport.destroy();
    }
    
    tableAccountReport = $('#tableAccountReport').DataTable(
        {
            ajax: {
                url: "/WalletCreditReport/AccountReportGetAll",
                type: "POST",
                data: {
                    userId: accountReportRecordId,
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
                { data: "mobile", name: "mobile", orderable: false },
                { data: "date", name: "date", orderable: false },
                { data: "best", name: "best", orderable: false },
                { data: "bed", name: "bed", orderable: false },
                { data: "regarding", name: "regarding", orderable: false },
                { data: "remain", name: "remain", orderable: false },
            ],
            columnDefs: [
                { "className": "dt-center", "targets": "_all" },
            ],

        }
    );
}

$(document).ready(function () {

    initTableAccountReport();
});
