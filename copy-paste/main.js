const buttonCopy = document.getElementById("button-copy") ;
const copyText = document.getElementById("copy-text") ;

buttonCopy.addEventListener("click", function() {
    copyText.select();
    document.execCommand("copy")  ;
});
