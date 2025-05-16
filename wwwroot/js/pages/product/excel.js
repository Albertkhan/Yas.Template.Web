var interval;
$("#formProductExcel").submit(function (e) {

    e.preventDefault();

    var fileData = new FormData(this);

    var input = document.getElementById('formFile');
    var files = input.files;
    for (var i = 0; i != files.length; i++) {
        fileData.append("files", files[i]);
    }

    var requestUrl = '/Product/ImportExcel';

   interval= setInterval(isStartUpload, 3000)

    runQuery(requestUrl, fileData, "#buttonProductExcelReg", function (result) {

        $("#" + educationInformationModal).modal('hide');

        tableProductIndex.ajax.reload();

        toastr.success("یک عملیات پردازش در پس زمینه در حال اجراست لطفا جهت مشاهده گزارش عملیات به فرم گزارشات سیستم مراجعه کنید", '', {
            rtl: true,
            positionClass: 'toast-top-full-width'
        });
    });
});


function isStartUpload() {
 
    var fileData = new FormData();

    var requestUrl = '/Product/IsStartImportExcel';

    runQuery(requestUrl, fileData, "#button", function (result) {



        if (result.data.isstart == true) {

            clearInterval(interval);


            $("#" + educationInformationModal).modal('hide');
            toastr.success("یک عملیات پردازش در پس زمینه در حال اجراست لطفا جهت مشاهده گزارش عملیات به فرم گزارشات سیستم مراجعه کنید", '', {
                rtl: true,
                positionClass: 'toast-top-full-width'
            });
        }

    });
}



(function () {

    var messages = {
        dictDefaultMessage: "فایل‌ها را برای ارسال اینجا رها کنید",
        dictFallbackMessage: "مرورگر شما از ارسال فایل با کشیدن و رها کردن پشتیبانی نمی‌کند.",
        dictFallbackText: "لطفا از فرم زیر برای ارسال فایل های خود مانند دوران های گذشته استفاده کنید.",
        dictFileTooBig: "فایل خیلی بزرگ است ({{filesize}}MiB). حداکثر اندازه فایل: {{maxFilesize}}MiB.",
        dictInvalidFileType: "شما نمی‌توانید فایل‌هایی از این نوع را ارسال کنید.",
        dictResponseError: "سرور با کد {{statusCode}} پاسخ داد.",
        dictCancelUpload: "لغو ارسال",
        dictCancelUploadConfirmation: "آیا از لغو کردن این ارسال اطمینان دارید؟",
        dictRemoveFile: "حذف فایل",
        dictMaxFilesExceeded: "شما نمی‌توانید فایل دیگری ارسال کنید."
    }

    // previewTemplate: Updated Dropzone default previewTemplate
    // ! Don't change it unless you really know what you are doing
    const previewTemplate = `<div class="dz-preview dz-file-preview">
<div class="dz-details">
  <div class="dz-thumbnail">
    <img data-dz-thumbnail>
    <span class="dz-nopreview">No preview</span>
    <div class="dz-success-mark"></div>
    <div class="dz-error-mark"></div>
    <div class="dz-error-message"><span data-dz-errormessage></span></div>
    <div class="progress">
      <div class="progress-bar progress-bar-primary" role="progressbar" aria-valuemin="0" aria-valuemax="100" data-dz-uploadprogress></div>
    </div>
  </div>
  <div class="dz-filename" data-dz-name></div>
  <div class="dz-size" data-dz-size></div>
</div>
</div>`;

    // ? Start your code from here

    // Basic Dropzone
    // --------------------------------------------------------------------
    var options = {
        //previewTemplate: previewTemplate,
        parallelUploads: 1,
        maxFilesize: 900,
        addRemoveLinks: false,
        maxFiles: 1,
        success: function (file, response) {
            toastr.success(response.xhr.responseText, '', {
                rtl: true,
                positionClass: 'toast-top-full-width'
            });
        },
        error: function (response) {
            toastr.error(response.xhr.responseText, '', {
                rtl: true,
                positionClass: 'toast-top-full-width'
            });
        },
        complete(file) {
            alert("dsfdsf")
        },
    };
    Object.assign(options, messages);

    const myDropzone = new Dropzone('#dropzone-basic', options);

})();
