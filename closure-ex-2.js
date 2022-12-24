function myFunction(power) {
  return function (number) {
    return number ** power;
  };
}

const cube = myFunction(3);
const ans = cube(5);
console.log(ans);

const square = myFunction(2);
const ans2 = square(5);
console.log(ans2);

// same code with arrow function

// const myFunction = power => number => number ** power;

// const cube = myFunction(3);
// const ans = cube(5);
// console.log(ans);

// const square = myFunction(2);
// const ans2 = square(5);
// console.log(ans2);
