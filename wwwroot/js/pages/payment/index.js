
var tablePaymentIndex;

function initTablePaymentIndex() {

    if (tablePaymentIndex != undefined) {
        tablePaymentIndex.destroy();
    }

    console.log(paymentHeadId);
    
    tablePaymentIndex = $('#table_payment').DataTable(
        {
            ajax: {
                url: "/Payment/GetAll?HeadId=" + HeadInformationRecordId,
                type: "POST",
            },
            processing: true,
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
                        return '<button title="حذف ردیف" row-id=' + row.rowId + ' type="button" class="btn action-payment-delete btn-icon btn-light-success glow"><i class="bx bx-trash"></i></button><button row-id=' + row.rowId + ' title="مشاهده و ویرایش" type="button" class="btn action-payment-get btn-icon btn-light-success glow"><i class="bx bx-edit"></i></button>'
                    }
                },
                { data: "iinn", name: "Iinn" },
                { data: "acn", name: "Acn" },
                { data: "trmn", name: "Trmn" },
                { data: "trn", name: "Trn" },
                { data: "pmt", name: "Pmt" },
                { data: "pv", name: "Pv" },
            ],
            columnDefs: [
                { "className": "dt-center", "targets": "_all" },
            ],
        }
    );
}




$(document).ready(function () {
    initTablePaymentIndex();
});

