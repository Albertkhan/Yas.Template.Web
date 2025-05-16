var stepper = null;
var step = 1;
function getAccountInformation(accountInformationRecordId) {

    var fileData = new FormData();
    fileData.append("id", accountInformationRecordId);

    runQuery('/Account/Get', fileData, "#button", function (result) {

        var keys = Object.keys(result.data);

        for (let i = 0; i < keys.length; i++) {
            var key = keys[i];
            var value = result.data[key];
            $("#" + key).val(value);

            if (key == "isSandbox") {
                console.log(value);
                $('#isSandBox').prop('checked', value);
            }

            if (key == "isAutoInnoValue") {
                $('#isAutoInno').prop('checked', value);
            }


        }

        if (result.data.userId != null) {
            var user = new Option(result.data.userFullName, result.data.userId, true, true);
            $("#userId").append(user);
        }
    });
}


$("#formAccountInformation").submit(function (e) {

    e.preventDefault();

    var fileData = new FormData(this);

    var requestUrl = '';
    if (accountInformationRecordId == '') {
        requestUrl = '/Account/Create';
    }
    else {
        requestUrl = '/Account/Update';
        fileData.append("id", accountInformationRecordId);
    }

    fileData.append("step", step);

    runQuery(requestUrl, fileData, ".btn-next-action", function (result) {

        //if (accountInformationReload == 'true') {
        //    if (accountInformationRecordId == '') {
        //        tableAccountIndex.ajax.reload();
        //    }
        //    else {
        //        tableAccountIndex.ajax.reload(null, false);
        //    }
        //}



        accountInformationRecordId = result.data.id;

        toastr.success(result.message, '', {
            rtl: true,
            positionClass: 'toast-top-full-width'
        });

        stepper.next();
        if (step < 3) {
            step = step + 1;
        }

        if (step == 3) {
            $(".btn-next-action").text("ثبت");
        }
        else {
            $(".btn-next-action").text("ثبت و بعدی");
        }

    });
});

$(document).on('click', '.pre-action', function () {

    stepper.previous();

    if (step > 1) {
        step = step - 1;
    }

    if (step == 3) {
        $(".btn-next-action").text("ثبت");
    }
    else {
        $(".btn-next-action").text("ثبت و بعدی");
    }
});

$(document).ready(function () {

    stepper = new Stepper($('.bs-stepper')[0])



    if (accountInformationRecordId != '') {
        getAccountInformation(accountInformationRecordId);
        $("#userId").prop("disabled", true);
    }
});