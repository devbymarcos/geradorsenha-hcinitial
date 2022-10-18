const inputPassword = document.getElementById("inputPassword");
const inputNumber = document.getElementById("inputNumber");
const btnUp = document.getElementById("btnUp");
const btnDown = document.getElementById("btnDown");

const btnCreatePasswd = document.getElementById("gerarSenha");
const btnCopy = document.getElementById("copy");

const defaultNumber = 8;
const minChar = 4;
const char = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ!@#$%^&*()+?><:{}[]"

inputNumber.value = defaultNumber;

function incrementValue() {
  let inputValue = inputNumber.value;
  inputValue++;
  inputNumber.value = inputValue;
}

function decrementValue() {
  let inputValue = inputNumber.value;
  inputValue--;
  inputNumber.value = inputValue;
}

btnUp.addEventListener("click", incrementValue);
btnDown.addEventListener("click", decrementValue);
