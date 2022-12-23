// Function execution context
// Overhere we will learn what happens when we call a function

//JS mai jab bhi hum koi bhi function call karenge tabhi ek naya execution context create hoga or usse hum bolenge 'Function Execution Context'

let foo = "foo";
console.log(foo);
function getFullName(firstName, lastName) {
  console.log(arguments);
  let myVar = "var inside func";
  console.log(myVar);
  const fullName = firstName + " " + lastName;
  return fullName;
}

const personName = getFullName("Shubham", "Mali");
console.log(personName);
