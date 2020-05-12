# The `reduce` Method

The `reduce` helper method iterates over an array, running a callback function(reducer) on each item in the array, which returns a value to be added to the `reduce` accumulator.

```
const adder = [1,2,3,4].reduce((acc, val) => {
  return acc + val;
}, 0)

console.log(adder) // 10
```

---

#### References

- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
