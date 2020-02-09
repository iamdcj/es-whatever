// Simple Iterations

// Logging values
const ints = [1, 2, 3];

ints.forEach(int => {
  console.log(int);
});

// Updating a tracker
let sum = 0;

const addit = number => (sum += number);

ints.forEach(number);
console.log(sum); // 6

// Delete all
const selectedIDs = ["asdsa", "wqwwe", "bfdbd"];

function deleteItems(item) {
  // ...some aynsc deletion code
}

selectedIDs.forEach(deleteItems);
