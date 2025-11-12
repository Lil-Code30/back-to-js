# JavaScript

---

## 🧠 1. Introduction à JavaScript

JavaScript est un **langage de programmation** utilisé pour rendre les pages web **interactives et dynamiques**.
Il s’exécute **dans le navigateur** (côté client) et peut aussi être utilisé côté serveur (avec **Node.js**).

---

## ⚙️ 2. Intégrer JavaScript dans une page HTML

### **Méthodes :**

**1️⃣ Dans une balise `<script>` :**

```html
<script>
  alert("Hello, JavaScript !");
</script>
```

**2️⃣ Fichier externe :**

```html
<script src="script.js"></script>
```

---

## 📘 3. Variables et Types de Données

### **Déclaration :**

```js
let age = 23; // variable modifiable
const PI = 3.14; // constante
var name = "Ismael"; // ancienne syntaxe (à éviter)
```

### **Types de données :**

```js
let name = "Loko"; // string
let age = 23; // number
let isStudent = true; // boolean
let car = null; // null
let x; // undefined
let fruits = ["apple", "banana"]; // array
let person = { name: "Ismael", age: 23 }; // object
```

---

## 🧮 4. Opérateurs

### **Arithmétiques :**

```js
+ - * / % ++ --
```

### **De comparaison :**

```js
==  !=  ===  !==  >  <  >=  <=
```

### **Logiques :**

```js
&&  ||  !
```

### **D’affectation :**

```js
=  +=  -=  *=  /=  %=
```

---

## 🔁 5. Structures de Contrôle

### **Condition :**

```js
if (age >= 18) {
  console.log("Majeur");
} else {
  console.log("Mineur");
}
```

### **Switch :**

```js
let day = "Lundi";
switch (day) {
  case "Lundi":
    console.log("Début de semaine");
    break;
  default:
    console.log("Autre jour");
}
```

### **Boucles :**

```js
for (let i = 0; i < 3; i++) console.log(i);

let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}
```

---

## 🧩 6. Fonctions

### **Déclaration classique :**

```js
function greet(name) {
  return `Salut ${name}!`;
}
console.log(greet("Ismael"));
```

### **Fonction fléchée :**

```js
const greet = (name) => `Salut ${name}!`;
```

---

## 🧰 7. Tableaux et Objets

### **Tableau :**

```js
let fruits = ["apple", "banana", "cherry"];
fruits.push("date"); // ajoute
fruits.pop(); // supprime le dernier
console.log(fruits[0]); // apple
```

### **Objet :**

```js
let person = {
  name: "Ismael",
  age: 23,
  greet() {
    console.log(`Salut, je suis ${this.name}`);
  },
};

person.greet();
```

---

## 🌍 8. Le DOM (Document Object Model)

Le **DOM** représente toute la structure HTML d’une page sous forme d’objets JavaScript manipulables.

### **Sélection d’éléments :**

```js
document.getElementById("id");
document.getElementsByClassName("class");
document.getElementsByTagName("p");
document.querySelector(".class"); // moderne
document.querySelectorAll("div");
```

---

## ✏️ 9. Manipulation du DOM

### **Changer le contenu :**

```js
document.getElementById("demo").textContent = "Bonjour !";
document.getElementById("demo").innerHTML = "<b>Texte en gras</b>";
```

### **Changer le style :**

```js
const box = document.getElementById("box");
box.style.backgroundColor = "red";
box.style.fontSize = "20px";
```

### **Créer et insérer un élément :**

```js
let p = document.createElement("p");
p.textContent = "Nouveau paragraphe";
document.body.appendChild(p);
```

### **Supprimer un élément :**

```js
p.remove();
```

---

## ⚡ 10. Événements JavaScript

Les **événements** sont des actions de l’utilisateur (clic, saisie, souris, etc.) ou du navigateur.

### **Méthodes pour écouter un événement :**

#### **1️⃣ Méthode HTML directe**

```html
<button onclick="alert('Bouton cliqué!')">Clique-moi</button>
```

#### **2️⃣ Méthode JavaScript**

```js
const btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  alert("Bouton cliqué !");
});
```

---

### **Les événements courants :**

| Type           | Événement                                                 | Description                            |
| -------------- | --------------------------------------------------------- | -------------------------------------- |
| **Souris**     | `click`, `dblclick`, `mouseover`, `mouseout`, `mousemove` | Clic ou mouvement de souris            |
| **Clavier**    | `keydown`, `keyup`, `keypress`                            | Appui sur une touche                   |
| **Formulaire** | `submit`, `change`, `focus`, `blur`, `input`              | Interaction avec un formulaire         |
| **Fenêtre**    | `load`, `resize`, `scroll`                                | Actions sur la fenêtre                 |
| **Autres**     | `contextmenu`, `drag`, `drop`                             | Menu clic droit, glisser-déposer, etc. |

#### **Exemples :**

```html
<input id="name" placeholder="Tape ton nom" />
<p id="output"></p>

<script>
  const input = document.getElementById("name");
  const output = document.getElementById("output");

  input.addEventListener("input", () => {
    output.textContent = `Bonjour ${input.value}`;
  });
</script>
```

---

## 🎨 11. Exemples concrets de DOM + événements

### ✅ Exemple 1 : Changer la couleur d’un élément

```html
<button id="changeColor">Changer Couleur</button>
<div id="box" style="width:100px; height:100px; background:gray;"></div>

<script>
  const btn = document.getElementById("changeColor");
  const box = document.getElementById("box");

  btn.addEventListener("click", () => {
    box.style.backgroundColor = "blue";
  });
</script>
```

### ✅ Exemple 2 : Compteur

```html
<button id="plus">+</button>
<button id="minus">-</button>
<p id="count">0</p>

<script>
  let count = 0;
  document.getElementById("plus").onclick = () => {
    count++;
    document.getElementById("count").textContent = count;
  };
  document.getElementById("minus").onclick = () => {
    count--;
    document.getElementById("count").textContent = count;
  };
</script>
```

---

## 🧠 12. Quelques méthodes utiles du DOM

```js
element.classList.add("active");
element.classList.remove("hidden");
element.classList.toggle("dark-mode");
element.setAttribute("src", "image.png");
element.getAttribute("href");
```

---

## 🚀 13. Bonne pratique

✅ Toujours mettre le `<script>` **à la fin du body**
✅ Utiliser `addEventListener` plutôt que `onclick`
✅ Utiliser `const` et `let` au lieu de `var`
✅ Commenter ton code
✅ Organiser ton code en fonctions

---
