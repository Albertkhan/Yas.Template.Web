
var pdtInstance = new mds.MdsPersianDateTimePicker(document.getElementById('PdtSelector'), {
    targetTextSelector: '[data-name="pdt-text"]',
    targetDateSelector: '[data-name="pdt-date"]',
    textFormat: "yyyy/MM/dd"
});


function getPaymentInformation(PaymentInformationRecordId) {

    var fileData = new FormData();
    fileData.append("id", PaymentInformationRecordId);


    runQuery('/Payment/Get', fileData, "#button", function (result) {
        var keys = Object.keys(result.data);

        for (let i = 0; i < keys.length; i++) {
            var key = keys[i];
            var value = result.data[key];
            $("#" + key).val(value);
            if (key == "pdtValue") {
                pdtInstance.setDate(new Date(value));
            }
        }
    });
}

$("#formPaymentInformation").submit(function (e) {

    e.preventDefault();

    var fileData = new FormData(this);
    fileData.append("HeadId", HeadInformationRecordId);
    var requestUrl = '';
    if (PaymentInformationRecordId == '') {
        requestUrl = '/Payment/Create';
        
    }
    else {
        requestUrl = '/Payment/Update';
        fileData.append("id", PaymentInformationRecordId);
    }



    runQuery(requestUrl, fileData, "#buttonPaymentInformationReg", function (result) {

        $("#" + PaymentInformationModal).modal('hide');

        if (PaymentInformationReload == 'true') {
            if (PaymentInformationRecordId == '') {
                tablePaymentIndex.ajax.reload();
            }
            else {
                tablePaymentIndex.ajax.reload(null, false);
            }
        }

        saveHead();

        toastr.success(result.message, '', {
            rtl: true,
            positionClass: 'toast-top-full-width'
        });
    });
});

$(document).ready(function () {

    //$(".number-seperate").each(function () {
    //    $(this).number(true, 0);
    //});

    if (PaymentInformationRecordId != '') {
        getPaymentInformation(PaymentInformationRecordId);
    }
});