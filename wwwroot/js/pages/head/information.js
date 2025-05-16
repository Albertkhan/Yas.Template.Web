
var indatimInstance = new mds.MdsPersianDateTimePicker(document.getElementById('IndatimSelector'), {
    targetTextSelector: '[data-name="indatim-text"]',
    targetDateSelector: '[data-name="indatim-date"]',
});

var indati2mInstance = new mds.MdsPersianDateTimePicker(document.getElementById('Indati2mSelector'), {
    targetTextSelector: '[data-name="indati2m-text"]',
    targetDateSelector: '[data-name="indati2m-date"]',
});

var
    CdcdInstance = new mds.MdsPersianDateTimePicker(document.getElementById('CdcdSelector'), {
        targetTextSelector: '[data-name="cdcd-text"]',
        targetDateSelector: '[data-name="cdcd-date"]',
        textFormat: "yyyy/MM/dd"
    });


$(document).on('click', '.action-clear-cdcd', function () {

    alert("asdsa");
    CdcdInstance.clearDate();
});
$("#customerId").change(function () {

    var customerId = $("#customerId").val();

    if (customerId != null) {
        var fileData = new FormData();
        fileData.append("id", $("#customerId").val());

        runQuery('/Customer/Get', fileData, "#button", function (result) {

            $("#tinb").val(result.data.economicCode);
            $("#tob").val(result.data.customerType);

        });
    }
    else {
        $("#tinb").val(null);
        $("#tob").val(null);
    }
});


function refreshCalculate(headId) {

    tableHeadIndex.ajax.reload(null, false);

    var fileData = new FormData();
    fileData.append("id", headId);

    runQuery('/Head/Get', fileData, "#button", function (result) {



        var keys = Object.keys(result.data);

        for (let i = 0; i < keys.length; i++) {
            var key = keys[i];
            var value = result.data[key];
            if (key == "tadis") {
                $("#" + key).val(value);
            }
            if (key == "tbill") {
                $("#" + key).val(value);
            }
            if (key == "tdis") {
                $("#" + key).val(value);
            }
            if (key == "tvam") {
                $("#" + key).val(value);
            }
            if (key == "tadis") {
                $("#" + key).val(value);
            }
            if (key == "tprdis") {
                $("#" + key).val(value);
            }
            if (key == "todam") {
                $("#" + key).val(value);
            }
            if (key == "cap") {
                $("#" + key).val(value);
            }
            if (key == "insp") {
                $("#" + key).val(value);
            }
        }

    });
}


function getHeadInformation(HeadInformationRecordId) {

    var fileData = new FormData();
    fileData.append("id", HeadInformationRecordId);

    runQuery('/Head/Get', fileData, "#button", function (result) {

        var keys = Object.keys(result.data);

        console.log(result.data);

        for (let i = 0; i < keys.length; i++) {
            var key = keys[i];
            var value = result.data[key];
            $("#" + key).val(value);
            if (key == "indatimValue") {
                indatimInstance.setDate(new Date(value));
            }
            if (key == "indati2mValue") {
                indati2mInstance.setDate(new Date(value));
            }
            if (key == "cdcdValue") {
                console.log(value);
                if (value != null)
                    CdcdInstance.setDate(new Date(value));
            }


            if (key == "ins") {
                if (value == 4 || value == 3 || value == 2) {
                    $("#inty").prop("disabled", true);
                    $("#inp").prop("disabled", true);
                    $("#ins").prop("disabled", true);
                    $("#setm").prop("disabled", true);
                    $("#customerId").prop("disabled", true);
                    $("#tinb").prop("disabled", true);
                    $("#tob").prop("disabled", true);
                }
            }
        }

        if (result.data.customerId != null) {
            var customer = new Option(result.data.customerName, result.data.customerId, true, true);
            $("#customerId").append(customer);
        }

        setmAction($("#setm").val());

        //refreshCalculate(HeadInformationRecordId);

    });
}

$("#formHeadInformation").submit(function (e) {

    e.preventDefault();

    saveHead();
});

function saveHead() {

    var form = document.getElementById("formHeadInformation");

    if ($("#ins").val() == 2 || $("#ins").val() == 3 || $("#ins").val() == 4) {
        $("#inty").prop("disabled", false);
        $("#inp").prop("disabled", false);
        $("#ins").prop("disabled", false);
        $("#setm").prop("disabled", false);
        $("#customerId").prop("disabled", false);
        $("#tinb").prop("disabled", false);
        $("#tob").prop("disabled", false);
    }



    var fileData = new FormData(form);

    var requestUrl = '';
    if (HeadInformationRecordId == '') {
        requestUrl = '/Head/Create';
    }
    else {
        requestUrl = '/Head/Update';
        fileData.append("id", HeadInformationRecordId);
    }

    runQuery(requestUrl, fileData, "#buttonHeadInformationReg", function (result) {

        if (HeadInformationReload == 'true') {
            if (HeadInformationRecordId == '') {
                loadChilds();
                tableHeadIndex.ajax.reload();

                HeadInformationRecordId = result.data.headId;
            }
            else {
                tableHeadIndex.ajax.reload(null, false);
                loadChilds();
            }
        }

        refreshCalculate(HeadInformationRecordId)

        toastr.success(result.message, '', {
            rtl: true,
            positionClass: 'toast-top-full-width'
        });
    });

    if ($("#ins").val() == 2 || $("#ins").val() == 3 || $("#ins").val() == 4) {
        $("#inty").prop("disabled", true);
        $("#inp").prop("disabled", true);
        $("#ins").prop("disabled", true);
        $("#setm").prop("disabled", true);
        $("#customerId").prop("disabled", true);
        $("#tinb").prop("disabled", true);
        $("#tob").prop("disabled", true);
    }


}


function loadChilds() {
    $("#body").load('/Body/Index?HeadId=' + HeadInformationRecordId, function () {
    });

    $("#payment").load('/Payment/Index?HeadId=' + HeadInformationRecordId
        , function () {
        });
}


function setmAction(value) {

    if (value == 1) {
        $("#cap").prop("readonly", true);
        $("#insp").prop("readonly", true);

        //$("#cap").val($("#tardis").val().replace(/,/g, ""));
        //$("#insp").val(0);
    }
    else if (value == 2) {
        $("#cap").prop("readonly", true);
        $("#insp").prop("readonly", true);

        //$("#insp").val($("#tardis").val().replace(/,/g, ""));
        //$("#cap").val(0);
    }
    else if (value == 3) {
        $("#insp").prop("readonly", false);
        $("#cap").prop("readonly", false);

        //$("#cap").val(0);
        //$("#insp").val(0);
    }
    else {
        $("#insp").prop("readonly", false);
        $("#cap").prop("readonly", false);

        //$("#cap").val(0);
        //$("#insp").val(0);
    }
}


$(document).ready(function () {

    //$(".number-seperate").each(function () {
    //    $(this).number(true, 0);
    //});

    //$(".number-seperate-decimal").each(function () {
    //    $(this).number(true, $(this).attr("decimal-lenght"));
    //});


    $("#ins").change(function () {

        if ($("#ins").val() == 1) {
            $("#irtaxid").prop("readonly", true);
        }
        else {
            $("#irtaxid").prop("readonly", false);
        }
    });

    $("#setm").change(function () {

        setmAction($("#setm").val());
        
    });

    var currentdate = new Date();

    console.log(currentdate);

    indati2mInstance.setDate(currentdate);

    indati2mInstance.disable()

    loadChilds();

    if (HeadInformationRecordId != '') {
        getHeadInformation(HeadInformationRecordId);
    }
});