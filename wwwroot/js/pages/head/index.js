var indati2mOfInstance = new mds.MdsPersianDateTimePicker(document.getElementById('fIndati2mOf'), {
    targetTextSelector: '[data-name="fIndati2mOf-text"]',
    targetDateSelector: '[data-name="fIndati2mOf-date"]',
});

var indati2mToInstance = new mds.MdsPersianDateTimePicker(document.getElementById('fIndati2mTo'), {
    targetTextSelector: '[data-name="fIndati2mTo-text"]',
    targetDateSelector: '[data-name="fIndati2mTo-date"]',
});

var indatimOfInstance = new mds.MdsPersianDateTimePicker(document.getElementById('fIndatimOf'), {
    targetTextSelector: '[data-name="fIndatimOf-text"]',
    targetDateSelector: '[data-name="fIndatimOf-date"]',
});

var indatimToInstance = new mds.MdsPersianDateTimePicker(document.getElementById('fIndatimTo'), {
    targetTextSelector: '[data-name="fIndatimTo-text"]',
    targetDateSelector: '[data-name="fIndatimTo-date"]',
});



var tableHeadIndex;

function initTableHeadIndex() {



    if (tableHeadIndex != undefined) {
        tableHeadIndex.destroy();
    }

    tableHeadIndex = $('#tableHeadIndex').DataTable(
        {
            ajax: {
                url: "/Head/GetAll",
                type: "POST",
                data: {
                    customerId: $('#fCustomerId').val(),
                    inty: $('#fInty').val(),
                    innoOf: $('#fInnoOf').val(),
                    innoTo: $('#fInnoTo').val(),
                    inp: $('#fInp').val(),
                    ins: $('#fIns').val(),
                    taxId: $('#fTaxId').val(),
                    Indati2mOf: $('#fIndati2mOfText').val(),
                    Indati2mTo: $('#fIndati2mToText').val(),
                    IndatimOf: $('#fIndatimOfText').val(),
                    IndatimTo: $('#fIndatimToText').val(),
                    status: $('#fStatus').val(),
                    accountId: getParameterByName("AccountId"),
                    invoiceNumberOf: $('#fInvoiceNumberOf').val(),
                    invoiceNumberTo: $('#fInvoiceNumberTo').val(),
                },
                error: function (result, xhr, status, error) {

                    toastr.error(result.responseJSON.message, '', {
                        rtl: true,
                        positionClass: 'toast-top-full-width'
                    });

                },
            },
            order: [[2, 'desc']],
            processing: true,
            serverSide: true,
            filter: false,
            responsive: true,
            layout: {
                topCenter: {
                    buttons: ['excel']
                }
            },
            createdRow: function (row, data, dataIndex) {
                if (data != null) {
                    if (data.statusId == 0) {
                        $(row).css('background-color', "lightgray");
                        $(row).css('color', "black");
                    }
                    if (data.statusId == 1) {
                        $(row).css('background-color', "yellow");
                        $(row).css('color', "black");
                    }
                    if (data.statusId == 2) {
                        $(row).css('background-color', "darkseagreen");
                        $(row).css('color', "white");
                    }
                    if (data.statusId == 3) {
                        $(row).css('background-color', "red");
                        $(row).css('color', "white");
                    }
                }
            },
            columns: [

                {
                    data: null,
                    title: "عملیات",
                    orderable: false,
                    render: function (data, type, row, meta) {
                        return '<button row-id=' + row.rowId + ' title="مشاهده و ویرایش" type="button" class="btn action-head-get btn-icon btn-primary glow"><i class="bx bx-edit"></i></button><button row-id=' + row.rowId + ' title="مشاهده لیست خطاها" type="button" class="btn action-head-queryinvoice btn-icon btn-primary glow m-1"><i class="bx bxs-report"></i></button>'
                        //render: function (data, type, row, meta) {
                        //    return '<button title="حذف ردیف" row-id=' + row.rowId + ' type="button" class="btn action-head-delete btn-icon btn-primary m-1"><i class="bx bx-trash"></i></button><button row-id=' + row.rowId + ' title="مشاهده و ویرایش" type="button" class="btn action-head-get btn-icon btn-primary glow"><i class="bx bx-edit"></i></button><button row-id=' + row.rowId + ' title="ارسال صورتحساب" type="button" class="btn action-head-sendinvoice btn-icon btn-primary glow m-1"><i class="bx bx-mail-send"></i></button><button row-id=' + row.rowId + ' title="پیگیری وضعیت صورتحساب" type="button" class="btn action-head-queryinvoice btn-icon btn-primary glow m-1"><i class="bx bxs-report"></i></button><button row-id=' + row.rowId + ' title="چاپ صورتحساب" type="button" class="btn action-head-print btn-icon btn-primary glow m-1"><i class="bx bxs-printer"></i></button><button row-id=' + row.rowId + ' title="اصلاح صورتحساب" type="button" class="btn action-head-editinvoice btn-icon btn-primary glow m-1"><i class="bx bxs-message-alt-edit"></i></button><button row-id=' + row.rowId + ' title="برگشت از فروش" type="button" class="btn action-head-returnfromsale btn-icon btn-primary glow m-1"><i class="bx bxs-message-alt-minus"></i></button><button row-id=' + row.rowId + ' title="ابطال صورتحساب" type="button" class="btn action-head-cancelinvoice btn-icon btn-primary glow m-1"><i class="bx bxs-message-alt-x"></i></button>'
                    }
                },
                {
                    data: null,
                    orderable: false,
                    render: function (data, type, row, meta) {
                        return '<input row-id=' + row.rowId + ' type = "checkbox" class="checkbox-input" name = "IsChecked" > '
                    }
                },
                //{ data: "createDate", name: "createDate" },
                { data: "createOn", name: "CreateOn" },
                { data: "exportOn", name: "exportOn" },
                { data: "insTitle", name: "insTitle" },
                { data: "inno", name: "Inno" },
                { data: "invoiceNumber", name: "invoiceNumber" },
                { data: "tbill", name: "Tbill" },
                { data: "taxId", name: "taxId", orderable: false },
                { data: "status", name: "Status" },
                { data: "customer", name: "Customer" },
                { data: "tinb", name: "Tinb" },
                { data: "referenceNumber", name: "ReferenceNumber" },

            ],
            columnDefs: [
                { className: "dt-center", "targets": "_all" },
            ],
        }
    );
}

