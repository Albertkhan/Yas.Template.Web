function getCategoryInformation(categoryInformationRecordId) {

    var fileData = new FormData();
    fileData.append("id", categoryInformationRecordId);

    runQuery('/Category/Get', fileData, "#button", function (result) {

        var keys = Object.keys(result.data);

        for (let i = 0; i < keys.length; i++) {
            var key = keys[i];
            var value = result.data[key];
            $("#" + key).val(value);
        }
    });
}

$("#formCategoryInformation").submit(function (e) {

    e.preventDefault();

    var fileData = new FormData(this);

    var requestUrl = '';
    if (categoryInformationRecordId == '') {
        requestUrl = '/Category/Create';
    }
    else {
        requestUrl = '/Category/Update';
        fileData.append("id", categoryInformationRecordId);
    }

    runQuery(requestUrl, fileData, "#buttonCategoryInformationReg", function (result) {

        $("#" + categoryInformationModal).modal('hide');

        if (categoryInformationReload == 'true') {
            if (categoryInformationRecordId == '') {
                tableCategoryIndex.ajax.reload();
            }
            else {
                tableCategoryIndex.ajax.reload(null, false);
            }
        }

        toastr.success(result.message, '', {
            rtl: true,
            positionClass: 'toast-top-full-width'
        });
    });
});

$(document).ready(function () {

    if (categoryInformationRecordId != '') {
        getCategoryInformation(categoryInformationRecordId);
    }
});