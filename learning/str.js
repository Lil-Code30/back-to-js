let x = "Salut";

let y = new String("Welcome");

console.log(x);
console.log(y);

let mot = "logique";
let wordLen = mot.length;
console.log(`The length of the word "${mot}" is ${wordLen}`);

// Extraire une partie de la chaine de caractères
let ch = "Programmation";
let newCh = ch.substring(3, 8);
console.log(newCh);

// Remplacer la première occurrence
let ch1 = "Programmation";
let newCh1 = ch.replace("a", "e");
console.log(newCh1);

// Fusionner deux ou plusieurs chaines
let ch2 = "Logique";
let ch3 = " de ";
let ch4 = "Programmation";
let newCh2 = ch2.concat(ch3, ch4);
console.log(newCh2);

// Enlever les espaces du début et de la fin
let ch5 = "  Logique Programmation  ";
let newCh3 = ch5.trim();
console.log(newCh3);

// Diviser une chaine de caractères selon le séparateur et le mettre dans un tableau

let ch6 = "Prog 2025";
let t1 = ch6.split("");
console.log(t1);

let t2 = ch6.split(" ");
console.log(t2);
