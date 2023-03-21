const form = document.querySelector("form");
eField = form.querySelector(".email"),
  eInput = eField.querySelector("input"),
  pField = form.querySelector(".password"),
  pInput = pField.querySelector("input");
cField = form.querySelector(".captcha"),
  cInput = cField.querySelector("input");

let captchaValue = "";

//Js create Captcha
(function () {
  const fonts = ["cursive", "sans-serif", "serif", "monospace", "fangsong", "fantasy"];

  function generateCaptcha() {
    let value = btoa(Math.random() * 10000);
    value = value.substring(0, 5 + Math.random() * 2);
    captchaValue = value;
  }

  function setCaptcha() {
    let html = captchaValue.split("").map((char) => {
      const rotate = -20 + Math.trunc(Math.random() * 30);
      const font = Math.trunc(Math.random() * fonts.length);
      return `<span 
      style="
        transform:rotate(${rotate}deg);
        font-family:${fonts[font]}"
      >${char}</span>`;
    }).join("");
    document.querySelector(".preview").innerHTML = html;
  }

  function initCaptcha() {
    document.querySelector("#btn-captcha").addEventListener("click", function () {
      generateCaptcha();
      setCaptcha();
    });
    generateCaptcha();
    setCaptcha();
  }
  initCaptcha();
})();