function countRowIsChecked() {

    const productId = [];

    $('#tableHeadIndex > tbody > tr').each(function (i, row) {
        var _Row = $(this);
        $checkbox = _Row.find('input[name="IsChecked"]')
        if ($checkbox.is(':checked')) {
            var recordId = $checkbox.attr('row-id');

            productId.push(recordId);
        }
    });

    return productId.length;
}

function checkRowIsChecked() {

    const productId = [];

    $('#tableHeadIndex > tbody > tr').each(function (i, row) {
        var _Row = $(this);
        $checkbox = _Row.find('input[name="IsChecked"]')
        if ($checkbox.is(':checked')) {
            var recordId = $checkbox.attr('row-id');

            productId.push(recordId);
        }
    });

    if (productId.length == 0) {
        return false;
    }

    return true;
}

$(".send-selected-invoices").click(function () {

    var resultCheck = checkRowIsChecked();

    if (resultCheck == false) {
        return toastr.error("هیچ صورتحسابی انتخاب نشده است", '', {
            rtl: true,
            positionClass: 'toast-top-full-width'
        });
    }



    Swal.fire({
        title: 'ارسال صورت حساب به سامانه مودیان',
        text: "آیا از ارسال صورت حساب های انتخاب شده مطمئن هستید؟",
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'تایید',
        confirmButtonClass: 'btn btn-primary',
        cancelButtonClass: 'btn btn-danger ml-1',
        cancelButtonText: 'انصراف',
        buttonsStyling: false,
    }).then(function (result) {
        if (result.value) {

            runQuery('/Head/IsPresentForSendInvoice', null, ".action-head-delete", function (result) {

                const records = [];
                

                $('#tableHeadIndex > tbody > tr').each(function (i, row) {
                    var _Row = $(this);
                    $checkbox = _Row.find('input[name="IsChecked"]')
                    if ($checkbox.is(':checked')) {
                        var recordId = $checkbox.attr('row-id');

                        records.push(recordId);
                    }
                });

                var fileData = new FormData();
                fileData.append('records', records);

                runQuery('/Head/InvoiceSend', fileData, "", function (result) {
                    toastr.success(result.message, '', {
                        rtl: true,
                        positionClass: 'toast-top-full-width'
                    });


                });

                toastr.info("عملیات در پس زمینه مشغول اجراست | جهت مشاهده نتیجه صفحه را رفرش کنید", '', {
                    rtl: true,
                    positionClass: 'toast-top-full-width'
                });
            });

        }
    });
});

