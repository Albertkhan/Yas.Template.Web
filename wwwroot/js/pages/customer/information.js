function getCustomerInformation(customerInformationRecordId) {

    var fileData = new FormData();
    fileData.append("id", customerInformationRecordId);

    runQuery('/Customer/Get', fileData, "#button", function (result) {

        var keys = Object.keys(result.data);

        for (let i = 0; i < keys.length; i++) {
            var key = keys[i];
            var value = result.data[key];
            $("#" + key).val(value);
        }
    });
}

$("#formCustomerInformation").submit(function (e) {

    e.preventDefault();

    var fileData = new FormData(this);

    var requestUrl = '';
    if (customerInformationRecordId == '') {
        requestUrl = '/Customer/Create';
    }
    else {
        requestUrl = '/Customer/Update';
        fileData.append("id", customerInformationRecordId);
    }

    runQuery(requestUrl, fileData, "#buttonCustomerInformationReg", function (result) {

        $("#" + customerInformationModal).modal('hide');

        if (customerInformationReload == 'true') {
            if (customerInformationRecordId == '') {
                tableCustomerIndex.ajax.reload();
            }
            else {
                tableCustomerIndex.ajax.reload(null, false);
            }
        }

        toastr.success(result.message, '', {
            rtl: true,
            positionClass: 'toast-top-full-width'
        });
    });
});

$(document).ready(function () {

    if (customerInformationRecordId != '') {
        getCustomerInformation(customerInformationRecordId);
    }
});