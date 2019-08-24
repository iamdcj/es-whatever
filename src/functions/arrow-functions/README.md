# Arrow Functions

Arrows functions are a syntatical succint variant of regular functions in JavaScript.

They do not behave exactly as per regular functions, but do provide a faster method of declaring resuable chunks of executional code.

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

## Binding

They don't just differ syntatically from regular functions, there are a number of differences in relation to bindings.

### this

They do not bind to a new context when executed, i.e. it doesn't have its own `this`.

#### Methods

Arrow functions are not good candidates for object methods.

### arguments

Arrow functions do not possess an `arguments` object.

### new

You cannot use arrow functions as constructors functions in your applications.

### prototype

Arrows do not possess a `prototype` object reference.
