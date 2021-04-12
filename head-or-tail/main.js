const myBtn = document.getElementById("myBtn");
var result = document.getElementById("result");

myBtn.addEventListener('click', hOT);

function hOT() {
    let number = Boolean(Math.round(Math.random()));
    console.log(number);
    if (number == true)
        result.innerHTML = 'Heads';
    else
        result.innerHTML = 'tails';
}