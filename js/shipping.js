const totalcar = document.querySelector('#totalcar');
const total = document.querySelector('#total');

async function GetlistCustomer() {
    $("#customerList").empty();
    // let fromDate = document.getElementById("FromDate").value;
    // let endDate = document.getElementById("EndDate").value;
    const response = await fetch('https://testapi.io/api/huutho/customList');
    const data = await response.json();
    var $select = $('#customerList');
    console.log(data)
    if (data == null) {
        totalcar.innerHTML = 0;
        total.innerHTML = 0;

    } else {
        $select.append($('<option />', {
            value: "",
            text: "ALL"
        }));
        $.each(data, function (i, val) {
            var x = data[i];
            $select.append($('<option />', {
                value: (x.name),
                text: (x.name)
            }));
        });
    }
}

function checkdate() {
    var d1 = document.getElementById("FromDate").value;
    var d2 = document.getElementById("EndDate").value;

    if (d1 > d2) {
        document.getElementById("EndDate").value = d1;
        document.getElementById("EndDate").min = d1;
    } else {
        document.getElementById("EndDate").min = d1;

    }
}

function Call2function() {
    checkdate();
    GetlistCustomer();
}

async function Init() {
    $("#table-body").empty();
    // let fromDate = document.getElementById("FromDate").value;
    // let endDate = document.getElementById("EndDate").value;
    try {
        var slc = document.getElementById("customerList");
        var customer = slc.options[slc.selectedIndex].value;
    } catch (err) {
        customer = "user";
    }
    const response = await fetch('https://testapi.io/api/huutho/shipping');
    const data = await response.json();
    // console.log(data.length)
    var tongsl = 0;
    var select = document.getElementById('languageSwitcher');
    var valuelg = select.options[select.selectedIndex].value;
    //    console.log(typeof data);

    var watermark = document.getElementById("watermark");


    if (data == null) {
        watermark.style.visibility = "hidden";

        totalcar.innerHTML = 0;
        total.innerHTML = 0;
        setTimeout(() => {
            alert("No data");
        }, 500);

    } else {
        watermark.style.visibility = "visible";
        for (let i in data) {
            var x = data[i];
            tongsl += parseFloat(x.priceqty);
            if (valuelg != "tw") {
                let str = x.slip_date;
                let date = new Date(str);
                let day = date.getDate();
                if (day < 10) {
                    day = "0" + day;
                }

                let month = date.getMonth() + 1;
                if (month < 10) {
                    month = "0" + month;
                }

                let year = date.getFullYear();
                let currentDate = `${day}/${month}/${year}`;
                x.slip_date = currentDate;
            }

            await createTableRow(x.slip_date, x.truck_no, x.priceqty, x.customer_name, x.slip_no, x.order_no, x.timein, x.timeout, x.seal_no);
        }

        totalcar.innerHTML = data.length;
        // total.innerHTML = tongsl.toFixed(2);
        await getPagination('#table-id');
    }
}



