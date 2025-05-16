var exoireOfInstance = new mds.MdsPersianDateTimePicker(document.getElementById('fExpireOf'), {
    targetTextSelector: '[data-name="expireof-text"]',
    targetDateSelector: '[data-name="expireof-date"]',
});

var expireToInstance = new mds.MdsPersianDateTimePicker(document.getElementById('fExpireTo'), {
    targetTextSelector: '[data-name="expireto-text"]',
    targetDateSelector: '[data-name="expireto-date"]',
});


var tableEducationIndex;

function initTableEducationIndex() {

    if (tableEducationIndex != undefined) {
        tableEducationIndex.destroy();
    }

    tableEducationIndex = $('#tableEducationIndex').DataTable(
        {
            ajax: {
                url: "/Education/GetAll",
                type: "POST",
                data: {
                    name: $('#fName').val(),
                    createOnOf: $('#fExpireOfText').val(),
                    createOnTo: $('#fExpireToText').val(),
                    categoryId: $('#fCategory').val(),
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
                    render: function (data, type, row, meta) {
                        return '<button title="حذف" row-id=' + row.rowId + ' type="button" class="btn action-delete-education btn-icon btn-light-success glow"><i class="bx bx-trash"></i></button><button row-id=' + row.rowId + ' title="مشاهده و ویرایش" type="button" class="btn action-get-education btn-icon btn-light-success glow"><i class="bx bx-edit"></i></button><a title="مشاهده فایل ضمیمه شده" href=' + row.fileLink + ' target="_blank" class="btn-icon btn-light-success glow" style="visibility: ' + row.showFileLink +';"><i class="bx bx-download"></i></a><a title="مشاهده لینک" href=' + row.link + ' target="_blank" class="btn-icon btn-light-success glow" style="visibility: ' + row.showLink +';"><i class="bx bx-link"></i></a>'
                    }
                },
                { data: "createOn", name: "createOn", },
                {
                    data: null,
                    title: "فایل ضمیمه",
                    render: function (data, type, row, meta) {
                        return '<div class="form-check mt-3"><input class="form-check-input" ' + row.isFile + ' type ="checkbox" id ="isApi" name="IsApi" disabled></div>'
                    }
                },
                {
                    data: null,
                    title: "لینک",
                    render: function (data, type, row, meta) {
                        return '<div class="form-check mt-3"><input class="form-check-input" ' + row.isLink + ' type ="checkbox" id ="isApi" name="IsApi" disabled></div>'
                    }
                },
                {
                    data: null,
                    title: "قابل پخش",
                    render: function (data, type, row, meta) {
                        return '<div class="form-check mt-3"><input class="form-check-input" ' + row.isPlay + ' type ="checkbox" id ="isApi" name="IsApi" disabled></div>'
                    }
                },
                { data: "title", name: "title" },
                { data: "category", name: "category" },
            ],
            columnDefs: [
                { "className": "dt-center", "targets": "_all" },
            ],
        }
    );
}

$(document).on('click', '.action-delete-education', function () {

    var id = $(this).attr("row-id");

    var fileData = new FormData();
    fileData.append("id", id);
    Swal.fire({
        title: 'حذف ردیف',
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
            runQuery('/Education/Delete', fileData, "#demo", function (result) {
                toastr.success(result.message, '', {
                    rtl: true,
                    positionClass: 'toast-top-full-width'
                });
                tableEducationIndex.ajax.reload(null, false);
            });
        }
    });
});


$(document).on('click', '.action-get-education', function () {

    var id = $(this).attr("row-id");

    $(".modal-xlarge").load('/Education/Information?modal=modal-xlarge&reload=true&id=' + id, function () {
        var myModal = new bootstrap.Modal(document.getElementById('modal-xlarge'), {
            backdrop: 'static',
            keyboard: false
        })
        myModal.show()
    });
});


$(document).on("click", ".action-create-education", function () {

    $(".modal-xlarge").load('/Education/Information?modal=modal-xlarge&reload=true', function () {
        var myModal = new bootstrap.Modal(document.getElementById('modal-xlarge'), {
            keyboard: false,
            backdrop: 'static'
        })
        myModal.show()
    });
});

$("#formEducationFilter").submit(function (e) {

    e.preventDefault();

    initTableEducationIndex();

});


$(document).on("click", "#buttonFilter", function () {
    initTableEducationIndex();
});


$(document).ready(function () {
    initTableEducationIndex();
});
