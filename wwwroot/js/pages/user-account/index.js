var exoireOfInstance = new mds.MdsPersianDateTimePicker(document.getElementById('fExpireOf'), {
    targetTextSelector: '[data-name="expireof-text"]',
    targetDateSelector: '[data-name="expireof-date"]',
});

var expireToInstance = new mds.MdsPersianDateTimePicker(document.getElementById('fExpireTo'), {
    targetTextSelector: '[data-name="expireto-text"]',
    targetDateSelector: '[data-name="expireto-date"]',
});

var tableUserAccountIndex;

function initTableUserAccountIndex() {

    

    if (tableUserAccountIndex != undefined) {
        tableUserAccountIndex.destroy();
    }

    tableUserAccountIndex = $('#tableUserAccountIndex').DataTable(
        {
            ajax: {
                url: "/UserAccount/GetAll",
                type: "POST",
                data: {
                    MemoryId: $('#fMemoryId').val(),
                    EconomicCode: $('#fEconomicCode').val(),
                    Status: $('#fStatus').val(),
                    ExpireOf: $('#fExpireOfText').val(),
                    ExpireTo: $('#fExpireToText').val(),
                    UserId: $('#fUser').val(),
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
            filter: false,
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
                        return '<button title="حذف" row-id=' + row.rowId + ' type="button" class="btn action-delete btn-icon btn-light-success glow"><i class="bx bx-trash"></i></button><button row-id=' + row.rowId + ' title="مشاهده و ویرایش حساب کاربر" type="button" class="btn action-get btn-icon btn-light-success glow"><i class="bx bx-edit"></i></button><button title="مشاهده اطلاعات حساب" row-id=' + row.rowId + ' type="button" class="btn action-editservice btn-icon btn-light-success glow"><i class="bx bx-cog"></i></button><button title="تغییر وضعیت" row-id=' + row.rowId + ' type="button" class="btn action-changestatus btn-icon btn-light-success glow"><i class="bx bx-user-check"></i></button><button title="صورتحسابها" row-id=' + row.rowId + ' type="button" class="btn action-head btn-icon btn-light-success glow"><i class="bx bx-spreadsheet"></i></button>'
                    }
                },
                { data: "fullName", name: "FullName" },
                { data: "memoryId", name: "MemoryId" },
                { data: "economicCode", name: "EconomicCode" },
                { data: "status", name: "Status" },
                { data: "startDate", name: "StartDate" },
                { data: "endDate", name: "EndDate" },
                { data: "mobile", name: "mobile" },
            ],
            columnDefs: [
                { "className": "dt-center", "targets": "_all" },
            ],
        }
    );
}

$(document).on("click", ".action-head", function () {
    var id = $(this).attr("row-id");
    window.open("/Head/Index?AccountId=" + id, '_blank').focus();
});

$(document).on('click', '.action-changeaccount', function () {

    var id = $(this).attr("row-id");

    var fileData = new FormData();
    fileData.append("id", id);
    Swal.fire({
        title: 'مشاهده اطلاعات حساب',
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
            runQuery('/UserAccount/ChangeAccount', fileData, "#demo", function (result) {

                window.location = "/Home/User";

            });
        }
    });
});

$(document).on('click', '.action-delete', function () {

    var id = $(this).attr("row-id");

    var fileData = new FormData();
    fileData.append("id", id);
    Swal.fire({
        title: 'حذف حساب',
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
            runQuery('/UserAccount/Delete', fileData, "#demo", function (result) {
                toastr.success(result.message, '', {
                    rtl: true,
                    positionClass: 'toast-top-full-width'
                });
                tableUserAccountIndex.ajax.reload(null, false);
            });
        }
    });
});


$(document).on('click', '.action-changestatus', function () {

    var id = $(this).attr("row-id");

    var fileData = new FormData();
    fileData.append("id", id);
    Swal.fire({
        title: 'تغییر وضعیت حساب',
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
            runQuery('/UserAccount/ChangeStatus', fileData, "#demo", function (result) {
                toastr.success(result.message, '', {
                    rtl: true,
                    positionClass: 'toast-top-full-width'
                });
                tableUserAccountIndex.ajax.reload(null, false);
            });
        }
    });
});

$(document).on('click', '.action-get', function () {

    var id = $(this).attr("row-id");

    $(".modal-xlarge").load('/Account/Information?modal=modal-xlarge&reload=true&id=' + id, function () {
        var myModal = new bootstrap.Modal(document.getElementById('modal-xlarge'), {
            backdrop: 'static',
            keyboard: false
        })
        myModal.show()
    });
});

$(document).on("click", ".action-create-account", function () {

    $(".modal-xlarge").load('/Account/Information?modal=modal-xlarge&reload=true', function () {
        var myModal = new bootstrap.Modal(document.getElementById('modal-xlarge'), {
            keyboard: false,
            backdrop: 'static'
        })
        myModal.show()
    });
});


$(document).on('click', '.action-editservice', function () {

    var id = $(this).attr("row-id");

    $(".modal-xlarge").load('/UserAccount/Information?modal=modal-xlarge&reload=true&id=' + id, function () {
        var myModal = new bootstrap.Modal(document.getElementById('modal-xlarge'), {
            backdrop: 'static',
            keyboard: false
        })
        myModal.show()
    });
});

$("#formUserAccountFilter").submit(function (e) {

    e.preventDefault();

    var fileData = new FormData(this);

    initTableUserAccountIndex();

});

$(document).ready(function () {
    initTableUserAccountIndex();
});
