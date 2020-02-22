// -- Using Default Params
const adder = (x, y = 1) => x + y;

adder(5);

// 6

// --- Without Default Params
const adderLeg = (x, y) => {
  y = y ? y : 2;

  return x + y;
};

adderLeg(5);

// 7
