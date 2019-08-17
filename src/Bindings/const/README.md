# Const

The `const` statement is used to declare constant bindings in a program.

Constant declarations must be initialized; you cannot simply declare a `const`, it must be assigned a value on creation.

## **Scope**

`const` declarations can either be scoped globally, or local to its wrapping function or block.

### **Global Scope**

Constants can be declared in the global lexical environment;

```
const Dave = "David";
```

However they do not become members of the `window` object;

```
console.log(window.Dave); // undefined
```

### **Function Scope**

Any `const` declared in a function body are scoped to that function's lexical environment, and its descendant lexical environments;

```
function test() {
  const foo = "bar"
  console.log(foo);

  function test2() {
    console.log(foo);

  }

  test2();
}
test()

// bar
// bar
```

### **Block Scope**

Any `const` declared in a block are scope to that particular block;

```
{
  const Dave = "David";
}

console.log(Dave) Uncaught ReferenceError: Dave is not defined
```

Unlike `var` statements which do leak outside of blocks;

```
{
  var Dave = "David";
}

console.log(Dave) // David
```

This provides a convenient way to shield bindings from the global scope, opposed to using an `IIFE` to initialize the program.

## **Reassignment and Redeclaration**

Constants cannot be reassigned or redeclared.

### **Reassignment**

```
const name = "David";

name = "David Jones"; // Uncaught TypeError: Assignment to constant variable.
```

### **Redeclaration**

```
const name = "David";

const name = "David Jones"; // Uncaught SyntaxError: Identifier 'name' has already been declared
```

## **Mutations**

Constants cannot be reassigned or redeclared, however if they are initialized with a composite value, the contents of the compiste, e.g. an array or object, can be mutated.

### **Objects**

```
const testObj = {
  name: "David";
}

console.log(testObj.name) // David

testObj.name = "David Jones";

console.log(testObj.name) // David Jones

```

### **Arrays**

```
const testArray = [1, 2, 3, 4]

console.log(testArray) // (4) [1, 2, 3, 4]

testArray.push(5);

console.log(testArray) // (5) [1, 2, 3, 4, 5]
```

`const` declarations are affected by the `temporal dead zone`.

---

##### References and Resources

- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const˛¸
