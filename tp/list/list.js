var content = "Tomates, carrots";

document.getElementById("one").innerHTML = content;

var newElement = document.createElement("li");
var newText = document.createTextNode("Jus d'orange");
newElement.appendChild(newText);

var position = document.getElementsByTagName("ul")[0];
position.appendChild(newElement);

var rmElement = document.getElementsByTagName("li")[3];

var parentElement = rmElement.parentElement;

parentElement.removeChild(rmElement);

var firstElement = document.getElementById("one");

// if (firstElement.hasAttribute("class")) {
//   firstElement.innerHTML = firstElement.getAttribute("class");
// }

var fourthItem = document.getElementsByTagName("li").item(3);

console.log(fourthItem);

fourthItem.setAttribute("class", "cool");

var firstElement = document.getElementById("one");
firstElement.className = "complete";

firstElement.style.color = "blue";
var coolElement = document.getElementsByClassName("cool")[0];
console.log(coolElement);
coolElement.style.backgroundColor = "blue";
coolElement.style.color = "white";
