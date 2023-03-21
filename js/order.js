const totalorder = document.querySelector('#totalorder');
const totaldh = document.querySelector('#totaldh');
const totalcl = document.querySelector('#totalcl');

async function GetlistCustomer() {
    $("#customerList").empty();
    let fromDate = document.getElementById("FromDate").value;
    let endDate = document.getElementById("EndDate").value;
    const response = await fetch('https://testapi.io/api/huutho/customList');
    const data = await response.json();
    var $select = $('#customerList');

    if (data == null) {} else {
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

    const response = await fetch('https://testapi.io/api/huutho/orders');
    const data = await response.json();
    // console.log(data)
    // var tongdh = 0;
    // var tongcl = 0;
    // var select = document.getElementById('languageSwitcher');
    // var valuelg = select.options[select.selectedIndex].value;
    // var watermark = document.getElementById("watermark");


    if (data == null) {
        // watermark.style.visibility = "hidden";
        // totalorder.innerHTML = 0;
        // totaldh.innerHTML = 0;
        // totalcl.innerHTML = 0;
        setTimeout(() => {
            alert("No data");
        }, 500);

    } else {
        // watermark.style.visibility = "visible";
        for (let i in data) {
            var x = data[i];
            // tongdh += parseFloat(x.priceqty);
            // tongcl += parseFloat(x.rest_qty);
            // if (valuelg != "tw") {
            //     let str1 = x.from_date;
            //     let str2 = x.end_date;

            //     let date1 = new Date(str1);
            //     let date2 = new Date(str2);
            //     let day1 = date1.getDate();
            //     let day2 = date2.getDate();
            //     if (day1 < 10) {
            //         day1 = "0" + day1;
            //     }
            //     if (day2 < 10) {
            //         day2 = "0" + day2;
            //     }

            //     let month1 = date1.getMonth() + 1;
            //     let month2 = date2.getMonth() + 1;

            //     if (month1 < 10) {
            //         month1 = "0" + month1;
            //     }
            //     if (month2 < 10) {
            //         month2 = "0" + month2;
            //     }

            //     let year1 = date1.getFullYear();
            //     let year2 = date2.getFullYear();
            //     let currentDate1 = `${day1}/${month1}/${year1}`;
            //     let currentDate2 = `${day2}/${month2}/${year2}`;
            //     x.from_date = currentDate1;
            //     x.end_date = currentDate2;

            // }
            createTableRow(x.customer_name, x.order_no, x.priceqty, x.rest_qty, x.from_date, x.end_date);
        }
        // totalorder.innerHTML = data.orders.length;
        // totaldh.innerHTML = tongdh.toFixed(2);
        // totalcl.innerHTML = tongcl.toFixed(2);
        getPagination('#table-id');
    }
}

function createTableRow(customer_name, order_no, priceqty, rest_qty, from_date, end_date) {
    var tr, td0, td1, td2, td3, td4, td5, attr, attr2, attr3;

    tr = document.createElement('tr'),

        td0 = document.createElement('td'),
        attr = document.createAttribute('data-i18n');
    attr.value = '[data-label]service.order_text8';
    attr2 = document.createAttribute('data-label');
    attr2.value = 'Customer';
    attr3 = document.createAttribute('style');
    attr3.value = 'text-align: left;';
    td0.setAttributeNode(attr);
    td0.setAttributeNode(attr2);
    td0.setAttributeNode(attr3);


    td1 = document.createElement('td'),
        attr = document.createAttribute('data-i18n');
    attr.value = '[data-label]service.order_text9';
    attr2 = document.createAttribute('data-label');
    attr2.value = 'Order Number';
    td1.setAttributeNode(attr);
    td1.setAttributeNode(attr2);


    td2 = document.createElement('td'),
        attr = document.createAttribute('data-i18n');
    attr.value = '[data-label]service.order_text10';
    attr2 = document.createAttribute('data-label');
    attr2.value = 'Order Quantity(MT)';
    attr3 = document.createAttribute('style');
    attr3.value = 'text-align: right;';
    td2.setAttributeNode(attr);
    td2.setAttributeNode(attr2);
    td2.setAttributeNode(attr3);

    td3 = document.createElement('td'),
        attr = document.createAttribute('data-i18n');
    attr.value = '[data-label]service.order_text11';
    attr2 = document.createAttribute('data-label');
    attr2.value = 'Rest Quantity(MT)';
    attr3 = document.createAttribute('style');
    attr3.value = 'text-align: right;';
    td3.setAttributeNode(attr);
    td3.setAttributeNode(attr2);
    td3.setAttributeNode(attr3);

    td4 = document.createElement('td'),
        attr = document.createAttribute('data-i18n');
    attr.value = '[data-label]service.order_text12';
    attr2 = document.createAttribute('data-label');
    attr2.value = 'From Date';
    td4.setAttributeNode(attr);
    td4.setAttributeNode(attr2);

    td5 = document.createElement('td'),
        attr = document.createAttribute('data-i18n');
    attr.value = '[data-label]service.order_text13';
    attr2 = document.createAttribute('data-label');
    attr2.value = 'End Date';
    td5.setAttributeNode(attr);
    td5.setAttributeNode(attr2);

    td0.textContent = customer_name;
    td1.textContent = order_no;
    td2.textContent = priceqty;
    td3.textContent = rest_qty;
    td4.textContent = from_date;
    td5.textContent = end_date;

    tr.appendChild(td0);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);

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
    document.querySelector('#btn-printOrder').addEventListener('click', function () {
        function printFrame() {
            let iframe = document.getElementById('frameOrder');
            // Tạo một đường dẫn mới cho iframe
            var newSrc = iframe.src.split('?')[0] + '?' + new Date().getTime();
            iframe.src = newSrc;

            // Thêm sự kiện onload để khi iframe tải lại, các file js cũng được tải lại
            iframe.onload = function () {
                //Đánh số trang vào trang in khi in
                var iframeDocument = iframe.contentDocument;
                var iframeBody = iframeDocument.body;
                var iframeHeight = iframeBody.scrollHeight;
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

//Lấy tên user làm watermark
// const watermark = document.querySelector('#watermark');
// const watermarkParent = parent.document.querySelector('#username').textContent;
// watermark.textContent = watermarkParent;