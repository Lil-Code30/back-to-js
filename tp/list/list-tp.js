let listeCourse = ["Orange", "Tartinade", "Bananes", "Brioches", "Pommes"];

var mainContent = document.getElementById("page");

var ulElement = document.createElement("ul");

var h1Element = document.createElement("h1");
h1Element.textContent = "Liste des coures :";

ulElement.appendChild(h1Element);

for (let i = 0; i < listeCourse.length; i++) {
  var liElement = document.createElement("li");
  var liContent = (document.createTextNode = listeCourse[i]);
  liElement.textContent = liContent;

  if (i % 2 == 0) {
    liElement.style.color = "blue";
  }

  ulElement.appendChild(liElement);
}

mainContent.appendChild(ulElement);
