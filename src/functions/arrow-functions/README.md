# Arrow Functions

Arrows functions are a less verbose variant of regular functions in JavaScript.

## Syntax

The syntactical differences make for shorter function expressions;

##### Arrow

```
const sum = (x, y) => {
  return x + y;
}
```

##### Regular

```
const sum = function(x, y) {
  return x + y;
}
```

The main syntactically difference in the example above is the loss of the `function` keyword, however arrow functions do not require a regular block body, a more concise body can be utilised, this approach relies on implicit `return` values.

### Implicit Returns

The loss of the block body provides an even shorter function syntax - the following `function` does not have a regular block body, but uses an implicit return;

```
const sum = (x, y) => x + y;

sum(1,1); // 2
```

### Return objects implicitly

They are support implicitly returning object literal as a value;

const user = () => ({
name: "David",
age: 32
})
