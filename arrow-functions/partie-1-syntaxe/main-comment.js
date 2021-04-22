const buttonCopy = document.getElementById("button-copy");
const copyText = document.getElementById("copy-text");
/********************************************************/

/*function less(moins) {
    return moins = moins-2;
}
*/

let less = moins => moins = moins - 2;

console.log(less(10));


/*function multiplier(x,y = 8) {
    return x*y;
} 
*/

let multiplier = (x, y = 8) => x * y;

console.log(multiplier(7));

//Exemple du Pile ou Face

/*function pOF() {
    let number = Boolean(Math.round(Math.random()));
    if (number == true)
        return "Face";
    else
        return "Pile";
}
*/

let pOF = () => {
    let number = Boolean(Math.round(Math.random()));
    if (number == true)
        return "Face";
    else
        return "Pile";
}

console.log(pOF());

//Exemple du Copié/collé (ouvrir partie-1-syntaxe dans le navigateur - Penser à changer main.js en main-comment.js dans le php)

/*buttonCopy.addEventListener("click", function () {
    copyText.select();
    document.execCommand("copy");
}); 
*/

buttonCopy.addEventListener("click", () => {
    copyText.select();
    document.execCommand("copy");
});
