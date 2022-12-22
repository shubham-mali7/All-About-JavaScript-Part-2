// hoisting :Hoisting in JavaScript is a behavior in which a function or a variable can be used before declaration.

console.log(this);
console.log(window);
console.log(myFunction); //function print horaha hai kyonki uski value pehle he memory mai store ho chuki hai execute hone se pehle (in case of function declaration)
console.log(fullName); // yahape undefined milraha hai kyonki iski value pehle he memory mai undefined store ho chuki hai

// function myFunction() {
//   console.log("This is my function");  // function declaration
// }

// var myFunction = function() {
//   console.log("This is my function");   // function expression : undefined
// }

let myFunction = function () {
  console.log("This is my function"); // function expression : uninitialized (error)  in case of let and const
};

console.log(myFunction);
myFunction();

var firstName = "Shubham";
var lastName = "Mali";

var fullName = firstName + " " + lastName;

console.log(fullName);

// > let and const are also hoisted
