//Here is a comment.

console.log("Hello there world");

//E5
// var x = 1;

//E6
let x = 1;
const x2 = 1;

let variableOne = 5;
let variableTwo = 6;

console.log("variableOne: " + variableOne + " - variableTwo: " + variableTwo);

let variableThree = variableOne + variableTwo;
variableThree += 1;
console.log(variableThree);

function addNumbers(a, b) {
    return a + b;
}

console.log("Output: " + addNumbers(22, 32));

let otherFunction = addNumbers;
x = otherFunction(22, 56);
console.log("x: " + x)

// JSON
let personA = {
    name: "Paul",
    email: "paul.craven@simpson.edu"
};
console.log(personA);
console.log(personA.name);
console.log(personA['name']);

// ES6 Class
class PersonB {
    constructor() {
        this.name = "";
        this.email = "";
    }
    fullname() {
        return this.name + " " + this.email;
    }
}
let personB = new PersonB();
personB.name = "Mary"
personB.email = "mary.mary@my.simpson.edu"
console.log(personB);
console.log(personB.fullname());

//Loop
for(let i = 0; i < 10; i++) {
    console.log(i);
}

var colors = ["red", "green", "purple"]
for(let i = 0; i < colors.length; i++){
    console.log(colors[i]);
}

for(let field in personA) {
    console.log(field + " = " + personA[field]);
}

let a = 5;
let b = 6;
if(a == b){
    console.log("a == b");
}

a = "Paul";
b = "Paul";

if(a === b) {
    console.log("a === b");
}
