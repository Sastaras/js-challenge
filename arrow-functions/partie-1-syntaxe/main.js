const buttonCopy = document.getElementById("button-copy");
const copyText = document.getElementById("copy-text");
/********************************************************/

let less = moins => {
    return moins = moins - 2;
}

console.log(less(10));


let multiplier = (x, y = 8) => x * y;


console.log(multiplier(7));

//Exemple du Pile ou Face
let pOF = () => {
    let number = Boolean(Math.round(Math.random()));
    if (number == true)
        return "Face";
    else
        return "Pile";
}

console.log(pOF());

//Exemple du Copié/collé (ouvrir partie-1-syntaxe dans le navigateur)
buttonCopy.addEventListener("click", () => {
    copyText.select();
    document.execCommand("copy");
});
