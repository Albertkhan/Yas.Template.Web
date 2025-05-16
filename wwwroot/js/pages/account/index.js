
var tableAccountIndex;

function initTableAccountIndex() {

    if (tableAccountIndex != undefined) {
        tableAccountIndex.destroy();
    }

    tableAccountIndex = $('#tableAccountIndex').DataTable(
        {
            ajax: {
                url: "/Account/GetAll",
                type: "POST",
                data: {
                    
                },
                error: function (result, xhr, status, error) {

                    toastr.error(result.responseJSON.message, '', {
                        rtl: true,
                        positionClass: 'toast-top-full-width'
                    });
                },
            },
            layout: {
                topCenter: {
                    buttons: ['excel']
                }
            },
            processing: true,
            serverSide: true,
            responsive: true,
            filter: true,
            columns: [
                {
                    data: null,
                    title: "عملیات",
                    orderable: false,
                    render: function (data, type, row, meta) {
                        return '<button title="خرید" row-id=' + row.accountId + ' type="button" class="btn action-buy btn-icon btn-light-success glow"><i class="bx bx-cart"></i></button><button row-id=' + row.accountId + ' title="مشاهده و ویرایش" type="button" class="btn action-get btn-icon btn-light-success glow"><i class="bx bx-edit"></i></button>'
                    }
                },
                { data: "fullName", name: "FullName" },
                { data: "memoryId", name: "MemoryId" },
                { data: "shenaseMelli", name: "shenaseMelli" },
                { data: "economicCode", name: "economicCode" },
                { data: "status", name: "Status" ,orderable: false },
                { data: "startDate", name: "StartDate" },
                { data: "endDate", name: "EndDate" },
            ],
            columnDefs: [
                { className: "dt-center", "targets": "_all" },
            ],
        }
    );
}

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

$(document).on('click', '.action-buy', function () {

    window.location = '/Account/Buy';

});


$(document).on("click", ".action-create", function () {

    $(".modal-xlarge").load('/Account/Information?modal=modal-xlarge&reload=true', function () {
        var myModal = new bootstrap.Modal(document.getElementById('modal-xlarge'), {
            keyboard: false,
            backdrop: 'static'
        })
        myModal.show()
    });
});


$(document).ready(function () {
    initTableAccountIndex();
});
