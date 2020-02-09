// === Double Numbers
const numbers = [2, 4, 6];

const doubled = numbers.map(n => n * 2);

console.log(doubled);
// [4, 8, 12]

// === Update objects

const users = [{ name: "David" }, { name: "Nole" }];

const usersWithIDs = users.map((user, i) => ({
  name: user.name,
  id: `${user.name}-${i}`
}));

console.log(usersWithIDs);
// {name: "David", id: "David-0"}
// {name: "Nole", id: "Nole-1"}

// ==== Sparse Arrays
const names = ["Steffie", , "Nole"];

const fullNames = names.map(firstName => `${firstName} Jones`);

console.log(fullNames);
// ["Steffie Jones", empty, "Nole Jones"]

// ==== No Return

const initials = ["S", "D", "N"];
const fullInitials = initials.map(initial => {
  `${initial} J`;
});

console.log(fullInitials);
///[ undefined, undefined, undefined ]
