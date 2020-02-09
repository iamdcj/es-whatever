# The `map` Method

The `map` helper method iterates(maps) over a given array, returning a new array containing any changes resulting from the callback function working on the original arrays values.

**Its purpose is to modify records in a collection of data**;

```
const numbers = [1,2,3,4];

numbers.map(n => n * 2);

// [2,4,6,8];

**Map always returns a new array, leaving the original untouched.**

```

## Usage

The `map` helper should be used when you want to manipulate some/all items in array, and return a new array with these modifications present.

It is often use to modify records in some fashion, or to pluck a particular property from a collection of data.

#### Modify Records

The following example build on-top of the original array, adding an `id` for each `user` in `users`;

```
const users = [{ name: "David" }, { name: "Nole" }]

const usersWithIDs = users.map((user, i) => ({
  name: user.name,
  id: `${user.name}-${i}`
}))

console.log(usersWithIDs);

// {name: "David", id: "David-0"}
// {name: "Nole", id: "Nole-1"}
```

#### Pluck Property

The following example extracts the `surname` property from each `person` in `persons`; building an array of `surnames`;

```
const persons = [
  { name: "Nole", surname: "Jones" },
  { name: "Luis", surname: "Enrique" }
];

const surnames = persons.map(({ surname }) => surname);

console.log(surnames);
// ["Jones", "Enrique"]
```

Do not use map for the following:

- Looping over an array, but not using the returned array.
- the call function does not return anything.

There are more generic constructs for simply iterating over arrays, e.g. [forEach](../forEach).

### Sparse Arrays and Empty Values

The `map` helper deals with sparse arrays and empty values in a way which is worthing remembering.

#### Sparse Arrays

It respects sparse arrays, that is any falsy value in an array will persist within the new array;

```
const names = ["Steffie", , "Nole"];

const fullNames = names.map(firstName => `${firstName} Jones`);

console.log(fullNames);
// ["Steffie Jones", empty, "Nole Jones"]
```

#### Empty Values

If the callback function does not return a value, it will always return `undefined` for item it iterates over;

```
const initials = ["S", "D", "N"];
const fullInitials = initials.map(initial => {
  `${initial} J`;
});

console.log(fullInitials);
///[ undefined, undefined, undefined ]
```

**_Always_ return a value from the callback function**

---

#### References

- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
