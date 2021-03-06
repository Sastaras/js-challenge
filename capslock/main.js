const input = document.getElementById("input");
const capsWarning = document.getElementById("warning");
const numWarning = document.getElementById("numwarning");

input.addEventListener('keydown', function (e) {

    if (e.getModifierState('CapsLock')) {
        capsWarning.style.display = "block";
    }
    else {
        capsWarning.style.display = "none";
    }
    if (e.getModifierState('NumLock')) {
        numWarning.style.display = "block";
    }
    else {
        numWarning.style.display = "none";
    }
})

input.addEventListener("blur", function (e) {

    capsWarning.style.display = "none";
    numWarning.style.display = "none";
});