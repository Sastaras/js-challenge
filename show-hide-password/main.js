const input = document.getElementById("input");
const display = document.getElementById("display");
const btn = document.getElementById('btn');

/* j'ai un peu triché et ajouté un bouton dans le html, mais c'est plus joli comme ça que sur la checkbox*/

btn.onmousedown = function () {

    input.type = "text";
    display.innerHTML = "Hide";

}

btn.onmouseup = function () {

    input.type = "password";
    display.innerHTML = "Show";

}

/********************************/

document.getElementById('checkbox').addEventListener('click', function () {
    if (input.type == "password") {
        input.type = "text";
        display.innerHTML = "Hide";
    } else {
        input.type = "password";
        display.innerHTML = "Show";
    }
})

/* solution deux,j'ai laissé le addeventlistener 'click' comme demandé, même si ce n'est pas pertinent */

/*document.getElementById('checkbox').addEventListener('click', function () {
    if (checkbox.checked == true){
        input.type = "text";
        display.innerHTML = "Hide";
    } else {
        input.type = "password";
        display.innerHTML = "Show";
    }
})*/

