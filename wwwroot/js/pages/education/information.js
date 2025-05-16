function getEducationInformation(educationInformationRecordId) {

    var fileData = new FormData();
    fileData.append("id", educationInformationRecordId);

    runQuery('/Education/Get', fileData, "#button", function (result) {

        var keys = Object.keys(result.data);

        for (let i = 0; i < keys.length; i++) {
            var key = keys[i];
            var value = result.data[key];
            $("#" + key).val(value);

            if (key == "mediaStatus") {
                $('#isMedia').prop('checked', value);
            }

            if (result.data.category != null) {
                var category = new Option(result.data.categoryName, result.data.category, true, true);
                $("#categoryId").append(category);
            }

        }
    });
}

$("#formEducationInformation").submit(function (e) {

    e.preventDefault();

    var fileData = new FormData(this);

    var input = document.getElementById('formFile');
    var files = input.files;
    for (var i = 0; i != files.length; i++) {
        fileData.append("FileGallery", files[i]);
    }

    var inputPoster = document.getElementById('formPoster');
    var filesPoster = inputPoster.files;
    for (var i = 0; i != filesPoster.length; i++) {
        fileData.append("PosterFile", filesPoster[i]);
    }

    var requestUrl = '';
    if (educationInformationRecordId == '') {
        requestUrl = '/Education/Create';
    }
    else {
        requestUrl = '/Education/Update';
        fileData.append("id", educationInformationRecordId);
    }

    runQuery(requestUrl, fileData, "#buttonEducationInformationReg", function (result) {

        $("#" + educationInformationModal).modal('hide');

        if (educationInformationReload == 'true') {
            if (educationInformationRecordId == '') {
                tableEducationIndex.ajax.reload();
            }
            else {
                tableEducationIndex.ajax.reload(null, false);
            }
        }

        
        toastr.success(result.message, '', {
            rtl: true,
            positionClass: 'toast-top-full-width'
        });
    });
});

$(document).ready(function () {
  
    if (educationInformationRecordId != '') {
        getEducationInformation(educationInformationRecordId);
    }
});