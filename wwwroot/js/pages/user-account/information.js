var endDateInstance = new mds.MdsPersianDateTimePicker(document.getElementById('endDateSelector'), {
    targetTextSelector: '[data-name="endDate-text"]',
    targetDateSelector: '[data-name="endDate-date"]',
});

var startDateInstance = new mds.MdsPersianDateTimePicker(document.getElementById('startDateSelector'), {
    targetTextSelector: '[data-name="startDate-text"]',
    targetDateSelector: '[data-name="startDate-date"]',
});

function getAccountTransactionsInformation(accountTransactionsInformationRecordId) {

    var fileData = new FormData();
    fileData.append("id", accountTransactionsInformationRecordId);

    runQuery('/UserAccount/Get', fileData, "#button", function (result) {

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

$("#formUserAccountInformation").submit(function (e) {

    e.preventDefault();

    if ($("#startDateText").val() == "" || $("#endDateText").val() == "") {
        return toastr.error("تاریخ شروع یا پایان سرویس وارد نشده است", '', {
            rtl: true,
            positionClass: 'toast-top-full-width'
        });
    }

    var fileData = new FormData(this);

    var requestUrl = '';
    if (userAccountInformationRecordId == '') {
        requestUrl = '/UserAccount/Create';
    }
    else {
        requestUrl = '/UserAccount/Update';
        fileData.append("id", userAccountInformationRecordId);
    }

    runQuery(requestUrl, fileData, "#buttonUserAccountReg", function (result) {

        $("#" + userAccountInformationModal).modal('hide');

        if (userAccountInformationReload == 'true') {
            if (userAccountInformationRecordId == '') {
                tableUserAccountIndex.ajax.reload();
            }
            else {
                tableUserAccountIndex.ajax.reload(null, false);
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