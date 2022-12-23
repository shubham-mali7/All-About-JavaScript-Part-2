// Lexical Environment and Scope Chain

const firstName = "ram";
const lastName = "Mali";
const fullName = firstName + " " + lastName;

const printName = function () {
  const firstName = "Shubham";
  function myFunction() {
    console.log(firstName);
    console.log(lastName);
    console.log(fullName);
  }
  console.log(firstName);
  console.log(lastName);

  myFunction();
};

printName();