$(".action-head-delete").click(function () {

    var resultCheck = checkRowIsChecked();

    if (resultCheck == false) {
        return toastr.error("هیچ صورتحسابی انتخاب نشده است", '', {
            rtl: true,
            positionClass: 'toast-top-full-width'
        });
    }

    Swal.fire({
        title: 'حذف صورتحساب',
        text: "آیا از حذف صورت حسابهای انتخاب شده مطمئن هستید؟",
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'تایید',
        confirmButtonClass: 'btn btn-primary',
        cancelButtonClass: 'btn btn-danger ml-1',
        cancelButtonText: 'انصراف',
        buttonsStyling: false,
    }).then(function (result) {
        if (result.value) {

            //$(this).prop('disabled', true);
            //$(this).text("لطفا منتظر بمانید...");

            $('#tableHeadIndex > tbody > tr').each(function (i, row) {
                var _Row = $(this);
                $checkbox = _Row.find('input[name="IsChecked"]')
                if ($checkbox.is(':checked')) {
                    var recordId = $checkbox.attr('row-id');


                    var fileData = new FormData();
                    fileData.append('id', recordId);

                    runQuery('/Head/Delete', fileData, ".action-head-delete", function (result) {
                        toastr.success(result.message, '', {
                            rtl: true,
                            positionClass: 'toast-top-full-width'
                        });

                        tableHeadIndex.ajax.reload(null, false);
                    });
                }
            });

        }
    });
});

$(document).on('click', '.action-head-editinvoice', function () {

    var resultCheck = checkRowIsChecked();

    if (resultCheck == false) {
        return toastr.error("هیچ صورتحسابی انتخاب نشده است", '', {
            rtl: true,
            positionClass: 'toast-top-full-width'
        });
    }

    Swal.fire({
        title: 'اصلاح صورتحساب',
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

            const records = [];

            $('#tableHeadIndex > tbody > tr').each(function (i, row) {
                var _Row = $(this);
                $checkbox = _Row.find('input[name="IsChecked"]')
                if ($checkbox.is(':checked')) {
                    var recordId = $checkbox.attr('row-id');

                    records.push(recordId);
                }
            });

            var fileData = new FormData();
            fileData.append('records', records);

            runQuery('/Head/EditInvoice', fileData, ".action-head-delete", function (result) {
                toastr.success("عملیات اصلاح صورتحساب / صورتحساب ها به پایان رسید", '', {
                    rtl: true,
                    positionClass: 'toast-top-full-width'
                });

                tableHeadIndex.ajax.reload(null, false);
            });
        }
    });
});

$(document).on('click', '.action-head-returnfromsale', function () {

    var resultCheck = checkRowIsChecked();

    if (resultCheck == false) {
        return toastr.error("هیچ صورتحسابی انتخاب نشده است", '', {
            rtl: true,
            positionClass: 'toast-top-full-width'
        });
    }


    Swal.fire({
        title: 'برگشت از فروش صورتحساب',
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


            const records = [];

            $('#tableHeadIndex > tbody > tr').each(function (i, row) {
                var _Row = $(this);
                $checkbox = _Row.find('input[name="IsChecked"]')
                if ($checkbox.is(':checked')) {
                    var recordId = $checkbox.attr('row-id');

                    records.push(recordId);
                }
            });

            var fileData = new FormData();
            fileData.append('records', records);

            runQuery('/Head/ReturnFromSaleInvoice', fileData, ".action-head-delete", function (result) {
                toastr.success("عملیات برگشت از فروش صورتحساب / صورتحساب ها به پایان رسید", '', {
                    rtl: true,
                    positionClass: 'toast-top-full-width'
                });

                tableHeadIndex.ajax.reload(null, false);
            });

        }
    });
});

