$("#formAuthentication").submit(function (e) {
    e.preventDefault();
    var fileData = new FormData(this);
    runQuery('/SignIn/Authentication', fileData, "#buttonSignInIndexSubmit", function (result) {
        toastr.success(result.message, '', {
            rtl: true,
            positionClass: 'toast-top-full-width'
        });

        window.location = result.data.redirectUrl;
    });
});

$("#formRecoverPassword").submit(function (e) {
    e.preventDefault();
    var fileData = new FormData(this);
    runQuery('/SignIn/Recover', fileData, "#buttonRecoverPassword", function (result) {
        toastr.success(result.message, '', {
            rtl: true,
            positionClass: 'toast-top-full-width'
        });
    });
});