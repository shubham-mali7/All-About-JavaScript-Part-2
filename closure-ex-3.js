/// application of closure

const func = () => {
  let counter = 0;
  return function () {
    if (counter < 1) {
      console.log(`Hii you called me !!`);
      counter++;
    } else {
      console.log(`I have been called once, you are calling me again!`);
    }
  };
};

const myFunc = func();
myFunc();
myFunc();

const myFunc2 = func();
myFunc2();
myFunc2();
myFunc2();
