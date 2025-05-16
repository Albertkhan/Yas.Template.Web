var stepper = null;

$(document).on("click", "#selectPlan", function () {

    //$(".card").each(function () {
    //    $(this).removeClass("border border-2 border-primary");
    //});

    //$(this).closest(".card").addClass("border border-2 border-primary");

    planId = $(this).attr('plan-id');
   
    //$(".submit-plan").prop("disabled", false);
    $("#discountCode").val(null)
    calculateBuyPlan();
    stepper.next();
    
});

$("#PayType").change(function () {
    payType = $("#PayType").val();
});

$(document).ready(function () {

    stepper = new Stepper($('.bs-stepper')[0])

});

$(document).on("click", ".action-pay", function () {

    calculateBuyPlan();

    var fileData = new FormData();

    var requestUrl = '/Account/Pay';

    fileData.append("AccountBuyPlanId", planId);
    fileData.append("DiscountCode", discountCode);
    fileData.append("PayType", payType);

    runQuery(requestUrl, fileData, "#buttonPay", function (result) {

    

       

        $("#buttonPay").prop("disabled", true);

        toastr.success("در حالت انتقال به صفحه پرداخت می باشید لطفا منتظر بمانید ...", '', {
            rtl: true,
            positionClass: 'toast-top-full-width'
        });

        window.location = result.data.url;
    });
});


$(document).on("click", "#buttonValidateDiscountCode", function () {

    var fileData = new FormData();

    var requestUrl = '/Account/ValidateDiscountCode';

    fileData.append("DiscountCode", $("#discountCode").val());

    runQuery(requestUrl, fileData, "#buttonValidateDiscountCode", function (result) {
        discountCode = $("#discountCode").val();
        calculateBuyPlan();

        $("#buttonRemoveDiscountCode").prop("hidden", false);
        $("#buttonValidateDiscountCode").prop("hidden", true);
        $("#discountCode").prop("readonly", true);
    });
});

$(document).on("click", "#buttonRemoveDiscountCode", function () {

    discountCode = '';

    $("#buttonRemoveDiscountCode").prop("hidden", true);
    $("#buttonValidateDiscountCode").prop("hidden", false);
    $("#discountCode").prop("readonly", false);

    calculateBuyPlan();
});

function calculateBuyPlan() {
    var fileData = new FormData();

    var requestUrl = '/Account/CalculateBuyPlan';

    fileData.append("DiscountCode", discountCode);
    fileData.append("AccountBuyPlanId", planId);

    runQuery(requestUrl, fileData, "#buttonValidateDiscountCode", function (result) {
        $(".plan-name").text(result.data.buyPlanName);
        $(".plan-price").text(result.data.pricePerUnit);
        $(".plan-discount").text(result.data.discount);
        $(".plan-tax").text(result.data.tax);
        $(".plan-total").text(result.data.total);

        if (result.data.isDiscount) {
            toastr.success("کد تخفیف با موفقیت اعمال شد", '', {
                rtl: true,
                positionClass: 'toast-top-full-width'
            });

         
        }

    });
}

