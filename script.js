
let input = document.querySelector('#input-box');

const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789"
const specialChars = "!@#$%&*";

const allChar = upperCase + lowerCase + number + specialChars;
function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += specialChars[Math.floor(Math.random() * specialChars.length)];

    while(length > password.length){
        password += allChar[Math.floor(Math.random() * allChar.length)];
    }
    return password;
}
let btn = document.querySelector('.btn');

btn.addEventListener('click', function(){
    let generatedPassword = createPassword();
    input.value= generatedPassword;
})

let copy = document.querySelector('.copy');

copy.addEventListener('click', function(){
    input.select();
    document.execCommand('copy');
    alert("Password copied successfully")
})