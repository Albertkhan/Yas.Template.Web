$("#multiStepsForm").submit(function (e) {
    e.preventDefault();
    var fileData = new FormData(this);
    runQuery('/SignUp/Create', fileData, "#buttonSignUpIndexAccount", function (result) {
        toastr.success(result.message, '', {
            rtl: true,
            positionClass: 'toast-top-full-width'
        });
        window.location = "/SignIn/Index"
    });
});