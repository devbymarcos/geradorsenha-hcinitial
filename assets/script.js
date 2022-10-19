const inputPassword = document.getElementById("inputPassword");
const inputNumber = document.getElementById("inputNumber");
const btnUp = document.getElementById("btnUp");
const btnDown = document.getElementById("btnDown");

const btnThemeMode = document.querySelector(".btn-theme-mode");
const iconThemeMode = document.getElementById("iconTheme");
const tagHtml = document.querySelector("html");

const btnCreatePasswd = document.getElementById("gerarSenha");
const btnCopy = document.getElementById("copy");

const defaultNumber = 8;
const minChar = 4;
const charBase =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ!@#$%^&*()+?><:{}[]";

inputNumber.value = defaultNumber;

function upNumber() {
  let inputValue = inputNumber.value;
  inputValue++;
  inputNumber.value = inputValue;
}

function downNumber() {
  let inputValue = inputNumber.value;
  inputValue--;
  if (validChar(inputValue)) {
    return;
  }
  inputNumber.value = inputValue;
}

function getPassword() {
  let passWd = "";
  const numberChar = parseInt(inputNumber.value);

  for (let i = 0; i < numberChar; i++) {
    let random = Math.floor(Math.random() * charBase.length);
    passWd += charBase.substring(random, random + 1);
  }

  inputPassword.value = passWd;
}

function validChar(value) {
  const number = parseInt(value);
  if (number < minChar) {
    alert("Não pode ser menor que " + minChar);
    return true;
  }
}

function initThemeStorage() {
  const mode = window.localStorage.getItem("mode");

  if (mode === "light") {
    iconThemeMode.src = "/assets/icons/moon.svg";
    window.localStorage.setItem("mode", "light");
    tagHtml.classList.add("light");
  } else {
    iconThemeMode.src = "/assets/icons/sun.svg";
    window.localStorage.setItem("mode", "dark");
    tagHtml.classList.remove("light");
  }
}

initThemeStorage();

function changeTheme() {
  if (tagHtml.classList.contains("light")) {
    tagHtml.classList.remove("light");
    iconThemeMode.src = "/assets/icons/sun.svg";
    window.localStorage.setItem("mode", "dark");
  } else {
    tagHtml.classList.add("light");
    iconThemeMode.src = "/assets/icons/moon.svg";
    window.localStorage.setItem("mode", "light");
  }
}

btnUp.addEventListener("click", upNumber);
btnDown.addEventListener("click", downNumber);
btnCreatePasswd.addEventListener("click", getPassword);
btnThemeMode.addEventListener("click", changeTheme);

btnCopy.addEventListener("click", function () {
  navigator.clipboard.writeText(inputPassword.value);
  alert("Coppiado " + inputPassword.value);
});
