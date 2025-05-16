
var tableBodyIndex;

function initTableBodyIndex() {

    if (tableBodyIndex != undefined) {
        tableBodyIndex.destroy();
    }


    tableBodyIndex = $('#tableBodyIndex').DataTable(
        {
            ajax: {
                url: "/Body/GetAll?HeadId=" + HeadInformationRecordId,
                type: "POST",
            },
            processing: true,
            responsive: true,
            serverSide: true,
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
                        return '<button title="حذف ردیف" row-id=' + row.rowId + ' type="button" class="btn action-body-delete btn-icon btn-light-success glow"><i class="bx bx-trash"></i></button><button row-id=' + row.rowId + ' title="مشاهده و ویرایش" type="button" class="btn action-body-get btn-icon btn-light-success glow"><i class="bx bx-edit"></i></button>'
                    }
                },
                { data: "rowIndex", name: "RowIndex" },
                { data: "sstid", name: "Sstid" },
                { data: "sstt", name: "Sstt" },
                { data: "am", name: "Am" },
                { data: "mu", name: "Mu" },
                { data: "fee", name: "Fee" },
                { data: "prdis", name: "Prdis" },
                { data: "dis", name: "Dis" },
                { data: "adis", name: "Adis" },
                { data: "vra", name: "Vra" },
                { data: "vam", name: "Vam" },
                { data: "tsstam", name: "Tsstam" },
            ],
            columnDefs: [
                { "className": "dt-center", "targets": "_all" },
            ],
        }
    );
}


$(document).ready(function () {
    initTableBodyIndex();
});