function checkLogin() {
  // e.preventDefault(); //preventing from form submitting
  //if email and password is blank then add shake class in it else call specified function
  // (eInput.value == "") ? eField.classList.add("shake", "error"): checkUsername();
  // (pInput.value == "") ? pField.classList.add("shake", "error"): checkPassword();
  // (cInput.value == "") ? cField.classList.add("shake", "error"): checkCaptcha();


  // setTimeout(() => { //remove shake class after 500ms
  //   eField.classList.remove("shake");
  //   pField.classList.remove("shake");
  //   cField.classList.remove("shake");
  // }, 500);

  //calling checkEmail function on email input keyup
  eInput.onkeyup = () => {
    checkEmail();
  }
  //calling checkPassword function on pass input keyup
  pInput.onkeyup = () => {
    checkPass();
  }

  cInput.onkeyup = () => {
    checkCapt();
  }

  function checkEmail() {
    if (eInput.value == "") { //if username is empty then add error and remove valid class
      eField.classList.add("error");
      eField.classList.remove("error2");
      eField.classList.remove("valid");
    } else { //if username is empty then remove error and add valid class
      eField.classList.remove("error");
      eField.classList.add("valid");
    }
  }

  function checkPass() { //checkPass function
    if (pInput.value == "") { //if pass is empty then add error and remove valid class
      pField.classList.add("error");
      pField.classList.remove("error2");

      pField.classList.remove("valid");
      
    } else { //if pass is empty then remove error and add valid class
      pField.classList.remove("error");
      pField.classList.add("valid");

    }
  }

  function checkCapt() {
    // let inputCaptchaValue = document.querySelector("#captcha-input").value;

    // if (inputCaptchaValue != captchaValue) {
    //   cField.classList.add("error");
    //   cField.classList.remove("valid");
    //   let errorTxt = cField.querySelector(".error-txt");
    //   (cInput.value != "") ? errorTxt.innerText = "Captcha isn't corect": errorTxt.innerText = "Captcha can't be blank";
    // } else {
    //   cField.classList.remove("error");
    //   cField.classList.add("valid");
    // }
    if (cInput.value == "") { //if pass is empty then add error and remove valid class
      cField.classList.add("error");
      cField.classList.remove("error2");

      cField.classList.remove("valid");
    } else { //if pass is empty then remove error and add valid class
      cField.classList.remove("error");
      cField.classList.add("valid");

    }
  }

  const alertSucsess = document.querySelector('#alertSucsess');
  const alertFaild = document.querySelector('#alertFaild');
  let inputCaptchaValue = document.querySelector("#captcha-input").value;

  if ((eInput.value != "chcvsale")) {
    // alert("usename sai")
    alertFaild.classList.add("show");
    alertFaild.classList.remove("hide");
    alertFaild.classList.add("showAlert");
    setTimeout(function () {
      alertFaild.classList.remove("show");
      alertFaild.classList.add("hide");
    }, 5000);
  } else if ((pInput.value != "chcvsale")) {
    // alert("password sai")
    alertFaild.classList.add("show");
    alertFaild.classList.remove("hide");
    alertFaild.classList.add("showAlert");
    setTimeout(function () {
      alertFaild.classList.remove("show");
      alertFaild.classList.add("hide");
    }, 5000);

  } else if ((cInput.value != captchaValue)) {
    // alert("captcha sai")
    alertFaild.classList.add("show");
    alertFaild.classList.remove("hide");
    alertFaild.classList.add("showAlert");
    setTimeout(function () {
      alertFaild.classList.remove("show");
      alertFaild.classList.add("hide");
    }, 5000);
  } else {
    alertSucsess.classList.add("show");
    alertSucsess.classList.remove("hide");
    alertSucsess.classList.add("showAlert");
    setTimeout(function () {
      alertSucsess.classList.remove("show");
      alertSucsess.classList.add("hide");
    }, 300);
    // window.location.href = form.getAttribute("action");
    setTimeout(function () {
      var userID = document.getElementById("email").value;
      localStorage.setItem("id", userID);
      window.location.href = "index.html";
    }, 1000);
  }
  

  if (eInput.value == "") {
    eField.classList.add("error");
    eField.classList.remove("valid");
    eField.classList.add("shake")
  } 

  if (pInput.value == "") {
    pField.classList.add("error");
    pField.classList.remove("valid");
    pField.classList.add("shake")
  } 

  // if (cInput.value == "") {
  //   cField.classList.add("error");
  //   cField.classList.remove("valid");
    
  //   cField.classList.add("shake")
  // }


  function checkUsername() {
    if (eInput.value == "") {
      eField.classList.add("error");
      eField.classList.remove("valid");
      eField.classList.remove("error2");
      eField.classList.add("shake")
    } else {
      eField.classList.add("error2");
      eField.classList.remove("valid");
      eField.classList.remove("error");
      eField.classList.add("shake")
      eField.value="";

    }
  }

  function checkPassword() {
    if (pInput.value == "") {
      pField.classList.add("error");
      pField.classList.remove("valid");
      pField.classList.remove("error2");
      pField.classList.add("shake")
    } else {
      pField.classList.add("error2");
      pField.classList.remove("valid");
      pField.classList.remove("error");
      pField.classList.add("shake")
    }
  }

  var btncaptcha = document.getElementById("btn-captcha");

  function checkCaptcha() {
    if (cInput.value == "") {
      cField.classList.add("error");
      cField.classList.remove("valid");
      cField.classList.remove("error2");
      cField.classList.add("shake")
    } else {
      cField.classList.add("error2");
      cField.classList.remove("valid");
      cField.classList.remove("error");
      cField.classList.add("shake")
      btncaptcha.click();
    }
  }

  setTimeout(() => {
    eField.classList.remove("shake");
    pField.classList.remove("shake");
    cField.classList.remove("shake");
  }, 500);

  let msg = 1;
  switch (msg) {
    case 1:
      checkUsername();
      break;
    case 2:
      checkPassword();
      break;
    case 3:
      checkCaptcha();
      break;
    case 4:
      // alert("Tài khoản đã bị khóa")
      break;
    case 5:
      // code block
      break;
    default:
      // code block
  }

}

//js show or hide password
const togglePassword = document.querySelector('#eye');
const password = document.querySelector('#pwd');

togglePassword.addEventListener('click', function (e) {
  // toggle the type attribute
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  // toggle the eye slash icon
  if (togglePassword.getAttribute('class') === "far fa-eye") {
    togglePassword.classList.remove('fa-eye')
    togglePassword.classList.add('fa-eye-slash');

  } else {
    togglePassword.classList.remove('fa-eye-slash');
    togglePassword.classList.add('fa-eye');
  }

});