function createTableRow(slip_date, truck_no, priceqty, customer_name, slip_no, order_no, timein, timeout, seal_no) {
    var tr, td0, td1, td2, td3, td4, td5, td6, td7, td8, td9, attr, attr2, attr3;

    tr = document.createElement('tr'),

        td0 = document.createElement('td'),
        attr = document.createAttribute('data-i18n');
    attr.value = '[data-label]service.shipping_text8';
    attr2 = document.createAttribute('data-label');
    attr2.value = 'Slip date';
    td0.setAttributeNode(attr);
    td0.setAttributeNode(attr2);

    td1 = document.createElement('td'),
        attr = document.createAttribute('data-i18n');
    attr.value = '[data-label]service.shipping_text9';
    attr2 = document.createAttribute('data-label');
    attr2.value = 'Truck';
    attr3 = document.createAttribute('style');
    attr3.value = 'text-align: left;';
    td1.setAttributeNode(attr);
    td1.setAttributeNode(attr2);
    td1.setAttributeNode(attr3);

    td2 = document.createElement('td'),
        attr = document.createAttribute('data-i18n');
    attr.value = '[data-label]service.shipping_text10';
    attr2 = document.createAttribute('data-label');
    attr2.value = 'Shipping Quantity';
    attr3 = document.createAttribute('style');
    attr3.value = 'text-align: right;';
    td2.setAttributeNode(attr);
    td2.setAttributeNode(attr2);
    td2.setAttributeNode(attr3);

    td3 = document.createElement('td'),
        attr = document.createAttribute('data-i18n');
    attr.value = '[data-label]service.shipping_text11';
    attr2 = document.createAttribute('data-label');
    attr2.value = 'Customer name';
    attr3 = document.createAttribute('style');
    attr3.value = 'text-align: left;';
    td3.setAttributeNode(attr);
    td3.setAttributeNode(attr2);
    td3.setAttributeNode(attr3);


    td4 = document.createElement('td'),
        attr = document.createAttribute('data-i18n');
    attr.value = '[data-label]service.shipping_text12';
    attr2 = document.createAttribute('data-label');
    attr2.value = 'SLip Number';
    td4.setAttributeNode(attr);
    td4.setAttributeNode(attr2);

    td5 = document.createElement('td'),
        attr = document.createAttribute('data-i18n');
    attr.value = '[data-label]service.shipping_text13';
    attr2 = document.createAttribute('data-label');
    attr2.value = 'Order Number';
    td5.setAttributeNode(attr);
    td5.setAttributeNode(attr2);

    td6 = document.createElement('td'),
        attr = document.createAttribute('data-i18n');
    attr.value = '[data-label]service.shipping_text14';
    attr2 = document.createAttribute('data-label');
    attr2.value = 'Time in';
    td6.setAttributeNode(attr);
    td6.setAttributeNode(attr2);


    td7 = document.createElement('td'),
        attr = document.createAttribute('data-i18n');
    attr.value = '[data-label]service.shipping_text15';
    attr2 = document.createAttribute('data-label');
    attr2.value = 'Time out';
    td7.setAttributeNode(attr);
    td7.setAttributeNode(attr2);
    td8 = document.createElement('td'),
        attr = document.createAttribute('data-i18n');
    attr.value = '[data-label]service.shipping_text16';
    attr2 = document.createAttribute('data-label');
    attr2.value = 'Seal Number';
    attr3 = document.createAttribute('style');
    attr3.value = 'text-align: right;';
    td8.setAttributeNode(attr);
    td8.setAttributeNode(attr2);
    td8.setAttributeNode(attr3);

    td0.textContent = slip_date;
    td1.textContent = truck_no;
    td2.textContent = priceqty;
    td3.textContent = customer_name;
    td4.textContent = slip_no;
    td5.textContent = order_no;
    td6.textContent = timein;
    td7.textContent = timeout;
    td8.textContent = seal_no;

    tr.appendChild(td0);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(td7);
    tr.appendChild(td8);
    document.getElementById('table-body').appendChild(tr);

}

$("#languageSwitcher").change(function () {
    Init();

});

Call2function();

setTimeout(() => {
    Init();
}, 2000);

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#btn-printShipping').addEventListener('click', function () {
        function printFrame() {
            let iframe = document.getElementById('frameShipping');
            // Tạo một đường dẫn mới cho iframe
            var newSrc = iframe.src.split('?')[0] + '?' + new Date().getTime();
            iframe.src = newSrc;

            // Thêm sự kiện onload để khi iframe tải lại, các file js cũng được tải lại
            iframe.onload = function () {
                //Đánh số trang vào trang in khi in
                var iframeDocument = iframe.contentDocument;
                var iframeBody = iframeDocument.body;
                var iframeHeight = iframeBody.scrollHeight;
                // var pageHeight = 1200; // Chiều cao trang A4 tính bằng pixel
                var pageHeight = 1260; // Chiều cao trang A4 tính bằng pixel

                // Tính số trang bằng cách chia chiều cao của iframe cho chiều cao của mỗi trang
                var numPages = Math.ceil(parseInt(iframeHeight) / pageHeight);
                console.log(numPages)
                var topPosition = 98;
                //Thêm thẻ div vào mỗi trang khi in tương ứng với tổng số trang được in
                for (var i = 1; i <= numPages; i++) {
                    var pageNumberDiv = iframeDocument.createElement("div");
                    pageNumberDiv.className = 'pagenum';
                    var pageNumber = iframeDocument.createTextNode("Page " + i + " of " + numPages);
                    pageNumberDiv.style.position = "absolute";
                    iframeDocument.body.insertBefore(pageNumberDiv, iframeDocument.getElementById("content"));
                    pageNumberDiv.style.right = "0.3rem";
                    pageNumberDiv.style.top = topPosition + "%";
                    pageNumberDiv.appendChild(pageNumber);
                    topPosition += 100;
                }
                iframe.contentWindow.print();
            }
        }
        printFrame();
    });
});


// //Lấy tên user làm watermark
// const watermark = document.querySelector('#watermark');
// const watermarkParent = parent.document.querySelector('#username').textContent;
// watermark.textContent = watermarkParent;