let totalpickup = document.querySelector('#totalpickup');

async function GetlistCustomerPickup() {
    $("#customer").empty();

    var item = document.getElementById("inputItem").value;
    let slipday = document.getElementById("today").value;
    console.log(slipday);

    const response = await fetch('/api/getCustomerListbyItem?itemno=' + item + '&rgt_date=' + slipday, {
        headers: {
            'X-Requested-With': 'XMLHttpRequest'
        }
    });
    const data = await response.json();

    var $select = $('#customer');
    //        console.log(data)
    if (data == null) {
        console.log(data)

    } else {
        $.each(data.customerListbyItem, function (i, val) {
            var x = data.customerListbyItem[i];
            $select.append($('<option />', {
                value: (x.customer_name),
                text: (x.customer_name)
            }));
        });
    }
}

async function Init() {
    $("#table-body").empty();

    var checkbox = document.getElementById("showAll");
    var showDelete = false;
    if (checkbox.checked == true) {
        showDelete = true;
    }
    let fromDate = document.getElementById("FromDate").value;
    let endDate = document.getElementById("EndDate").value;

    try {
        var slc = document.getElementById("customerList");
        var customer = slc.options[slc.selectedIndex].value;
    } catch (err) {
        var customer = "user";
    }

    const response = await fetch('/api/queryPickup?fromDate=' + fromDate + '&endDate=' + endDate + '&cust=' + customer + '&showDel=' + showDelete, {
        headers: {
            'X-Requested-With': 'XMLHttpRequest'
        }
    });
    const data = await response.json();
    var select = document.getElementById('languageSwitcher');
    var valuelg = select.options[select.selectedIndex].value;
    var watermark = document.getElementById("watermark");

    if (data == null) {
        watermark.style.visibility = "hidden";
        totalpickup.innerHTML = 0;
        setTimeout(() => {
            alert("No data");
        }, 500);

    } else {
        watermark.style.visibility = "visible";
        var role = data.role;

        for (let i in data.pickups) {
            var x = data.pickups[i];
            if (valuelg != "tw") {
                let str = x.rgt_date;
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
                x.rgt_date = currentDate;
            }
            createTableRow(x.seq_no, x.rgt_date, x.truck_no, x.item_no, x.customer_name, x.enter_yn, x.out_yn, x.slip_no, x.delete_yn, role);
        }
        totalpickup.innerHTML = data.pickups.length;
        getPagination('#table-id');
    }
}

