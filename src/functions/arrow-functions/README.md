# Arrow Functions

Arrows functions are a less verbose variant of regular functions in JavaScript.

## Syntax

The syntactical difference makes for shorter function expressions;

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

The main syntactically difference is the loss of the `function` keyword.

### Implicit Returns

The shorter syntax becomes more prevalent when implicit returns are used;

```
const sum = (x, y) => x + y;
```

### Return objects implicitly

They are support implicitly returning object literal as a value;

const user = () => ({
name: "David",
age: 32
})
