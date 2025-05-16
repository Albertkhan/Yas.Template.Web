$('.signout').click(function () {

    var fileData = new FormData();
    Swal.fire({
        title: 'خروج از سامانه یاس فاکتور',
        text: "آیا مطمئن هستید؟",
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'تایید',
        confirmButtonClass: 'btn btn-primary',
        cancelButtonClass: 'btn btn-danger ml-1',
        cancelButtonText: 'انصراف',
        buttonsStyling: false,
    }).then(function (result) {
        if (result.value) {
            runQuery('/SignIn/LogOut', fileData, "#demo", function (result) {
                window.location = "/SignIn/Index";
            });
        }
    });
});
