const buttonCopy = document.getElementById("button-copy");
const copyText = document.getElementById("copy-text");
const pasteText = document.getElementById("paste-text");

buttonCopy.addEventListener("click", function () {
    copyText.select();
    document.execCommand("copy");
});

//Pour vérifier si le texte copié est bien le bon
pasteText.addEventListener ("keyup", function copyCheck() {
    const check = document.getElementById("check");
    if (copyText.value == pasteText.value) {
        check.innerHTML = "Le texte copié est bon";
        check.style.color = "green";
    }

    else {
        check.innerHTML = "Le texte copié ne correspond pas";
        check.style.color = "red";
    }
})

//Pour que le texte de vérification disparaisse quand on quitte le formulaire
pasteText.addEventListener("blur", function (e) {

    if (check.innerHTML != null) { 

       check.innerHTML = '';
    } 
})