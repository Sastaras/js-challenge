const input = document.getElementById("input");
const capsWarning = document.getElementById("warning");
const numWarning = document.getElementById("numwarning");

input.addEventListener('keyup', function (e) {
    if (e.getModifierState('CapsLock')) {
        capsWarning.style.display = "block";
    } else {
        capsWarning.style.display = "none";
    }
})

input.addEventListener('keyup', function (e) {
    if (e.getModifierState('NumLock')) {
        numWarning.style.display = "block";
    } else {
        numWarning.style.display = "none";
    }
})