

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

});









