function getAccountBuyPlanInformation(accountBuyPlanInformationRecordId) {

    var fileData = new FormData();
    fileData.append("id", accountBuyPlanInformationRecordId);

    runQuery('/AccountBuyPlan/Get', fileData, "#button", function (result) {

        var keys = Object.keys(result.data);

        for (let i = 0; i < keys.length; i++) {
            var key = keys[i];
            var value = result.data[key];
            $("#" + key).val(value);
        }
    });
}
$("#formAccountBuyPlanInformation").submit(function (e) {

    e.preventDefault();

    var fileData = new FormData(this);

    var requestUrl = '';
    if (accountBuyPlanInformationRecordId == '') {
        requestUrl = '/AccountBuyPlan/Create';
    }
    else {
        requestUrl = '/AccountBuyPlan/Update';
        fileData.append("id", accountBuyPlanInformationRecordId);
    }

    runQuery(requestUrl, fileData, "#buttonAccountBuyPlanInformationReg", function (result) {

        $("#" + accountBuyPlanInformationModal).modal('hide');

        if (accountBuyPlanInformationReload == 'true') {
            if (accountBuyPlanInformationRecordId == '') {
                tableAccountBuyPlanIndex.ajax.reload();
            }
            else {
                tableAccountBuyPlanIndex.ajax.reload(null, false);
            }
        }

        toastr.success(result.message, '', {
            rtl: true,
            positionClass: 'toast-top-full-width'
        });
    });
});

$(document).ready(function () {
    $(".number-seperate").each(function () {
        $(this).number(true, 0);
    });

    if (accountBuyPlanInformationRecordId != '') {
        getAccountBuyPlanInformation(accountBuyPlanInformationRecordId);
    }
});