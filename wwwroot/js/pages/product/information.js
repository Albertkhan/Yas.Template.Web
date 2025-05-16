
function getProductInformation(ProductInformationRecordId) {

    var fileData = new FormData();
    fileData.append("id", ProductInformationRecordId);

    runQuery('/Product/Get', fileData, "#button", function (result) {

        console.log(result);

        var keys = Object.keys(result.data);

        for (let i = 0; i < keys.length; i++) {
            var key = keys[i];
            var value = result.data[key];
            $("#" + key).val(value);
        }


    });
}

$("#formProductInformation").submit(function (e) {

    e.preventDefault();

    var fileData = new FormData(this);

    var requestUrl = '';
    if (ProductInformationRecordId == '') {
        requestUrl = '/Product/Create';
    }
    else {
        requestUrl = '/Product/Update';
        fileData.append("id", ProductInformationRecordId);
    }

    runQuery(requestUrl, fileData, "#buttonProductInformationReg", function (result) {

        $("#" + ProductInformationModal).modal('hide');

        if (ProductInformationReload == 'true') {
            if (ProductInformationRecordId == '') {
                tableProductIndex.ajax.reload();
            }
            else {
                tableProductIndex.ajax.reload(null, false);
            }
        }

        toastr.success(result.message, '', {
            rtl: true,
            positionClass: 'toast-top-full-width'
        });
    });
});

$(document).ready(function () {

    if (ProductInformationRecordId != '') {
        getProductInformation(ProductInformationRecordId);
    }
});