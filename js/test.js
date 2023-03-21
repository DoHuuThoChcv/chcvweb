// // Tìm đến bảng trong iframe
// const iframeTable = document.querySelector('#table-id-frame');

// // Lấy dữ liệu từ bảng trên trang HTML chứa iframe và thêm vào bảng trong iframe
// const myTable = parent.document.querySelector('#table-id');
// const myTableHeader = myTable.querySelector('thead');
// const myTableBody = myTable.querySelector('tbody');
// const iframeTableHeader = iframeTable.querySelector('thead');
// const iframeTableBody = iframeTable.querySelector('tbody');

// // Thêm tiêu đề bảng
// iframeTableHeader.innerHTML = myTableHeader.innerHTML;

// // Thêm dữ liệu từ tbody vào tbody của bảng trong iframe
// myTableBody.querySelectorAll('tr').forEach(function (row) {
//     const newRow = document.createElement('tr');
//     row.querySelectorAll('td').forEach(function (cell) {
//         const newCell = document.createElement('td');
//         newCell.textContent = cell.textContent;
//         newRow.appendChild(newCell);
//     });
//     iframeTableBody.appendChild(newRow);
// });
// // Lấy ngày in đơn
// function GetTime() {
//     let now = new Date();
//     let year = now.getFullYear();
//     let month = (now.getMonth() + 1).toString().padStart(2, '0');
//     let day = now.getDate().toString().padStart(2, '0');
//     let hour = now.getHours().toString().padStart(2, '0');
//     let minute = now.getMinutes().toString().padStart(2, '0');
//     let second = now.getSeconds().toString().padStart(2, '0');

//     let formattedDateTime = `${year}-${month}-${day} ${hour}:${minute}:${second}`;
//     document.getElementById('datetime').innerHTML = formattedDateTime;
// }
// GetTime();


// //Lấy tên user in đơn
// var name = sessionStorage.getItem('username');
// let watermark = document.querySelector('.watermark');
// watermark.innerHTML = name;