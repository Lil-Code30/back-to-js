# Manipuler le style CSS avec JavaScript

---

## 🎨 1. Comment manipuler le style CSS avec JavaScript

Il existe **plusieurs façons** de modifier le style d’un élément HTML depuis JavaScript :

---

### 🧩 **Méthode 1 : Modifier directement avec `.style`**

Tu peux accéder à la propriété CSS d’un élément via :

```js
element.style.propertyName = "valeur";
```

#### Exemple :

```html
<div id="box" style="width:100px; height:100px; background:gray;"></div>
<button id="btn">Changer le style</button>

<script>
  const box = document.getElementById("box");
  const btn = document.getElementById("btn");

  btn.addEventListener("click", () => {
    box.style.backgroundColor = "blue";
    box.style.borderRadius = "20px";
    box.style.transform = "rotate(15deg)";
  });
</script>
```

> ⚠️ En JS, les noms CSS avec tirets (`background-color`) deviennent en **camelCase** → `backgroundColor`.

---

### 🧩 **Méthode 2 : Ajouter ou retirer une classe CSS**

C’est la **méthode la plus propre** si tu veux appliquer plusieurs styles.

```html
<style>
  .highlight {
    background-color: gold;
    color: black;
    font-weight: bold;
  }
</style>

<p id="text">Salut tout le monde !</p>
<button id="toggle">Changer le style</button>

<script>
  const text = document.getElementById("text");
  const toggle = document.getElementById("toggle");

  toggle.addEventListener("click", () => {
    text.classList.toggle("highlight");
  });
</script>
```

✅ **Avantage :** tu gardes ton CSS séparé du JavaScript.

---

### 🧩 **Méthode 3 : Modifier dynamiquement le contenu CSS**

Tu peux injecter du style directement dans la page :

```js
const style = document.createElement("style");
style.textContent = `
  body {
    background: linear-gradient(45deg, red, blue);
  }
`;
document.head.appendChild(style);
```

---

## 🧠 2. Liste des propriétés CSS courantes utilisables en JavaScript

| **Catégorie**          | **Propriété CSS**                | **En JavaScript (.style)** | **Exemple**                                   |
| ---------------------- | -------------------------------- | -------------------------- | --------------------------------------------- |
| 🎨 Couleur             | `background-color`               | `backgroundColor`          | `el.style.backgroundColor = "red"`            |
| 🖋️ Texte               | `color`                          | `color`                    | `el.style.color = "white"`                    |
| 🖋️ Texte               | `font-size`                      | `fontSize`                 | `el.style.fontSize = "20px"`                  |
| 🖋️ Texte               | `font-weight`                    | `fontWeight`               | `el.style.fontWeight = "bold"`                |
| 🖋️ Texte               | `text-align`                     | `textAlign`                | `el.style.textAlign = "center"`               |
| 🖋️ Texte               | `text-decoration`                | `textDecoration`           | `el.style.textDecoration = "line-through"`    |
| 📏 Taille              | `width`, `height`                | `width`, `height`          | `el.style.width = "200px"`                    |
| 📦 Bordure             | `border`                         | `border`                   | `el.style.border = "2px solid black"`         |
| 📦 Bordure             | `border-radius`                  | `borderRadius`             | `el.style.borderRadius = "10px"`              |
| 🧭 Espacement          | `margin`, `padding`              | `margin`, `padding`        | `el.style.margin = "20px"`                    |
| ⚙️ Position            | `position`                       | `position`                 | `el.style.position = "absolute"`              |
| ⚙️ Position            | `top`, `left`, `right`, `bottom` | `top`                      | `el.style.top = "50px"`                       |
| 🌫️ Ombres              | `box-shadow`                     | `boxShadow`                | `el.style.boxShadow = "2px 2px 10px gray"`    |
| 🌈 Arrière-plan        | `background-image`               | `backgroundImage`          | `el.style.backgroundImage = "url('img.jpg')"` |
| 💫 Animation           | `transition`                     | `transition`               | `el.style.transition = "0.5s"`                |
| 💫 Transformation      | `transform`                      | `transform`                | `el.style.transform = "rotate(45deg)"`        |
| 🌐 Affichage           | `display`                        | `display`                  | `el.style.display = "none"`                   |
| 🧩 Opacité             | `opacity`                        | `opacity`                  | `el.style.opacity = "0.5"`                    |
| 📈 Z-index             | `z-index`                        | `zIndex`                   | `el.style.zIndex = "10"`                      |
| 👁️ Curseur             | `cursor`                         | `cursor`                   | `el.style.cursor = "pointer"`                 |
| 🧍 Alignement vertical | `vertical-align`                 | `verticalAlign`            | `el.style.verticalAlign = "middle"`           |

---

## 💡 3. Exemple complet : manipuler plusieurs styles

```html
<div
  id="card"
  style="width:200px; height:100px; background:lightgray; text-align:center; line-height:100px;"
>
  Carte
</div>
<button id="styleBtn">Changer le style</button>

<script>
  const card = document.getElementById("card");
  const btn = document.getElementById("styleBtn");

  btn.addEventListener("click", () => {
    card.style.backgroundColor = "skyblue";
    card.style.color = "white";
    card.style.textDecoration = "line-through";
    card.style.borderRadius = "15px";
    card.style.boxShadow = "3px 3px 15px rgba(0,0,0,0.2)";
  });
</script>
```

---

## ⚡ 4. Astuces avancées

- Pour **obtenir** le style actuel d’un élément (même depuis le CSS) :

```js
let color = window.getComputedStyle(element).backgroundColor;
```

- Pour **animer** avec JS :

```js
element.style.transition = "all 0.5s ease";
element.style.transform = "scale(1.2)";
```

---
