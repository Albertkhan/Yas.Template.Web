var dateOfInstance = new mds.MdsPersianDateTimePicker(document.getElementById('fdateOf'), {
    targetTextSelector: '[data-name="dateof-text"]',
    targetDateSelector: '[data-name="dateof-date"]',
});

var dateToInstance = new mds.MdsPersianDateTimePicker(document.getElementById('fdateTo'), {
    targetTextSelector: '[data-name="dateto-text"]',
    targetDateSelector: '[data-name="dateto-date"]',
});

var tableWalletCreditReportIndex;

function initTableWalletCreditReportIndex() {

    if (tableWalletCreditReportIndex != undefined) {
        tableWalletCreditReportIndex.destroy();
    }
    
    tableWalletCreditReportIndex = $('#tableWalletCreditReportIndex').DataTable(
        {
            ajax: {
                url: "/WalletCreditReport/GetAll",
                type: "POST",
                data: {
                    UserId: $("#fUserId").val(),
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
                {
                    data: null,
                    title: "عملیات",
                    orderable: false,
                    render: function (data, type, row, meta) {
                        return '<button title="ریز بستانکاری" row-id=' + row.rowId + ' type="button" class="btn action-bestreport btn-icon btn-light-success glow"><i class="bx bx-spreadsheet"></i></button><button row-id=' + row.rowId + ' title="ریز بدهکاری" type="button" class="btn action-bedreport btn-icon btn-light-success glow"><i class="bx bx-spreadsheet"></i></button><button row-id=' + row.rowId + ' title="گردش حساب" type="button" class="btn action-accountreport btn-icon btn-light-success glow"><i class="bx bx-spreadsheet"></i></button><button row-id=' + row.rowId + ' title="ثبت تراکنش" type="button" class="btn action-add-accounttransaction btn-icon btn-light-success glow"><i class="bx bx-folder-plus"></i></button>'
                    }
                },
                { data: "fullName", name: "fullName" },
                { data: "mobile", name: "mobile", orderable: false },
                { data: "remain", name: "remain" },
                { data: "userType", name: "userType", orderable: false },
                { data: "count", name: "count", orderable: false },
                { data: "best", name: "best" },
                { data: "bed", name: "bed" },
            
            ],
            columnDefs: [
                { "className": "dt-center", "targets": "_all" },
            ],

        }
    );
}

$(document).on("click", ".action-add-accounttransaction", function () {

    $(".modal-xlarge").load('/AccountTransactions/Information?modal=modal-xlarge&reload=true', function () {
        var myModal = new bootstrap.Modal(document.getElementById('modal-xlarge'), {
            keyboard: false,
            backdrop: 'static'
        })
        myModal.show()
    });
});

$(document).on("click", ".action-bestreport", function () {
    var id = $(this).attr("row-id");
    $(".modal-xlarge").load('/WalletCreditReport/BestReport?modal=modal-xlarge&reload=true&id=' + id, function () {
        var myModal = new bootstrap.Modal(document.getElementById('modal-xlarge'), {
            keyboard: false,
            backdrop: 'static'
        })
        myModal.show()
    });
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

$("#formWalletCreditReportFilter").submit(function (e) {

    e.preventDefault();

    initTableWalletCreditReportIndex();

});

$(document).ready(function () {

    initTableWalletCreditReportIndex();
});
