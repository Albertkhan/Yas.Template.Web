
var tableSmsLog;

function initTableSmsLog() {

    if (tableSmsLog != undefined) {
        tableSmsLog.destroy();
    }

    tableSmsLog = $('#tableSmsLog').DataTable(
        {
            ajax: {
                url: "/SmsLog/GetAll",
                type: "POST",
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
                    orderable: false,
                    render: function (data, type, row, meta) {
                        return '<button title="حذف ردیف" row-id=' + row.rowId + ' type="button" class="btn action-delete btn-icon btn-light-success glow"><i class="bx bx-trash"></i></button>'
                    }
                },
                { data: "createOn", name: "createOn" },
                { data: "fromNumber", name: "fromNumber" },
                { data: "toNumber", name: "toNumber" },
                { data: "user", name: "user" },
                { data: "account", name: "account" },
                { data: "text", name: "text" },
            ],
            columnDefs: [
                { "className": "dt-center", "targets": "_all" },
            ],
        }
    );
}

$(document).on('click', '.action-delete', function () {

    var id = $(this).attr("row-id");

    var fileData = new FormData();
    fileData.append("id", id);
    Swal.fire({
        title: 'حذف رکورد',
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
            runQuery('/SmsLog/Delete', fileData, "#demo", function (result) {
                toastr.success(result.message, '', {
                    rtl: true,
                    positionClass: 'toast-top-full-width'
                });
                tableSmsLog.ajax.reload(null, false);
            });
        }
    });
});

$(document).ready(function () {
    initTableSmsLog();
});
