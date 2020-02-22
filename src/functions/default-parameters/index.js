// -- Using Default Params
const adder = (x, y = 1) => x + y;

adder(5); // 6

// --- Without Default Params
const adderLegacy = (x, y) => {
  y = y ? y : 2;

  return x + y;
};

adderLegacy(5); // 7

// -- Passing falsy values
const logType = (value = 1) => {
  console.log(value);
  console.log(typeof value);
};

logType(null);
// null
// object

logType(0);
// 0
// number

logType("");
//
// string

// -- Default for Defaults
const sayHi = (a = "Hello", b = "World", c = `${a} ${b}`) => {
  console.log(c);
};

sayHi(); // Hello World

// -- Omitting a parameter
const logger = (a = 1, b = 2, c = 3) => {
  console.log(a, b, c);
};

logger(2, undefined, 5); // 2 2 5
