
var tableUserIndex;

function initTableUserIndex() {

    if (tableUserIndex != undefined) {
        tableUserIndex.destroy();
    }

    tableUserIndex = $('#tableUserIndex').DataTable(
        {
            ajax: {
                url: "/User/GetAll",
                type: "POST",
                data: {
                    mobile:$('#fMobile').val(),
                    Email: $("#fEmail").val(),
                    UserType:$("#fUserType").val()
                },
                error: function (result, xhr, status, error) {

                    toastr.error(result.responseJSON.message, '', {
                        rtl: true,
                        positionClass: 'toast-top-full-width'
                    });
                },
            },
            processing: true,
            serverSide: true,
            responsive: true,
            ordering: true,
            filter: true,
            layout: {
                topCenter: {
                    buttons: ['excel']
                }
            },
            columns: [
                {
                    data: null,
                    title: "عملیات",
                    orderable: false,
                    render: function (data, type, row, meta) {
                        return '<button title="حذف" row-id=' + row.rowId + ' type="button" class="btn action-delete-user btn-icon btn-light-success glow"><i class="bx bx-trash"></i></button><button row-id=' + row.rowId + ' title="مشاهده و ویرایش" type="button" class="btn action-get btn-icon btn-light-success glow"><i class="bx bx-edit"></i></button><button title="تغییر وضعیت" row-id=' + row.rowId + ' type="button" class="btn action-changestatus btn-icon btn-light-success glow"><i class="bx bx-user-check"></i></button>'
                    }
                },
                { data: "createOn", name: "createOn" },
                
                { data: "fullName", name: "FullName" },
                { data: "username", name: "username" },
                { data: "mobile", name: "mobile" },
                { data: "email", name: "email" },
                { data: "status", name: "status" },
                {
                    data: null,
                    title: "وب سرویس",
                    orderable: false,
                    render: function (data, type, row, meta) {
                        return '<div class="form-check mt-3"><input class="form-check-input" ' + row.isApi + ' type ="checkbox" id ="isApi" name="IsApi" disabled></div>'
                    }
                },
                {
                    data: null,
                    title: "مدیر سیستم",
                    orderable: false,
                    render: function (data, type, row, meta) {
                        return '<div class="form-check mt-3"><input class="form-check-input" ' + row.isAdmin + ' type ="checkbox" id ="isApi" name="IsApi" disabled></div>'
                    }
                },
                {
                    data: null,
                    title: "کاربر (مودی)",
                    orderable: false,
                    render: function (data, type, row, meta) {
                        return '<div class="form-check mt-3"><input class="form-check-input" ' + row.isUser + ' type ="checkbox" id ="isApi" name="IsApi" disabled></div>'
                    }
                },
                {
                    data: null,
                    title: "معرف",
                    orderable: false,
                    render: function (data, type, row, meta) {
                        return '<div class="form-check mt-3"><input class="form-check-input" ' + row.isAgent + ' type ="checkbox" id ="isApi" name="IsApi" disabled></div>'
                    }
                },
                { data: "remain", name: "remain", orderable: false, },
            ],
            columnDefs: [
                { "className": "dt-center", "targets": "_all" },
            ],
        }
    );
}

$(document).on('click', '.action-delete-user', function () {

    var id = $(this).attr("row-id");

    var fileData = new FormData();
    fileData.append("id", id);
    Swal.fire({
        title: 'حذف کاربر',
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
            runQuery('/User/Delete', fileData, "#demo", function (result) {
                toastr.success(result.message, '', {
                    rtl: true,
                    positionClass: 'toast-top-full-width'
                });
                tableUserIndex.ajax.reload(null, false);
            });
        }
    });
});


$(document).on('click', '.action-changestatus', function () {

    var id = $(this).attr("row-id");

    var fileData = new FormData();
    fileData.append("UserId", id);
    Swal.fire({
        title: 'تغییر وضعیت کاربر',
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
            runQuery('/User/ChangeStatus', fileData, "#demo", function (result) {
                toastr.success(result.message, '', {
                    rtl: true,
                    positionClass: 'toast-top-full-width'
                });
                tableUserIndex.ajax.reload(null, false);
            });
        }
    });
});

$(document).on('click', '.action-get', function () {

    var id = $(this).attr("row-id");

    $(".modal-xlarge").load('/User/Information?modal=modal-xlarge&reload=true&id=' + id, function () {
        var myModal = new bootstrap.Modal(document.getElementById('modal-xlarge'), {
            backdrop: 'static',
            keyboard: false
        })
        myModal.show()
    });
});


$(document).on("click", ".action-create", function () {

    $(".modal-xlarge").load('/User/Information?modal=modal-xlarge&reload=true', function () {
        var myModal = new bootstrap.Modal(document.getElementById('modal-xlarge'), {
            keyboard: false,
            backdrop: 'static'
        })
        myModal.show()
    });
});

$(document).on("click", "#buttonUserFilter", function () {
    initTableUserIndex();
});


$(document).ready(function () {
    initTableUserIndex();
});
