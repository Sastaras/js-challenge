const password = document.getElementById("password");
const checkPassword = document.getElementById("check-password");

const msg = document.getElementById("msg");
const msgLength = document.getElementById("msg-length");
const msgSpecial = document.getElementById("msg-special");
const msgNum = document.getElementById("msg-num");

const specialRegex = /^(?=.*[!@#$%^&*])/;
const numRegex = /^(?=.*[0-9])/;

checkPassword.addEventListener('keyup', function () {

    if (password.value !== checkPassword.value) {
        msg.innerHTML = '⚠️The password is not the same!';
        msg.style.color = 'red';
    }
    else msg.innerHTML = ''; 

})

password.addEventListener('keyup', function () {

    if (password.value.length < 6) {
        msgLength.innerHTML = '⚠️The password needs 6 characters minimum!';
        msgLength.style.color = 'green';
    }
    else msgLength.innerHTML = ''; 
    
    if (!specialRegex.test(password.value)) {
        msgSpecial.innerHTML = '⚠️The password must contain at least 1 special characters!';
        msgSpecial.style.color = 'blue';
    }
    else msgSpecial.innerHTML = '';
    
    if (!numRegex.test(password.value)) { 
        msgNum.innerHTML = '⚠️The password must contain at least 1 number!';
        msgNum.style.color = 'blue';
    }
    else msgNum.innerHTML = '';

})

/*********************************************************/

password.addEventListener("blur", function (e) {

    if (specialRegex.test(password.value)) { 

        msgSpecial.innerHTML = '';
    } 
    if (password.value.length > 6) {
        msgLength.innerHTML = '';
    }

    if (numRegex.test(password.value)) { 
        msgNum.innerHTML = '';
}});

checkPassword.addEventListener("blur", function (e) {

    if (password.value == checkPassword.value) {
        msg.innerHTML = '';
    }
});