function createTableRow(seq_no, rgt_date, truck_no, item_no, customer_name, enter_yn, out_yn, slip_no, delete_yn, role) {
    var tr, td0, td1, td2, td3, td4, td5, td6, td7, td8, td9, attr, attr2, attr3;

    if (delete_yn == "Y") {
        tr = document.createElement('tr');
        attr = document.createAttribute('class');
        attr.value = 'yes-class';
        tr.setAttributeNode(attr);

        td8 = document.createElement('td'),
            attr = document.createAttribute('data-i18n');
        attr.value = '[data-label]service.shipping_text';
        attr2 = document.createAttribute('data-label');
        attr2.value = 'Action';
        attr3 = document.createAttribute('style');
        attr3.value = 'pointer-events: none';

        td8.setAttributeNode(attr);
        td8.setAttributeNode(attr2);
        td8.setAttributeNode(attr3);
        td8.appendChild(document.createElement('button')).setAttribute("class", 'btn btn-danger');

    } else {
        tr = document.createElement('tr');
        attr = document.createAttribute('class');
        attr.value = 'no-class';
        tr.setAttributeNode(attr);

        td8 = document.createElement('td'),
            attr = document.createAttribute('data-i18n');
        attr.value = '[data-label]service.shipping_text';
        attr2 = document.createAttribute('data-label');
        attr2.value = 'Action';
        td8.setAttributeNode(attr);
        td8.setAttributeNode(attr2);
        td8.appendChild(document.createElement('button')).setAttribute("class", 'btn btn-danger');
    }

    td0 = document.createElement('td'),
        attr = document.createAttribute('data-i18n');
    attr.value = '[data-label]service.shipping_text';
    attr2 = document.createAttribute('data-label');
    attr2.value = 'Id';
    td0.setAttributeNode(attr);
    td0.setAttributeNode(attr2);

    td1 = document.createElement('td'),
        attr = document.createAttribute('data-i18n');
    attr.value = '[data-label]service.shipping_text8';
    attr2 = document.createAttribute('data-label');
    attr2.value = 'Date';
    td1.setAttributeNode(attr);
    td1.setAttributeNode(attr2);

    td2 = document.createElement('td'),
        attr = document.createAttribute('data-i18n');
    attr.value = '[data-label]service.shipping_text9';
    attr2 = document.createAttribute('data-label');
    attr2.value = 'Truck';
    attr3 = document.createAttribute('style');
    attr3.value = 'text-align: left;';
    td2.setAttributeNode(attr);
    td2.setAttributeNode(attr2);
    td2.setAttributeNode(attr3);

    td3 = document.createElement('td'),
        attr = document.createAttribute('data-i18n');
    attr.value = '[data-label]service.shipping_text10';
    attr2 = document.createAttribute('data-label');
    attr2.value = 'Type Product	';
    td3.setAttributeNode(attr);
    td3.setAttributeNode(attr2);

    td4 = document.createElement('td'),
        attr = document.createAttribute('data-i18n');
    attr.value = '[data-label]service.shipping_text11';
    attr2 = document.createAttribute('data-label');
    attr2.value = 'Station';
    attr3 = document.createAttribute('style');
    attr3.value = 'text-align: left;';
    td4.setAttributeNode(attr);
    td4.setAttributeNode(attr2);
    td4.setAttributeNode(attr3);

    td5 = document.createElement('td'),
        attr = document.createAttribute('data-i18n');
    attr.value = '[data-label]service.shipping_text12';
    attr2 = document.createAttribute('data-label');
    attr2.value = 'In';
    td5.setAttributeNode(attr);
    td5.setAttributeNode(attr2);

    td6 = document.createElement('td'),
        attr = document.createAttribute('data-i18n');
    attr.value = '[data-label]service.shipping_text13';
    attr2 = document.createAttribute('data-label');
    attr2.value = 'Out';
    td6.setAttributeNode(attr);
    td6.setAttributeNode(attr2);

    td7 = document.createElement('td'),
        attr = document.createAttribute('data-i18n');
    attr.value = '[data-label]service.shipping_text15';
    attr2 = document.createAttribute('data-label');
    attr2.value = 'Slip Number';
    td7.setAttributeNode(attr);
    td7.setAttributeNode(attr2);

    td9 = document.createElement('td'),
        td0.textContent = seq_no;
    td1.textContent = rgt_date;
    td2.textContent = truck_no;
    td3.textContent = item_no;
    td4.textContent = customer_name;
    td5.textContent = enter_yn;
    td6.textContent = out_yn;
    td7.textContent = slip_no;
    td8.firstElementChild.textContent = "X"

    tr.appendChild(td0);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(td7);

    if (role != "CHC") {
        tr.appendChild(td8);
    } else {
        tr.appendChild(td9);
    }

    document.getElementById('table-body').appendChild(tr);

    $(td8).click(function () {
        seq_no = $(this).parents('tr').find("td:eq(0)").text();
        rgt_date = $(this).parents('tr').find("td:eq(1)").text();

        const textEr1 = document.getElementById("textEr1").innerHTML;
        const textEr2 = document.getElementById("textEr2").innerHTML;
        const textEr3 = document.getElementById("textEr3").innerHTML;
        const tittle1 = document.getElementById("tittle1").innerHTML;


        fetch('/api/checkBeforeDelete?seq_no=' + seq_no + '&rgt_date=' + rgt_date, {
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        }).then(response => response.text()).then(data => {
            if (data != "OK") {
                switch (data) {
                    case "Date":
                        swal(`${textEr1}`, {
                            title: `${tittle1}`,
                            icon: "warning"
                        });
                        break;
                    case "InOut":
                        swal(`${textEr2}`, {
                            title: `${tittle1}`,
                            icon: "warning"
                        });
                        break;
                    case "Slip":
                        swal(`${textEr3}`, {
                            title: `${tittle1}`,
                            icon: "warning"
                        });
                        break;
                }
            } else {
                deletePickup(seq_no, rgt_date);
            }
        });
    });

}


$("#languageSwitcher").change(function () {
    Init();
});

GetlistCustomerPickup();

setTimeout(() => {
    Init();
}, 1000);

function checkBeforeCreate() {
    var url = "/checkbeforecreate";
    var today = document.getElementById("today").value;
    var inputItem = document.getElementById("inputItem").value;
    var inputTruck = document.getElementById("inputTruck").value;
    var inputCustomer = document.getElementById("customer").value;



    const textEr4 = document.getElementById("textEr4").innerHTML;
    const tittle2 = document.getElementById("tittle2").innerHTML;
    const textEr5 = document.getElementById("textEr5").innerHTML;
    const tittle3 = document.getElementById("tittle3").innerHTML;
    const tittle4 = document.getElementById("tittle4").innerHTML;
    const textEr6 = document.getElementById("textEr6").innerHTML;



    if (inputTruck == "" || inputTruck == null || inputTruck.length < 8) {
        swal(`${textEr4}`, { //Số xe bị trống hoặc không đúng!
            icon: "error",
            title: `${tittle2}`, //Nhập lỗi
        });
    } else {
        fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    "today": today,
                    "truck_no": inputTruck,
                    "item_no": inputItem,
                    "customer": inputCustomer,
                }),
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                }
            })
            .then(response => response.json())
            .then(json => {
                if (json >= 1) {
                    swal({
                            title: `${tittle3}`, //Dữ liệu bị trùng?
                            text: `${textEr5}`, //Đơn này đã tồn tại, bạn có muốn tiếp tục không?
                            icon: "warning",
                            buttons: true,
                            dangerMode: true,
                        })
                        .then((willDelete) => {
                            if (willDelete) {
                                swal({
                                    title: `${tittle4}`, //Đang thực thi...
                                });
                                url = "/ES0001";
                                document.getElementById("pickupForm").submit();
                            } else {
                                swal(`${textEr6}`); //Đã hủy thao tác.
                            }
                        });
                } else {
                    swal({
                        title: `${tittle4}`, //Đang thực thi...
                    });
                    url = "/ES0001";
                    document.getElementById("pickupForm").submit();
                }
            });
    }

}

