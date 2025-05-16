$("#formHeadImportExcelInformation").submit(function (e) {

    e.preventDefault();

    var fileData = new FormData(this);

    var input = document.getElementById('formFile');
    var files = input.files;
    for (var i = 0; i != files.length; i++) {
        fileData.append("ExcelFiles", files[i]);
    }

    var requestUrl = '/Head/ImportExcel';
    
    runQuery(requestUrl, fileData, "#buttonHeadImportExcelReg", function (result) {

        $("#" + educationInformationModal).modal('hide');

        tableHeadIndex.ajax.reload();

        toastr.success(result.message, '', {
            rtl: true,
            positionClass: 'toast-top-full-width'
        });
    });
});
