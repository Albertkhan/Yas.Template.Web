$("#formSetting").submit(function (e) {

    e.preventDefault();

    var fileData = new FormData(this);

    var input = document.getElementById('SignInBackgroundImage');
    var files = input.files;

    var inputSignUp = document.getElementById('SignUpBackgroundImage');
    var filesSignUp = inputSignUp.files;

    for (var i = 0; i != files.length; i++) {
        fileData.append("SignInBackgroundImage", files[i]);
    }

    for (var i = 0; i != filesSignUp.length; i++) {
        fileData.append("SignUpBackgroundImage", filesSignUp[i]);
    }

    var requestUrl = '/Setting/Update';

    runQuery(requestUrl, fileData, "#buttonSettingIndexSave", function (result) {

        toastr.success(result.message, '', {
            rtl: true,
            positionClass: 'toast-top-full-width'
        });
    });
});

function getSettingInformation() {

    var fileData = new FormData();
    
    runQuery('/Setting/Get', fileData, "#button", function (result) {

        var keys = Object.keys(result.data);

        for (let i = 0; i < keys.length; i++) {
            var key = keys[i];
            var value = result.data[key];
            $("#" + key).val(value);
        }
    });
}


$(document).ready(function () {
    getSettingInformation();
});