$(document).on('click', '.action-head-cancelinvoice', function () {

    var resultCheck = checkRowIsChecked();

    if (resultCheck == false) {
        return toastr.error("هیچ صورتحسابی انتخاب نشده است", '', {
            rtl: true,
            positionClass: 'toast-top-full-width'
        });
    }

    Swal.fire({
        title: 'ابطال صورتحساب',
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


            const records = [];

            $('#tableHeadIndex > tbody > tr').each(function (i, row) {
                var _Row = $(this);
                $checkbox = _Row.find('input[name="IsChecked"]')
                if ($checkbox.is(':checked')) {
                    var recordId = $checkbox.attr('row-id');

                    records.push(recordId);
                }
            });

            var fileData = new FormData();
            fileData.append('records', records);

            runQuery('/Head/CancelInvoice', fileData, ".action-head-delete", function (result) {
                toastr.success("عملیات ابطال صورتحساب / صورتحساب ها به پایان رسید", '', {
                    rtl: true,
                    positionClass: 'toast-top-full-width'
                });

                tableHeadIndex.ajax.reload(null, false);
            });

        }
    });
});


$("#formHeadFilter").submit(function (e) {

    e.preventDefault();

    initTableHeadIndex();

});



$(document).on('click', '.action-head-get', function () {

    var id = $(this).attr("row-id");

    $(".modal-xlarge").load('/Head/Information?modal=modal-xlarge&reload=true&id=' + id, function () {
        var myModal = new bootstrap.Modal(document.getElementById('modal-xlarge'), {

            keyboard: false,
            backdrop: 'static'

        })
        myModal.show()
    });
});

$(document).on('click', '.action-head-queryinvoice', function () {

    var id = $(this).attr("row-id");

    $(".modal-xlarge").load('/Head/QueryInvoice?modal=modal-xlarge&reload=true&id=' + id, function () {
        var myModal = new bootstrap.Modal(document.getElementById('modal-xlarge'), {

            keyboard: false,
            backdrop: 'static'

        })
        myModal.show()
    });
});


$(document).on('click', '.action-head-refreshstate', function () {

    var resultCheck = checkRowIsChecked();

    if (resultCheck == false) {
        return toastr.error("هیچ صورتحسابی انتخاب نشده است", '', {
            rtl: true,
            positionClass: 'toast-top-full-width'
        });
    }
    const records = [];

    $('#tableHeadIndex > tbody > tr').each(function (i, row) {
        var _Row = $(this);
        $checkbox = _Row.find('input[name="IsChecked"]')
        if ($checkbox.is(':checked')) {
            var recordId = $checkbox.attr('row-id');

            records.push(recordId);
        }
    });

    var fileData = new FormData();
    fileData.append('records', records);


    $.ajax({
        type: "POST",
        url: '/Head/RefreshStatus',
        dataType: "json",
        contentType: 'application/json; charset=utf-8',
        contentType: false,
        processData: false,
        async: true,
        data: fileData,
        success: function (result, status, xhr) {

        },
        error: function (result, xhr, status, error) {

        }, complete: function () {
        }
    });

    toastr.info("عملیات در پس زمینه مشغول اجراست | جهت مشاهده نتیجه صفحه را رفرش کنید", '', {
        rtl: true,
        positionClass: 'toast-top-full-width'
    });


});


$(document).on("click", ".action-head-create", function () {

    $(".modal-xlarge").load('/Head/Information?modal=modal-xlarge&reload=true', function () {
        var myModal = new bootstrap.Modal(document.getElementById('modal-xlarge'), {
            keyboard: false,
            backdrop: 'static'

        })
        myModal.show()
    });
});

$(document).on("click", ".action-head-excel", function () {

    $(".modal-xlarge").load('/Head/Excel?modal=modal-xlarge&reload=true', function () {
        var myModal = new bootstrap.Modal(document.getElementById('modal-xlarge'), {
            keyboard: false,
            backdrop: 'static'

        })
        myModal.show()
    });
});

$(document).on("click", ".action-head-print", function () {


    var resultCheck = checkRowIsChecked();

    if (resultCheck == false) {
        return toastr.error("هیچ صورتحسابی انتخاب نشده است", '', {
            rtl: true,
            positionClass: 'toast-top-full-width'
        });
    }

    var count = countRowIsChecked();

    if (count > 1) {
        return toastr.error("تنها یک صورتحساب، قابل انتخاب جهت چاپ است", '', {
            rtl: true,
            positionClass: 'toast-top-full-width'
        });
    }

    $('#tableHeadIndex > tbody > tr').each(function (i, row) {
        var _Row = $(this);
        $checkbox = _Row.find('input[name="IsChecked"]')
        if ($checkbox.is(':checked')) {
            var recordId = $checkbox.attr('row-id');

            window.open("/Head/PrintOrder?HeadId=" + recordId, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=0,width=800,height=600");
        }
    });

});

$(document).on('click', '.action-payment-delete', function () {

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
            runQuery('/Payment/Delete', fileData, "#demo", function (result) {
                toastr.success(result.message, '', {
                    rtl: true,
                    positionClass: 'toast-top-full-width'
                });
                tablePaymentIndex.ajax.reload(null, false);
            });
        }
    });
});

