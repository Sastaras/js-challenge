// L'opérateur this au sein des fonctions fléchées

const calcul = {
    number: 3,
    addition: function () {
        return this.number + 7;
    },
};
console.log(calcul.addition()); //Fonctionne car utilisé au sein du parent qui appelle la fonction.


/*************************************************************************************************************/

const calculBadArrow = {
    number: 3,
    addition: () => {
        return this.number + 7;
    },
};
console.log(calculBadArrow.addition()); // Ne fonctionne pas car this n'est pas défini dans le contexte global


/*************************************************************************************************************/

this.number = 3;

const calculArrow = {
    addition: () => {
        return this.number + 7;
    },
};
console.log(calculArrow.addition()); //Fonctionne, car this est défini dans le contexte global, en dehors du parent qui appelle la fonction.

//On peut dans ce cas se passer de la variable calculArrow, car elle ne possède plus qu'une fonction qui ne nous sert qu'à réaliser une addition.
this.number = 3;

let addition = () => this.number + 7;

console.log(addition());

/*
Exercice : Changer les fonctions du shopping cart pour des fonctions fléchées. (6 fonctions à éditer)
Lien du shopping cart (fichier main.js) : https://github.com/paule29/shopping-cart-js/tree/main/2-shopping-cart 

Doc : https://www.freecodecamp.org/news/when-and-why-you-should-use-es6-arrow-functions-and-when-you-shouldnt-3d851d7f0b26/ 
*/
