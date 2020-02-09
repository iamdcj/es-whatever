# The `map` Method

The `map` helper method iterate over a given array, returning a new array containing any changes resulting from the callback function working on the original arrays values.

```
const numbers = [1,2,3,4];

numbers.map(n => n * 2);

// [2,4,6,8];

```

## Usage

The `map` helper should be used when you want to manipulate some/all items in array, and return another array with these modifications.

Do not use map for the following:

- Looping over an array, but not using the returned array.
- the call function does not return anything.

There are more generic constructs for simply iterating over arrays, e.g. [forEach](../forEach).

---

#### References

- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
