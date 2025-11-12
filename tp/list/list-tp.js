let listeCourse = ["Orange", "Tartinade", "Bananes", "Brioches", "Pommes"];

var mainContent = document.getElementById("page");
mainContent.style.padding = "8px";

var ulElement = document.createElement("ul");

var h1Element = document.createElement("h1");
h1Element.textContent = "Liste des coures :";

var inputElement = document.createElement("input");
inputElement.id = "name";
inputElement.type = "text";
inputElement.value = "";

var addBtn = document.createElement("button");
addBtn.textContent = "Ajouter";
addBtn.style.marginLeft = "5px";
addBtn.id = "addBtn";

mainContent.appendChild(h1Element);
mainContent.appendChild(inputElement);
mainContent.appendChild(addBtn);

addBtn.addEventListener("click", () => {
  if (!inputElement.value.trim()) {
    alert("Enter an article to buy");
  } else {
    listeCourse.push(inputElement.value);
    inputElement.value = "";
    console.log(listeCourse);

    reRenderList();
  }
});

function reRenderList() {
  ulElement.innerHTML = "";

  for (let i = 0; i < listeCourse.length; i++) {
    var liElement = document.createElement("li");
    var liContent = (document.createTextNode = listeCourse[i]);
    liElement.textContent = liContent;
    liElement.addEventListener("click", () => deleteElement(i));
    if (i % 2 == 0) {
      liElement.style.color = "blue";
    }

    ulElement.appendChild(liElement);
  }

  mainContent.appendChild(ulElement);
}

reRenderList();

function deleteElement(i) {
  listeCourse.splice(i, 1);
  console.log(listeCourse);
  reRenderList();
}
