# Variables

ES2015 introduces two new variable statements for use in JavaScript applications;

- [`const`](./const)
- [`let`](./let)

These new statements provide the following to our JavaScript applications;

### **Semantics**

`const` and `let` possess intrinsic semantic value when authoring applications; they provide clarity on what is likely to happen/not happen with the variable declarations, and the values inside of them;

```
const foo = "bar"
```

`foo` has a value which will not change later in the application's lifecycle.

```
let bar
```

`bar` does not yet hold a value, but will later in the application's lifecycle.

### **Behaviour**

The semantics are backed-up by additional behaviour; `const` declarations cannot be reassigned, whereas `let` declarations signify the intent to reassign.

### **Scoping Rules**

Both `const` and `let` introduce block scoped bindings to JavaScript applications.

---

#### Does `var` have a future?

It depends on your stance, some use `var` for variables shared across many scopes, others simply don't bother with it at all. **I don't use it, I don't see a good reason to.**
