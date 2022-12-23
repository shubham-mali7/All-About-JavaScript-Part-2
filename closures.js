// closures

// Function can return functions

// function outerFunction() {
//   function innerFunction() {
//     console.log("I am innerFunction");
//   }

//   return innerFunction;
// }

// const end = outerFunction();
// end();

//----------------------------------------------------

function printFullName(firstName, lastName) {
  function printName() {
    console.log(firstName, lastName);
  }

  return printName;
}

const end = printFullName("Shubham", "Mali");
end();

// closures
// Jab Function kisi aur function se return hota hai toh vo apne sath jo uske local memory ke variables hai unko sath leke return hota hai in case of printname above.
//   matlab yahape firstname aur lastname ko sath leke return hua hai ye kyunki usko patah tha ki iski mujhe jaroorat padegi
// apne jhole mai apne bag mai usko leke return hua hai

// Aur ek definition !
// jab function mai function return hota hai toh apne sath mai voo jahape present hai uske local memory ko leke return hota hai kyonki usko jaroorat padti hai un cheezo ki badme !

// Closure Google baba ki bhasha mai :
// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function.
