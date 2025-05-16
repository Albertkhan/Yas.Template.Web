var expireInstance = new mds.MdsPersianDateTimePicker(document.getElementById('ExpireSelector'), {
    targetTextSelector: '[data-name="expire-text"]',
    targetDateSelector: '[data-name="expire-date"]',
});

function getAccountDiscountInformation(accountDiscountInformationRecordId) {

    var fileData = new FormData();
    fileData.append("id", accountDiscountInformationRecordId);

    runQuery('/AccountDiscount/Get', fileData, "#button", function (result) {

        var keys = Object.keys(result.data);

        for (let i = 0; i < keys.length; i++) {
            var key = keys[i];
            var value = result.data[key];
            $("#" + key).val(value);
            if (key == "expireValue") {
                expireInstance.setDate(new Date(value));
            }
        }

        if (result.data.userId != null) {
            var user = new Option(result.data.userFullName, result.data.userId, true, true);
            $("#userId").append(user);
        }
    });
}
$("#formAccountDiscountInformation").submit(function (e) {

    e.preventDefault();

    var fileData = new FormData(this);

    var requestUrl = '';
    if (accountDiscountInformationRecordId == '') {
        requestUrl = '/AccountDiscount/Create';
    }
    else {
        requestUrl = '/AccountDiscount/Update';
        fileData.append("id", accountDiscountInformationRecordId);
    }

    runQuery(requestUrl, fileData, "#buttonAccountDiscountInformationReg", function (result) {

        $("#" + accountDiscountInformationModal).modal('hide');

        if (accountDiscountInformationReload == 'true') {
            if (accountDiscountInformationRecordId == '') {
                tableAccountDiscountIndex.ajax.reload();
            }
            else {
                tableAccountDiscountIndex.ajax.reload(null, false);
            }
        }

        toastr.success(result.message, '', {
            rtl: true,
            positionClass: 'toast-top-full-width'
        });
    });
});

$(document).ready(function () {

    if (accountDiscountInformationRecordId != '') {
        getAccountDiscountInformation(accountDiscountInformationRecordId);
        $("#discountCode").prop("disabled", true);
        $("#userId").prop("disabled", true);
    }
});