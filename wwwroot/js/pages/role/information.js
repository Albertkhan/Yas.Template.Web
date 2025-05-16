function getRoleInformation(roleInformationRecordId) {

    var fileData = new FormData();
    fileData.append("id", roleInformationRecordId);

    runQuery('/Role/Get', fileData, "#button", function (result) {
        console.log(result);
        $('#Name').val(result.data.name);
        $('#UserCreate').prop('checked', result.data.userCreate);
        $('#UserUpdate').prop('checked', result.data.userUpdate);
        $('#UserRead').prop('checked', result.data.userRead);
        $('#UserDelete').prop('checked', result.data.userDelete);
        $('#UserAccountCreate').prop('checked', result.data.userAccountCreate);
        $('#UserAccountUpdate').prop('checked', result.data.userAccountUpdate);
        $('#UserAccountRead').prop('checked', result.data.userAccountRead);
        $('#UserAccountDelete').prop('checked', result.data.userAccountDelete);
        $('#ProductCreate').prop('checked', result.data.productCreate);
        $('#ProductUpdate').prop('checked', result.data.productUpdate);
        $('#ProductRead').prop('checked', result.data.productRead);
        $('#ProductDelete').prop('checked', result.data.productDelete);
        $('#AccountPaymentCreate').prop('checked', result.data.accountPaymentCreate);
        $('#AccountPaymentUpdate').prop('checked', result.data.accountPaymentUpdate);
        $('#AccountPaymentRead').prop('checked', result.data.accountPaymentRead);
        $('#AccountPaymentDelete').prop('checked', result.data.accountPaymentDelete);
        $('#AccountPaymentReport').prop('checked', result.data.accountPaymentReport);
        $('#WalletCreditCreate').prop('checked', result.data.walletCreditCreate);
        $('#WalletCreditUpdate').prop('checked', result.data.walletCreditUpdate);
        $('#WalletCreditRead').prop('checked', result.data.walletCreditRead);
        $('#WalletCreditDelete').prop('checked', result.data.walletCreditDelete);
        $('#WalletCreditReport').prop('checked', result.data.walletCreditReport);
        $('#AccountBuyPlanCreate').prop('checked', result.data.accountBuyPlanCreate);
        $('#AccountBuyPlanUpdate').prop('checked', result.data.accountBuyPlanUpdate);
        $('#AccountBuyPlanRead').prop('checked', result.data.accountBuyPlanRead);
        $('#AccountBuyPlanDelete').prop('checked', result.data.accountBuyPlanDelete);
        $('#AccountDiscountCreate').prop('checked', result.data.accountDiscountCreate);
        $('#AccountDiscountUpdate').prop('checked', result.data.accountDiscountUpdate);
        $('#AccountDiscountRead').prop('checked', result.data.accountDiscountRead);
        $('#AccountDiscountDelete').prop('checked', result.data.accountDiscountDelete);
        $('#EducationCreate').prop('checked', result.data.educationCreate);
        $('#EducationUpdate').prop('checked', result.data.educationUpdate);
        $('#EducationRead').prop('checked', result.data.educationRead);
        $('#EducationDelete').prop('checked', result.data.educationDelete);
        $('#CategoryCreate').prop('checked', result.data.categoryCreate);
        $('#CategoryUpdate').prop('checked', result.data.categoryUpdate);
        $('#CategoryRead').prop('checked', result.data.categoryRead);
        $('#CategoryDelete').prop('checked', result.data.categoryDelete);
        $('#FieldHelpCreate').prop('checked', result.data.fieldHelpCreate);
        $('#FieldHelpUpdate').prop('checked', result.data.fieldHelpUpdate);
        $('#FieldHelpRead').prop('checked', result.data.fieldHelpRead);
        $('#FieldHelpDelete').prop('checked', result.data.fieldHelpDelete);
        $('#SettingRead').prop('checked', result.data.settingRead);
        $('#SettingUpdate').prop('checked', result.data.settingUpdate);
        $('#RoleCreate').prop('checked', result.data.roleCreate);
        $('#RoleUpdate').prop('checked', result.data.roleUpdate);
        $('#RoleRead').prop('checked', result.data.roleRead);
        $('#RoleDelete').prop('checked', result.data.roleDelete);
        $('#SmsRead').prop('checked', result.data.smsRead);
        $('#SmsDelete').prop('checked', result.data.smsDelete);
        $('#SystemLogRead').prop('checked', result.data.logRead);
        $('#SystemLogDelete').prop('checked', result.data.logDelete);

        $('#Totalncome').prop('checked', result.data.totalncome);
        $('#MonthlyIncome').prop('checked', result.data.monthlyIncome);
        $('#AmountNumberDepositsChart').prop('checked', result.data.amountNumberDepositsChart);
        $('#AmountNumberPurchaseChart').prop('checked', result.data.amountNumberPurchaseChart);
        $('#SuccessInvoicesChart').prop('checked', result.data.successInvoicesChart);
       
    });
}

$("#formRoleInformation").submit(function (e) {

    e.preventDefault();

    var fileData = new FormData(this);

    var requestUrl = '';
    if (roleInformationRecordId == '') {
        requestUrl = '/Role/Create';
    }
    else {
        requestUrl = '/Role/Update';
        fileData.append("id", roleInformationRecordId);
    }

    runQuery(requestUrl, fileData, "#buttonroleInformationReg", function (result) {

        $("#" + roleInformationModal).modal('hide');

        if (roleInformationReload == 'true') {
            if (roleInformationRecordId == '') {
                tableRoleIndex.ajax.reload();
            }
            else {
                tableRoleIndex.ajax.reload(null, false);
            }
        }

        toastr.success(result.message, '', {
            rtl: true,
            positionClass: 'toast-top-full-width'
        });
    });
});

$(document).ready(function () {

    if (roleInformationRecordId != '') {
        getRoleInformation(roleInformationRecordId);
    }
});