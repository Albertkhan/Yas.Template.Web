function calcTcpbs() {

    var consfee = $("#consfee").val().replace(/,/g, "");
    var spro = $("#spro").val().replace(/,/g, "");
    var bros = $("#bros").val().replace(/,/g, "");
    var inp = $("#inp").val();

    var total = parseFloat(consfee) + parseFloat(spro) + parseFloat(bros);
    var vam = Math.trunc((total * 9) / 100);

    $("#tcpbs").val(total);


    if (inp == 3) {
        $("#vam").val(vam);
    }
}


$(document).on('change', '#consfee,#spro,#bros', function () {
    calcTcpbs();
});


function calculate() {

    var am = $("#am").val().replace(/,/g, "");
    var inp = $("#inp").val();
    var fee = $("#fee").val().replace(/,/g, "");
    var dis = $("#dis").val().replace(/,/g, "");
    var odam = $("#odam").val().replace(/,/g, "");
    var olam = $("#olam").val().replace(/,/g, "");
    var ssrv = $("#ssrv").val().replace(/,/g, "");
    var tcpbs = $("#tcpbs").val().replace(/,/g, "");
    //var pspd = $("#pspd").val().replace(/,/g, "");
    var cfee = $("#cfee").val().replace(/,/g, "");
    var exr = $("#exr").val().replace(/,/g, "");
    var vra = $("#vra").val().replace(/,/g, "");

    if (dis == '') {
        dis = 0;
    }

    if (odam == '') {
        odam = 0;
    }

    if (olam == '') {
        olam = 0;
    }

    if (ssrv == '') {
        ssrv = 0;
    }

    if (tcpbs == '') {
        tcpbs = 0;
    }

    //if (pspd == '') {
    //    pspd = 0;
    //}

    if (cfee == '')
    {
        cfee = 0;
    }

    if (vra == '') {
        vra = 0;
    }

    if (exr == '') {
        exr = 0;
    }

    var prdis = Math.trunc(am * fee);

    if (inp == 2) {
        prdis = cfee * exr;
    }

    var adis = prdis - dis;
  
    if (inp == 3) {
        adis = parseFloat(prdis) + parseFloat(tcpbs) - parseFloat(dis);
    }
    else if (inp == 2) {
        adis = (parseFloat(pspd) * parseFloat(cfee)) - parseFloat(dis);
    }

    if (adis < 0) {

        $("#dis").val(0);

        return toastr.error("مبلغ تخفیف معتبر نیست", '', {
            rtl: true,
            positionClass: 'toast-top-full-width'
        });
    }

  
   
    var vam = Math.trunc(adis * (vra / 100));

    if (inp == 3) {
        vam = Math.trunc((tcpbs * 10) / 100) + Math.trunc((prdis * vra) / 100);
    }

    var tsstam = Math.trunc(adis + vam + parseFloat(odam) + parseFloat(olam));

    if (inp == 7) {
        tsstam = Math.trunc(parseFloat(ssrv) + vam + parseFloat(odam) + parseFloat(olam));
    }

    if (inp == 2) // فروش ارز
    {
        tsstam = Math.trunc(prdis + vam + parseFloat(odam) + parseFloat(olam)); // مبلغ کل کالا و خدمت
    }

    $("#prdis").val(prdis);
    $("#adis").val(adis);

    

    if (inp == 3) {
        calcTcpbs();
    }
    else {
        $("#vam").val(vam);
    }

 
    $("#tsstam").val(tsstam);

}

$(".calculate").change(function () {
    calculate();
});


$("#productId").change(function () {

    var customerId = $("#productId").val();

    if (customerId != null) {
        var fileData = new FormData();
        fileData.append("id", $("#productId").val());

        runQuery('/Product/Get', fileData, "#button", function (result) {

            $("#sstid").val(result.data.productNumber);
            $("#sstt").val(result.data.productName);
            $("#mu").val(result.data.unitName);
            $("#vra").val(result.data.taxValue);
        });
    }
    else {
        $("#sstid").val(null);
        $("#sstt").val(null);
        $("#mu").val(null);
        $("#vra").val(null);
    }
});

function getBodyInformation(BodyInformationRecordId) {

    var fileData = new FormData();
    fileData.append("id", BodyInformationRecordId);

    runQuery('/Body/Get', fileData, "#button", function (result) {
        var keys = Object.keys(result.data);

        for (let i = 0; i < keys.length; i++) {
            var key = keys[i];
            var value = result.data[key];
            $("#" + key).val(value);

        }

        if (result.data.productId != null) {
            var product = new Option(result.data.productName, result.data.productId, true, true);
            $("#productId").append(product);
            console.log(product);
        }

    });
}

$("#formBodyInformation").submit(function (e) {

    e.preventDefault();

    var fileData = new FormData(this);

    var requestUrl = '';
    if (BodyInformationRecordId == '') {
        requestUrl = '/Body/Create';
        fileData.append("HeadId", HeadInformationRecordId);
    }
    else {
        requestUrl = '/Body/Update';
        fileData.append("id", BodyInformationRecordId);
        fileData.append("headid", HeadInformationRecordId);
    }

    runQuery(requestUrl, fileData, "#buttonBodyInformationReg", function (result) {

        $("#" + BodyInformationModal).modal('hide');

        if (BodyInformationReload == 'true') {
            if (BodyInformationRecordId == '') {
                tableBodyIndex.ajax.reload();
            }
            else {
                tableBodyIndex.ajax.reload(null, false);
            }
        }

        refreshCalculate(HeadInformationRecordId);

        toastr.success(result.message, '', {
            rtl: true,
            positionClass: 'toast-top-full-width'
        });
    });
});



$(document).ready(function () {

    if (BodyInformationRecordId != '') {
        getBodyInformation(BodyInformationRecordId);
    }

});