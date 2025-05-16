

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function runQuery(url, fileData, element, _callback) {
    $(element).prop('disabled', true);
    toastr.remove();
    $.ajax({
        type: "POST",
        url: url,
        dataType: "json",
        contentType: 'application/json; charset=utf-8',
        contentType: false,
        processData: false,
        async: true,
        data: fileData,
        success: function (result, status, xhr) {
            $(element).prop('disabled', false);
            _callback(result);
        },
        error: function (result, xhr, status, error) {

            $(element).prop('disabled', false);

                toastr.error(result.responseJSON.message, '', {
                    rtl: true,
                    positionClass: 'toast-top-full-width'
                });
            
        }, complete: function () {
        }
    });
}

$(document).ready(function () {

    $(".number-seperate").each(function (index, element) {

        const maskOptions = {
            mask: Number,  // enable number mask

            // other options are optional with defaults below
            scale: 0,  // digits after point, 0 for integers
            thousandsSeparator: ',',  // any single char
            padFractionalZeros: false,  // if true, then pads zeros at end to the length of scale
            normalizeZeros: false,  // appends or removes zeros at ends
            radix: '.',  // fractional delimiter
            mapToRadix: ['.'],  // symbols to process as radix

            // additional number interval options (e.g.)

        };
        const mask = IMask(element, maskOptions);
    });

    $(".number-mask").each(function (index, element) {

        const maskOptions = {
            mask: Number,
        };
        const mask = IMask(element, maskOptions);
    });



    $(".number-seperate-decimal").each(function (index, element) {
        const maskOptions = {
            mask: Number,  // enable number mask

            // other options are optional with defaults below
            scale: $(element).attr("decimal-lenght"),  // digits after point, 0 for integers
            thousandsSeparator: ',',  // any single char
            padFractionalZeros: false,  // if true, then pads zeros at end to the length of scale
            normalizeZeros: false,  // appends or removes zeros at ends
            radix: '.',  // fractional delimiter
            mapToRadix: ['.'],  // symbols to process as radix

            // additional number interval options (e.g.)

        };
        const mask = IMask(element, maskOptions);
    });

    $(document).on('click', '.field-help', function () {

        var fileData = new FormData();
        fileData.append("fieldName", $(this).attr("field-name"));

        runQuery('/Head/Help', fileData, "#demo", function (result) {
            toastr.info(result.data, '', {
                rtl: true,
                positionClass: 'toast-top-full-width'
            });
        });
    });

    $(document).on('click', '.clear-all-filter', function () {
        var myForm = $(this).closest('form').get(0);
        myForm.reset();

        $(myForm).find(".select2-query").each(function () {
            $(this).empty().trigger("change");
        });

    });

});









