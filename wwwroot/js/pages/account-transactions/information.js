var actionDateInstance = new mds.MdsPersianDateTimePicker(document.getElementById('actionDateSelector'), {
    targetTextSelector: '[data-name="actionDate-text"]',
    targetDateSelector: '[data-name="actionDate-date"]',
});

function getAccountTransactionsInformation(accountTransactionsInformationRecordId) {

    var fileData = new FormData();
    fileData.append("id", accountTransactionsInformationRecordId);

    runQuery('/AccountTransactions/Get', fileData, "#button", function (result) {

        var keys = Object.keys(result.data);

        for (let i = 0; i < keys.length; i++) {
            var key = keys[i];
            var value = result.data[key];
            $("#" + key).val(value);
            if (key == "date") {
                actionDateInstance.setDate(new Date(value));
            }
        }

        if (result.data.userId != null) {
            var user = new Option(result.data.fullName, result.data.userId, true, true);
            $("#userId").append(user);
        }
    });
}

$("#userId").change(function () {

    var userId = $("#userId").val();

    if (userId != null) {
        var fileData = new FormData();
        fileData.append("id", $("#userId").val());

        runQuery('/User/Get', fileData, "#button", function (result) {

            $("#hesabNumber").val(result.data.hesabNumber);
            $("#shebaNumber").val(result.data.shebaNumber);
            $("#cartNumber").val(result.data.cartNumber);
            $("#bankName").val(result.data.bankName);

        });
    }
    else {
        $("#tinb").val(null);
        $("#tob").val(null);
    }
});

$("#formAccountTransactionsInformation").submit(function (e) {

    e.preventDefault();

    var fileData = new FormData(this);

    var requestUrl = '';
    if (accountTransactionsInformationRecordId == '') {
        requestUrl = '/AccountTransactions/Create';
    }
    else {
        requestUrl = '/AccountTransactions/Update';
        fileData.append("id", accountTransactionsInformationRecordId);
    }

    runQuery(requestUrl, fileData, "#buttonAccountTransactionsReg", function (result) {

        $("#" + accountTransactionsInformationModal).modal('hide');

        if (accountTransactionsInformationReload == 'true') {
            if (accountTransactionsInformationRecordId == '') {
                tableAccountTransactionsIndex.ajax.reload();
            }
            else {
                tableAccountTransactionsIndex.ajax.reload(null, false);
            }
        }

        toastr.success(result.message, '', {
            rtl: true,
            positionClass: 'toast-top-full-width'
        });
    });
});

$(document).ready(function () {
    $(".number-seperate").each(function () {
        $(this).number(true, 0);
    });

    if (accountTransactionsInformationRecordId != '') {
        getAccountTransactionsInformation(accountTransactionsInformationRecordId);
    }
});