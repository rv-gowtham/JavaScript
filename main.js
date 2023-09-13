console.log("Hello World");
let rate = 10 ;
rate = 20;
console.log(rate);

// let name = "RV Gowtham";
// let age = 19;
let isApproved = true;
let firstName = undefined;
let lastName = null;

let person = {
    name: "RV Gowtham",
    age: 19
};
console.log(person);

person.name = 'Mathi Balan';
console.log(person.name);
person.age = 23;
console.log(person.age);

console.log(person);

person['name'] = 'RV Gowtham';
console.log(person.name);
person['age'] = 19;
console.log(person.age);

console.log(person);

let selectColor = ['red', 'blue'];
console.log(selectColor);

selectColor[2] = 'yellow';
console.log(selectColor);

console.log(selectColor.length); 

function greet(name , lastName) {
    console.log('hello ' + name + " " + lastName);
}
greet('RV', 'Gowtham');

function square(number) {
    return number * number;
}

let number = square(2);
console.log(number);