$(document).on('click', '.action-payment-get', function () {

    var id = $(this).attr("row-id");

    $(".modal-xlarge2").load('/Payment/Information?modal=modal-xlarge2&reload=true&id=' + id, function () {
        var myModal = new bootstrap.Modal(document.getElementById('modal-xlarge2'), {
            keyboard: false,
            backdrop: 'static'

        })
        myModal.show()
    });
});


$(document).on("click", ".action-payment-create", function () {

    if (HeadInformationRecordId == '') {
        return toastr.error('لطفا جهت افزودن اطلاعات پرداختی فرم را ذخیره کنید', '', {
            rtl: true,
            positionClass: 'toast-top-full-width'
        });
    }

    $(".modal-xlarge2").load('/Payment/Information?modal=modal-xlarge2&reload=true', function () {
        var myModal = new bootstrap.Modal(document.getElementById('modal-xlarge2'), {
            keyboard: false,
            backdrop: 'static'

        })
        myModal.show()
    });
});


$(document).on('click', '.action-body-delete', function () {

    var id = $(this).attr("row-id");

    var fileData = new FormData();
    fileData.append("id", id);
    fileData.append("headid", HeadInformationRecordId);
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
            runQuery('/Body/Delete', fileData, "#demo", function (result) {
                toastr.success(result.message, '', {
                    rtl: true,
                    positionClass: 'toast-top-full-width'
                });
                tableBodyIndex.ajax.reload(null, false);
                refreshCalculate(HeadInformationRecordId);
            });
        }
    });
});

$(document).on('click', '.action-body-get', function () {

    var id = $(this).attr("row-id");

    $(".modal-xlarge2").load('/Body/Information?modal=modal-xlarge2&reload=true&id=' + id, function () {
        var myModal = new bootstrap.Modal(document.getElementById('modal-xlarge2'), {
            keyboard: false
        })
        myModal.show()
    });
});


$(document).on("click", ".action-body-create", function () {

    console.log(HeadInformationRecordId);

    if (HeadInformationRecordId == '') {
        return toastr.error('لطفا جهت افزودن محصول فرم را ذخیره کنید', '', {
            rtl: true,
            positionClass: 'toast-top-full-width'
        });
    }

    $(".modal-xlarge2").load('/Body/Information?modal=modal-xlarge2&reload=true', function () {
        var myModal = new bootstrap.Modal(document.getElementById('modal-xlarge2'), {
            keyboard: false,
            backdrop: 'static'

        })
        myModal.show()
    });
});


$(document).ready(function () {
  
    var action = getParameterByName("Action");

    if (action == "New") {
        $(".modal-xlarge").load('/Head/Information?modal=modal-xlarge&reload=true', function () {
            var myModal = new bootstrap.Modal(document.getElementById('modal-xlarge'), {
                keyboard: false,
                backdrop: 'static'

            })
            myModal.show()
        });
    }

    if (action == "Excel") {
        $(".modal-xlarge").load('/Head/Excel?modal=modal-xlarge&reload=true', function () {
            var myModal = new bootstrap.Modal(document.getElementById('modal-xlarge'), {
                keyboard: false,
                backdrop: 'static'

            })
            myModal.show()
        });
    }

    if (action == "StatusAll") {
        $("#fStatus").val(null);
    }
    if (action == "StatusSuccess") {
        $("#fStatus").val("2");
    }
    if (action == "StatusInSend") {
        $("#fStatus").val("0");
    }
    if (action == "StatusInSubmit") {
        $("#fStatus").val("1");
    }
    if (action == "StatusInError") {
        $("#fStatus").val("3");
    }
    if (action == "StatusInWarning") {
        $("#fStatus").val("4");
    }

    $('.SelectAll').click(function (e) {
        var table = $(e.target).closest('table');
        $('input[name="IsChecked"]', table).prop('checked', this.checked);
    });

    initTableHeadIndex();

});

