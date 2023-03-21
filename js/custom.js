document.addEventListener('DOMContentLoaded', function () {

	document.querySelector('#btn-print').addEventListener('click', function () {
		// window.print();
		let wspFrame = document.getElementById('frame').contentWindow;
		// Thêm sự kiện onload vào iframe
		wspFrame.onload = function () {
			// Lấy ra tất cả các phần tử trong iframe
			var elements = wspFrame.document.querySelectorAll('body *');

			// Thêm lớp watermark vào các phần tử
			for (var i = 0; i < elements.length; i++) {
				elements[i].classList.add('watermark');
			}

			// In iframe
			// iframe.print();
		};

		
		wspFrame.focus();
		wspFrame.print();
	});

});