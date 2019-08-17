# let

The `let` statement is used to declare local bindings in a program, and our mainly used when a binding will likely be initialized and/or reassigned at a later point in the programs lifecycle - `let` declarations aren't required to be initialized when declaring; a `let` binding can be created without a value.

### Reassignment

`let`s can be reassigned new values freely in a particular lexical environment;

```
let name = "David";
console.log(name); // David

name = "David Jones";
console.log(name); // David Jones
```

### Redeclaration

`let`s cannot be redeclared more than once in a particular lexical environment;

```
let name = "David";
let name = "David Jones"; // Uncaught SyntaxError: Identifier 'name' has already been declared
```

**`switch` statements**

```

```

`let` declarations are affected by the `temporal dead zone`.

### Scope

`let` declarations can either be scoped globally, or local to its wrapping function or block.

**Global**
`let`s can be declared in the global lexical environment;

```
let Dave = "David";
```

However they do not become members of the `window` object;

```
console.log(window.Dave); // undefined
```

**Function**
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

**Block**
Any `let` declared in a block are scope to that particular block;

```
{
  let Dave = "David";
}

console.log(Dave) Uncaught ReferenceError: Dave is not defined
```

##### Shadowing

Bindings can be shadowed in nested blocks;

```
{
  let foo = "bar";
  {
    let foo = "baz";
    console.log(foo) // baz
  }
  console.log(foo) // bar
}

console.log(Dave) Uncaught ReferenceError: Dave is not defined
```

This provides a convenient way to create privacy in our programs by using `let` bindings, opposed to running an `IIFE` to shield the program bindings from the global lexical environment.

#### Differences to `var`

`let` statements will not be attached to the global object, `var`s will.

```
let foo = "bar";
console.log(window.foo); // undefined

var bar = "foo";
console.log(window.bar); // foo
```

`var` bindings can be accessed outside of their wrapping block`{}`, `let`s are scoped to the block, and any child blocks/functions.

```
function foo() {

  {
    let baz = "bar";
    var bar = "foo";
  }
  console.log(bar); // foo
  console.log(baz);

}
foo();
// foo
// Uncaught ReferenceError: baz is not defined
```

---

##### References and Resources

- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let˛¸
