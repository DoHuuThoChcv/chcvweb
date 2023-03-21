// Lấy nội dung từ file header.html
fetch('header.html')
  .then(response => response.text())
  .then(html => {
    // Chèn nội dung vào thẻ header của trang web hiện tại
    const header = document.querySelector('#navigater-header');
    header.innerHTML = html;
  });

  // Lấy nội dung từ file header.html
fetch('slider.html')
.then(response => response.text())
.then(html => {
  // Chèn nội dung vào thẻ header của trang web hiện tại
  const slider = document.querySelector('#slider');
  slider.innerHTML = html;
});


// Lấy nội dung từ file footer.html
fetch('footer.html')
  .then(response => response.text())
  .then(html => {
    // Chèn nội dung vào thẻ header của trang web hiện tại
    const footer = document.querySelector('footer');
    footer.innerHTML = html;
  });

// Lấy nội dung từ file modal.html
fetch('modal.html')
  .then(response => response.text())
  .then(html => {
    // Chèn nội dung vào thẻ header của trang web hiện tại
    const modal = document.querySelector('#modal');
    modal.innerHTML = html;
  });
