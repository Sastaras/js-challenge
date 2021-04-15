const password = document.getElementById("password");
const checkPassword = document.getElementById("check-password");
const msg = document.getElementById("msg");
const msgLength = document.getElementById("msg-length");
const msgCase = document.getElementById("msg-case");
const msgNum = document.getElementById("msg-num");

checkPassword.addEventListener('keyup', function () {

    if (password.value !== checkPassword.value) {
        msg.innerHTML = '⚠️The password is not the same!';
        msg.style.color = 'red';
    }
    else msg.innerHTML = ''; 

})
// correction en cours, la recherche de charactères spéciaux et de nombres ne fonctionne pas en l'état
password.addEventListener('keyup', function () {

    if (password.value.length < 6) {
        msgLength.innerHTML = '⚠️The password needs 6 characters minimum!';
        msgLength.style.color = 'green';
    }
    else msgLength.innerHTML = ''; 

    if (password.value.search("/[!”#$%&’()*+,-.:;<=>?@^_`{|}~]") < 0) {
        msgCase.innerHTML = '⚠️The password must contain at least 1 special characters!';
        msgCase.style.color = 'blue';
    }
    else msgCase.innerHTML = '';

    if (password.value.search("1234567890") < 0) {
        msgNum.innerHTML = '⚠️The password must contain at least 1 number!';
        msgNum.style.color = 'blue';
    }
    else msgCase.innerHTML = '';
})

/*********************************************************/


password.addEventListener("blur", function (e) {

    if (password.value.search("/[!”#$%&’()*+,-.:;<=>?@^_`{|}~]") > 0) {

        msgCase.innerHTML = '';
    }
    if (password.value.length > 6) {
        msgLength.innerHTML = '';
    }
});

checkPassword.addEventListener("blur", function (e) {

    if (password.value == checkPassword.value) {
        msg.innerHTML = '';
    }
});
