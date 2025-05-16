
var tableExcelTemplateIndex;

function initTableExcelTemplateIndex() {

  

    if (tableExcelTemplateIndex != undefined) {
        tableExcelTemplateIndex.destroy();
    }

    tableExcelTemplateIndex = $('#tableExcelCustomTemplate').DataTable(
        {
            ajax: {
                url: "/MapExcel/GetAll",
                type: "POST",
            },
            processing: true,
            serverSide: true,
            responsive: true,
            layout: {
                topCenter: {
                    buttons: ['excel']
                }
            },
            pageLength: 500,
            filter: true,
            bLengthChange: false,
            createdRow: function (row, data, dataIndex) {
                //$(".select2-query").select2({ tags: true });
            },
            preDrawCallback: function (settings) {
                //$(".select2-query").select2({ tags: true });
            },
            rowCallback: function (row, data) {
                $(".select2-query").select2();
            },
            drawCallback: function (settings) {
                $(".select2-query").each(function () {
                    $(this).select2({
                        ajax: {
                            delay: 250,
                            url: $(this).attr("select2-action-url"),
                            data: function (params) {
                                return {
                                    q: params.term,
                                };
                            },
                            processResults: function (data) {
                                return {
                                    results: data.items
                                };
                            }
                        },

                        minimumInputLength: 0,
                        maximumInputLength: 100,
                        allowClear: true,
                        placeholder: $(this).attr("select2-title")
                    });
                });

            },
            initComplete: function (settings) {
                
            },
            columns: [
                {
                    data: null,
                    title: "عملیات",
                    orderable: false,
                    render: function (data, type, row, meta) {
                        return '<button title="حذف نگاشت" row-id=' + row.rowId + ' type="button" class="btn action-delete btn-icon btn-light-success glow"><i class="bx bx-trash"></i></button>'
                    }
                },
                { data: "fieldDisplayName", name: "fieldDisplayName" },
                { data: "section", name: "section" },
                {
                    data: null,
                    title: "عنوان ستون اکسل شما",
                    orderable: false,
                    render: function (data, type, row, meta) {
                       
                        return '<select id=select' + row.rowId +' select2-title="تایپ کنید" row-id=' + row.rowId +' class="select2-query column-index" select2-action-url="/MapExcel/Lookup" style="width:100%"></select>'
                    }
                },
                { data: "columnName", name: "columnName" }
            ],
            columnDefs: [
                { "className": "dt-center", "targets": "_all" },
            ],
        }
    );
}

$(document).on("change", ".column-index", function (index,element) {


    var id = $(this).attr('row-id');
    var value = $("#select" + id).val();

    var fileData = new FormData();

    fileData.append("fieldId", id);
    fileData.append("customExcelTemplateId", value);

    runQuery('/MapExcel/ChangeIndex', fileData, "#buttonFieldHelpInformationReg", function (result) {

        toastr.success(result.message, '', {
            rtl: true,
            positionClass: 'toast-top-full-width'
        });

        tableExcelTemplateIndex.ajax.reload(null, false);
    });

});

$(document).on('click', '.action-delete', function () {

    var id = $(this).attr("row-id");

    var fileData = new FormData();
    fileData.append("fieldId", id);
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
            runQuery('/MapExcel/Delete', fileData, "#demo", function (result) {
                toastr.success(result.message, '', {
                    rtl: true,
                    positionClass: 'toast-top-full-width'
                });
                tableExcelTemplateIndex.ajax.reload(null, false);
            });
        }
    });
});


$("#formMapExcel").submit(function (e) {

    e.preventDefault();

    var fileData = new FormData(this);

    var input = document.getElementById('formFile');
    var files = input.files;
    for (var i = 0; i != files.length; i++) {
        fileData.append("ExcelFile", files[i]);
    }

    var requestUrl = '/Head/CustomExcelTemplateImport';

    runQuery(requestUrl, fileData, "#buttonMapExcel", function (result) {

        tableExcelTemplateIndex.ajax.reload();

        toastr.success(result.message, '', {
            rtl: true,
            positionClass: 'toast-top-full-width'
        });
    });
});


$(document).ready(function () {

    initTableExcelTemplateIndex();
});

