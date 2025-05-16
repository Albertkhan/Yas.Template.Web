var tableAccountTransactionsIndex;

function initTableAccountTransactionsIndex() {

    if (tableAccountTransactionsIndex != undefined) {
        tableAccountTransactionsIndex.destroy();
    }

    tableAccountTransactionsIndex = $('#tableAccountTransactionsIndex').DataTable(
        {
            ajax: {
                url: "/AccountTransactions/GetAll",
                type: "POST",
                data: {
                    UserId: $('#fUser').val(),
                    accountId: getParameterByName("AccountId")
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
                        return '<button title="حذف ردیف" row-id=' + row.rowId + ' type="button" class="btn action-delete-accounttransactions btn-icon btn-light-success glow"><i class="bx bx-trash"></i></button><button row-id=' + row.rowId + ' title="مشاهده و ویرایش" type="button" class="btn action-get-accounttransactions btn-icon btn-light-success glow"><i class="bx bx-edit"></i></button>'
                    }
                },
                { data: "user", name: "User" },
                { data: "buyerUser", name: "BuyerUser" },
                { data: "date", name: "Date" },
                { data: "amount", name: "Amount" },
                { data: "actionType", name: "ActionType" },
                { data: "description", name: "Description" ,orderable: false },
            ],
            columnDefs: [
                { "className": "dt-center", "targets": "_all" },
            ],
        }
    );
}

$(document).on('click', '.action-delete-accounttransactions', function () {

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
            runQuery('/AccountTransactions/Delete', fileData, "#demo", function (result) {
                toastr.success(result.message, '', {
                    rtl: true,
                    positionClass: 'toast-top-full-width'
                });
                tableAccountTransactionsIndex.ajax.reload(null, false);
            });
        }
    });
});


$(document).on('click', '.action-get-accounttransactions', function () {

    var id = $(this).attr("row-id");

    $(".modal-xlarge").load('/AccountTransactions/Information?modal=modal-xlarge&reload=true&id=' + id, function () {
        var myModal = new bootstrap.Modal(document.getElementById('modal-xlarge'), {
            backdrop: 'static',
            keyboard: false
        })
        myModal.show()
    });
});


$(document).on("click", ".action-create-accounttransactions", function () {

    $(".modal-xlarge").load('/AccountTransactions/Information?modal=modal-xlarge&reload=true', function () {
        var myModal = new bootstrap.Modal(document.getElementById('modal-xlarge'), {
            keyboard: false,
            backdrop: 'static'
        })
        myModal.show()
    });
});

$("#formAccountTransactionsFilter").submit(function (e) {

    e.preventDefault();

    var fileData = new FormData(this);

    initTableAccountTransactionsIndex();

});


$(document).on("click", "#buttonFilter", function () {
    initTableAccountTransactionsIndex();
});


$(document).ready(function () {
    initTableAccountTransactionsIndex();
});