function checkbox() {
    var elements = document.getElementsByClassName('yes-class');
    if (document.getElementById("showAll").checked) {
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.display = "";
        }
    } else {
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.display = "none";
        }
    }
}

function deletePickup(seq_no, rgt_date) {

    const textEr7_1 = document.getElementById("textEr7_1").innerHTML;
    const textEr7_2 = document.getElementById("textEr7_2").innerHTML;
    const textEr7_3 = document.getElementById("textEr7_3").innerHTML;
    const tittle5 = document.getElementById("tittle5").innerHTML;
    const textEr8 = document.getElementById("textEr8").innerHTML;
    const textEr9 = document.getElementById("textEr9").innerHTML;
    const textEr10 = document.getElementById("textEr10").innerHTML;

    //    let msg = "Bạn có muốn hủy đơn số " + seq_no + " của ngày " + rgt_date + " không?";
    let msg = textEr7_1 + seq_no + textEr7_2 + rgt_date + textEr7_3;

    swal({
            title: `${tittle5}`, // "Bạn có chắc?"
            text: msg,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                const requestOptions = {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "seq_no": seq_no,
                        "rgt_date": rgt_date
                    })
                };
                fetch('/deletePickup', requestOptions)
                    .then(response => response.json())
                    .then(data => {
                        if (data == 1) {
                            swal(`${textEr8}`, { //"Đã hủy thành công!"
                                icon: "success",
                            });
                            Init();
                        } else {
                            swal(`${textEr9}`, { //"Failed"
                                icon: "error",
                            });
                        }
                    });
            } else {
                swal(`${textEr10}`); //"Ngưng tác vụ."
            }
        });
}

// <!-- JS get date input-->
const getDatePickerTitle = elem => {
    // From the label or the aria-label
    const label = elem.nextElementSibling;
    let titleText = '';
    if (label && label.tagName === 'LABEL') {
        titleText = label.textContent;
    } else {
        titleText = elem.getAttribute('aria-label') || '';
    }
    return titleText;
}
const elems = document.querySelectorAll('.datepicker_input');
for (const elem of elems) {
    const datepicker = new Datepicker(elem, {
        'format': 'yyyy/mm/dd', // UK format
        minDate: new Date(),
        title: getDatePickerTitle(elem)
    });
}


document.addEventListener('DOMContentLoaded', function () {
	document.querySelector('#btn-printPickup').addEventListener('click', function () {

		function printFrame() {
         let iframe  = document.getElementById('framePickup');
         // Tạo một đường dẫn mới cho iframe
         var newSrc = iframe .src.split('?')[0] + '?' + new Date().getTime();
         iframe.src = newSrc;

         // Thêm sự kiện onload để khi iframe tải lại, các file js cũng được tải lại
          		// Thêm sự kiện onload vào iframe
         iframe.onload = function () {
          			 iframe.contentWindow.print();
          		};
       }
       printFrame();

	});
});

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#btn-printPickup').addEventListener('click', function () {
        function printFrame() {
            let iframe = document.getElementById('framePickup');
            // Tạo một đường dẫn mới cho iframe
            var newSrc = iframe.src.split('?')[0] + '?' + new Date().getTime();
            iframe.src = newSrc;
            // Thêm sự kiện onload để khi iframe tải lại, các file js cũng được tải lại
            iframe.onload = function () {

                               //Đánh số trang vào trang in khi in
                               var iframeDocument = iframe.contentDocument;
                               var iframeBody = iframeDocument.body;
                               var iframeHeight = iframeBody.scrollHeight;
                               var pageHeight = 1200; // Chiều cao trang A4 tính bằng pixel
                               // Tính số trang bằng cách chia chiều cao của iframe cho chiều cao của mỗi trang
                               var numPages = Math.ceil(parseInt(iframeHeight) / pageHeight);
                               var topPosition = 2;
                               //Thêm thẻ div vào mỗi trang khi in tương ứng với tổng số trang được in
                               for (var i = 1; i <= numPages; i++) {
                                   var pageNumberDiv = iframeDocument.createElement("div");
                                   pageNumberDiv.className = 'pagenum';
                                   var pageNumber = iframeDocument.createTextNode("Page " + i + " of " + numPages);
                                   pageNumberDiv.style.position = "absolute";
                                   iframeDocument.body.insertBefore(pageNumberDiv, iframeDocument.getElementById("content"));
                                   pageNumberDiv.style.right = "1.3rem";
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
const watermark = document.querySelector('#watermark');
const watermarkParent = parent.document.querySelector('#username').textContent;
watermark.textContent = watermarkParent;