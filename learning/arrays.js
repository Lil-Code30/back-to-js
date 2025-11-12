//  arrays

let arr1 = new Array();

let arr2 = [10, "JS", true, 5, "UQAR"];

let tab = [1, 2, 3, 40, 5, 6, 7];

// Insérer un élémentà la fin
tab.push(4);
console.log(tab);

// Insérer un élémentau début
tab.unshift(0);
console.log(tab);

// Supprimer un élémentde la fin

let lastElement = tab.pop();
console.log(lastElement);
console.log(tab);

// Supprimer un élémentdu début
let firstElement = tab.shift();
console.log(firstElement);
console.log(tab);

// Conversion d'un tableau en chaine de caractères (par défaut séparateur virgule)
let words1 = ["Hello", "World"];
let str1 = words1.toString();
console.log(str1);

// Conversion d'un tableau en chaine de caractères (avec choix de séparateur)
let words2 = ["Bonjour", "Programmation"];
let str2 = words2.join(" ");
console.log(str2);

// Fusionner des tableaux
let tab1 = [1, 2];
let tab2 = [3, 4];

let tab3 = tab1.concat(tab2);
console.log(tab3);

// Supprimer un élément d’un indice quelconque
let tab4 = [1, 2, 3, 4, 5, 6, 7];
tab4.splice(2, 1);
console.log(tab4);

// Ajouter un élèment à un indice quelconque
tab4.splice(4, 0, "a");
console.log(tab4);

// Copier une sous partie du tableau
let tab5 = tab4.slice(1, 5);
console.log(tab5);

// Inverser les éléments du tableau
tab5.reverse();
console.log(tab5);
