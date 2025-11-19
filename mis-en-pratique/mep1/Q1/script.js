const inputPhrase = document.getElementById("inputPhrase");
const btnCountVowels = document.getElementById("btnCountVowels");
const listVowels = document.getElementById("listVowels");
const btnDisplayVowels = document.getElementById("btnDisplayVowels");
const resultCountVowels = document.getElementById("resultCountVowels");

const vowels = "aeiouAEIOU";

function numberOfVowels(str) {
  let count = 0;
  let strArray = str.split("");
  for (let char of strArray) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

function getVowels(str) {
  let foundVowels = [];
  let strArray = str.split("");
  for (let char of strArray) {
    if (vowels.includes(char)) {
      foundVowels.push(char);
    }
  }
  return foundVowels;
}

btnCountVowels.addEventListener("click", () => {
  if (inputPhrase.value !== "") {
    const vowelCount = numberOfVowels(inputPhrase.value);
    resultCountVowels.innerText = vowelCount;
  } else {
    alert("Veuillez entrer une phrase.");
  }
});

btnDisplayVowels.addEventListener("click", () => {
  if (inputPhrase.value !== "") {
    let vowelsInPhrase = getVowels(inputPhrase.value);
    const vowelCount = numberOfVowels(inputPhrase.value);
    listVowels.innerHTML = "";

    vowelsInPhrase.forEach((vowel) => {
      const listItem = document.createElement("li");
      listItem.textContent = vowel;
      listVowels.appendChild(listItem);
    });

    resultCountVowels.innerText = vowelCount;
  } else {
    alert("Veuillez entrer une phrase.");
  }
});
