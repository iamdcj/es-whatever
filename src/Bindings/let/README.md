# let

The `let` statement is used to declare local bindings in a program.

Let declarations aren't required to be initialized when declaring; a `let` binding can be created without a value.

### Scope
`let` declarations can either be scoped globally, or local to its wrapping function or block.

__Global__
`let`s can be declared in the global lexical environment;
```
let Dave = "David";
```

However they do not become members of the `window` object;
```
console.log(window.Dave); // undefined
```

__Function__
Any `let` declared in a function body are scoped to that function's lexical environment, and its descendant lexical environments;
```
function test() {
  let foo = "bar"
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

__Block__
Any `let` declared in a block are scope to that particular block;
```
{
  let Dave = "David";
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

### Reassign / Redeclare 
`let`s can be reassigned new values freely in a particular lexical environment;

__Reassignment__
```
let name = "David";
console.log(name); // David

name = "David Jones"; 
console.log(name); // David Jones
```

__Redeclaration__
`let`s cannot be redeclared more than once in a particular lexical environment;
```
let name = "David";

let name = "David Jones"; // Uncaught SyntaxError: Identifier 'name' has already been declared
```

`let` declarations are affected by the `temporal dead zone`.

### Differences to `var`
The `let` statement may first appear to behave exactly like a `var` statement, however they do behave differently in relation to scope, and they are initialised at different points.

#### Scoping differences
* `let` statements will not be attached to the global object, `var`s will.
* `var` bindings can be accessed outside of their wrapping block`{}`, `let`s are scoped to the block, and any child blocks/functions.



---
##### References and Resources
* [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let˛¸