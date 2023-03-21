// <!-- JS of scroll top button and end button -->
//Get the button
let mybuttonTop = document.getElementById("btn-back-to-top");
let mybuttonEnd = document.getElementById("btn-back-to-end");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybuttonTop.style.display = "block";
    } else {
        mybuttonTop.style.display = "none";
    }

}
// When the user clicks on the button, scroll to the top of the document
mybuttonTop.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

mybuttonEnd.addEventListener("click", backToEnd);

function backToEnd() {
    document.body.scrollTop = 60000;
    document.documentElement.scrollTop = 60000;
}


// <!-- JS of scroll animation -->

const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");
const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -250px 0px"
};

const appearOnScroll = new IntersectionObserver(function (
        entries,
        appearOnScroll
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add("appear");
                appearOnScroll.unobserve(entry.target);
            }
        });
    },
    appearOptions);

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// <!-- JS when reload page change icon  and JS show username in top-nav and expired login -->
window.onload = function (e) {
    // JS when reload page change icon
    const chosenLng = $('#languageSwitcher').find("option:selected").attr('value');
    if (chosenLng == "en") {
        $('#flagicon').attr('class', 'flag-icon flag-icon-usa');
    } else if (chosenLng == "vn") {
        $('#flagicon').attr('class', 'flag-icon flag-icon-vnm');
    } else {
        $('#flagicon').attr('class', 'flag-icon flag-icon-twn');
    }
    // JS show username in top-nav 
    const name = localStorage.getItem("id");
    if (name != null) {
        document.getElementById("user").innerHTML = "<i class='bx bx-user'></i>" + name;
        document.getElementById("user").href = "#";
        document.getElementById("user").style.backgroundColor = "#af2532";
        document.getElementById("user").style.width = "auto";
        document.getElementById("Logout").style.display = "inline-flex";
        document.getElementById("service").style.display = "flex";
    } else {

    }

    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        emailjs.init('vS1KP0izLXZveUeGv');
        // these IDs from the previous steps
        emailjs.sendForm('service_p57rhfy', 'template_2ms12f7', this)
            .then(function () {
                console.log('SUCCESS!');
                alert("You send email sucess")
            }, function (error) {
                console.log('FAILED...', error);
            });
        // document.getElementById('contact-form').reset();
        setTimeout(() => {
            document.location.reload();
        }, 2000);
    });
};


// // <!-- JS Send Email -->
// (function () {
    
// })();

// document.getElementById('contact-form').addEventListener('submit', function (event) {
//     event.preventDefault();
//     emailjs.init('qtYGP9YTCKnSRtsha');
//     // these IDs from the previous steps
//     emailjs.sendForm('service_p57rhfy', 'template_mxkl5ws', this)
//         .then(function () {
//             console.log('SUCCESS!');
//             alert("You send email sucess")
//         }, function (error) {
//             console.log('FAILED...', error);
//         });
//     // document.getElementById('contact-form').reset();
//     setTimeout(() => {
//         document.location.reload();
//     }, 2000);

// });


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
        'format': 'dd/mm/yyyy', // UK format
        minDate: new Date(),
        title: getDatePickerTitle(elem)
    });
}

// JS prevent mouse clik right

// document.addEventListener("contextmenu", function (e) {
//     e.preventDefault();
// }, false);

//JS prevent F12

// $(document).keydown(function (event) {
//     if (event.keyCode == 123) { // Prevent F12
//         return false;
//     } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I
//         return false;
//     }
// });

