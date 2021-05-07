pal = (word) => {
    word = prompt("Entrez un mot").toLowerCase();
    console.log(word);
    reversed = [...word].reverse().join("");
    if (word == reversed) console.log("C'est un palindrome");
    else console.log("Ce n'est pas un palindrome");
};
pal();
