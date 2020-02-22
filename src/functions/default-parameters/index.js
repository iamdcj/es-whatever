// -- Using Default Params
const adder = (x, y = 1) => x + y;

adder(5);

// 6

// --- Without Default Params
const adderLegacy = (x, y) => {
  y = y ? y : 2;

  return x + y;
};

adderLegacy(5);

// 7
