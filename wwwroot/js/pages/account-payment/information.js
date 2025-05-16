var invoiceDateInstance = new mds.MdsPersianDateTimePicker(document.getElementById('invoiceDateSelector'), {
    targetTextSelector: '[data-name="invoiceDate-text"]',
    targetDateSelector: '[data-name="invoiceDate-date"]',
});

var payDateInstance = new mds.MdsPersianDateTimePicker(document.getElementById('payDateSelector'), {
    targetTextSelector: '[data-name="payDate-text"]',
    targetDateSelector: '[data-name="payDate-date"]',
});
function getAccountPaymentInformation(accountPaymentInformationRecordId) {

    var fileData = new FormData();
    fileData.append("id", accountPaymentInformationRecordId);

    runQuery('/AccountPayment/Get', fileData, "#button", function (result) {

        var keys = Object.keys(result.data);

        for (let i = 0; i < keys.length; i++) {
            var key = keys[i];
            var value = result.data[key];
            $("#" + key).val(value);
            if (key == "invoiceDate") {
                invoiceDateInstance.setDate(new Date(value));
            }
            if (key == "payOn") {
                payDateInstance.setDate(new Date(value));
            }
        }
    });
}

$("#formAccountPaymentInformation").submit(function (e) {

    e.preventDefault();

    var fileData = new FormData(this);

    var requestUrl = '';
    if (accountPaymentInformationRecordId == '') {
        requestUrl = '/AccountPayment/Create';
    }
    else {
        requestUrl = '/AccountPayment/Update';
        fileData.append("id", accountPaymentInformationRecordId);
    }

    runQuery(requestUrl, fileData, "#buttonAccountPaymentInformationReg", function (result) {

        $("#" + accountPaymentInformationModal).modal('hide');

        if (accountPaymentInformationReload == 'true') {
            if (accountPaymentInformationRecordId == '') {
                tableAccountPaymentIndex.ajax.reload();
            }
            else {
                tableAccountPaymentIndex.ajax.reload(null, false);
            }
        }

        toastr.success(result.message, '', {
            rtl: true,
            positionClass: 'toast-top-full-width'
        });
    });
});

$(document).ready(function () {

    if (accountPaymentInformationRecordId != '') {
        getAccountPaymentInformation(accountPaymentInformationRecordId);
    }
});