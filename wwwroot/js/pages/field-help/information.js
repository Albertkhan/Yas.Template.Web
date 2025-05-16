function getFieldHelpInformation(fieldHelpInformationRecordId) {

    var fileData = new FormData();
    fileData.append("id", fieldHelpInformationRecordId);

    runQuery('/FieldHelp/Get', fileData, "#button", function (result) {

        var keys = Object.keys(result.data);

        for (let i = 0; i < keys.length; i++) {
            var key = keys[i];
            var value = result.data[key];
            $("#" + key).val(value);
        }
    });
}

$("#formFieldHelpInformation").submit(function (e) {

    e.preventDefault();

    var fileData = new FormData(this);

    var requestUrl = '';
    if (fieldHelpInformationRecordId == '') {
        requestUrl = '/FieldHelp/Create';
    }
    else {
        requestUrl = '/FieldHelp/Update';
        fileData.append("id", fieldHelpInformationRecordId);
    }

    runQuery(requestUrl, fileData, "#buttonFieldHelpInformationReg", function (result) {

        $("#" + fieldHelpInformationModal).modal('hide');

        if (fieldHelpInformationReload == 'true') {
            if (fieldHelpInformationRecordId == '') {
                tableFieldHelpIndex.ajax.reload();
            }
            else {
                tableFieldHelpIndex.ajax.reload(null, false);
            }
        }

        toastr.success(result.message, '', {
            rtl: true,
            positionClass: 'toast-top-full-width'
        });
    });
});

$(document).ready(function () {

    if (fieldHelpInformationRecordId != '') {
        getFieldHelpInformation(fieldHelpInformationRecordId);
    }
});