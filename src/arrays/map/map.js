// Double Numbers
const numbers = [2, 4, 6];

const doubled = numbers.map(n => n * 2);

console.log(doubled);
// [4, 8, 12]

// Update objects

const users = [{ name: "David" }, { name: "Nole" }];

const usersWithIDs = users.map((user, i) => ({
  name: user.name,
  id: `${user.name}-${i}`
}));

console.log(usersWithIDs);
// {name: "David", id: "David-0"}
// {name: "Nole", id: "Nole-1"}
