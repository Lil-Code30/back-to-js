// Variable
let x = 10;
alert(typeof x);

let y = "Bonjour";
alert(typeof y);

let name = prompt("What is your Name : ");

alert(`my name is ${name}.`);

console.log(`My name is ${name}`);

let age = prompt("How old are you?");

//  conditions

switch (age) {
  case 10:
    alert("You are young");
    break;
  case 20:
    alert("You are old");
    break;
  case 30:
    alert("You are old old");
    break;
  case 50:
    alert("You are too old");
    break;
  default:
    alert("Your age is not in the range");
}

// boubles

const cars = ["BMW", "Honda", "Toyota"];

let str = "";

for (let x of cars) {
  str += x;
}

console.log(str);
