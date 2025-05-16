function getUserInformation(userInformationRecordId) {

    var fileData = new FormData();
    fileData.append("id", userInformationRecordId);

    runQuery('/User/Get', fileData, "#button", function (result) {

        var keys = Object.keys(result.data);

        for (let i = 0; i < keys.length; i++) {
            var key = keys[i];
            var value = result.data[key];
            $("#" + key).val(value);

            if (key == "apiStatus") {
                $('#isApi').prop('checked', value);
            }

            if (key == "adminStatus") {
                $('#isAdmin').prop('checked', value);
            }

            if (key == "userStatus") {
                $('#isUser').prop('checked', value);
            }

            if (key == "agentStatus") {
                $('#isAgent').prop('checked', value);
            }

            if (result.data.roleId != null) {
                var role = new Option(result.data.roleName, result.data.roleId, true, true);
                $("#roleId").append(role);
            }
        }
    });
}

$("#formUserInformation").submit(function (e) {

    e.preventDefault();

    var fileData = new FormData(this);

    var requestUrl = '';
    if (userInformationRecordId == '') {
        requestUrl = '/User/Create';
    }
    else {
        requestUrl = '/User/Update';
        fileData.append("id", userInformationRecordId);
    }

    runQuery(requestUrl, fileData, "#buttonUserInformationReg", function (result) {

        $("#" + userInformationModal).modal('hide');

        if (userInformationReload == 'true') {
            if (userInformationRecordId == '') {
                tableUserIndex.ajax.reload();
            }
            else {
                tableUserIndex.ajax.reload(null, false);
            }
        }

        toastr.success(result.message, '', {
            rtl: true,
            positionClass: 'toast-top-full-width'
        });
    });
});

$(document).ready(function () {

    if (userInformationRecordId != '') {
        getUserInformation(userInformationRecordId);

    }
});