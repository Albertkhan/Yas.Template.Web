$(".select2-query-modal").each(function () {
    $(this).select2({
        ajax: {
            delay: 250,
            url: $(this).attr("select2-action-url"),
            data: function (params) {
                return {
                    q: params.term,
                    param1: $($(this).attr("select2-param1")).val(),
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
        dropdownParent: $($(this).attr("select2-modal")),
        placeholder: $(this).attr("select2-title")
    });
});

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

$(".select2-list-modal").each(function () {
    $(this).select2({
        dropdownParent: $($(this).attr("select2-modal")),
    });
});

