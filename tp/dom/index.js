const box = document.getElementById("demo");

box.textContent = "Bonjour !";
box.innerHTML = "<b>Texte en gras</b>";

box.style.backgroundColor = "red";
box.style.fontSize = "20px";

let p = document.createElement("p");
p.textContent = "Nouveau paragraphe";
document.body.appendChild(p);
document.body.style.padding = "50px";
p.remove();

// Événements JavaScript

const btn = document.getElementById("btn1");

btn.addEventListener("click", () => {
  alert("Heeeeeeeeyyy !");
});

const input = document.getElementById("name");
const output = document.getElementById("output");

input.addEventListener("input", () => {
  output.textContent = `Bonjour ${input.value}`;
});

const changeColor = document.getElementById("changeColor");
const box1 = document.getElementById("box");

changeColor.addEventListener("click", () => {
  box1.style.backgroundColor = "blue";
});

const minusBtn = document.getElementById("minusBtn");
const plusBtn = document.getElementById("plusBtn");
const counter = document.getElementById("counter");
let count = 0;

minusBtn.addEventListener("click", () => {
  count--;
  counter.textContent = count;
});

plusBtn.addEventListener("click", () => {
  count++;
  counter.textContent = count;
});
