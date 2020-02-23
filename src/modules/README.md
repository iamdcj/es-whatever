# Modules

A JavaScript module is a chunk of JS code living in its own file, containing various bindings, e.g. functions and regular variable declarations.

**`a-module,js`**
This is an example of a module file; it contains multiple bindings, however nothing is exported from this module.

```
const userName = "David";

const logUserHelper = () => {
  console.log(userName);
}
```

The code within a module is local to that module, and cannot be accessed by other modules in the application - it is only when we export something from a module that the code becomes 'public'.

## `export` and `import`

It is commonplace for modules to be referenced in other parts of an application, whether that be a part of a module, multiple parts of a module, or all parts of a module. **It is this export/import functionality that makes modules useful.**

**`a-module,js`**
If we add export statements to our module bindings, we can then use them elsewheere in the application.s

```
const userName = "David";

export const logUserHelper = () => {
  console.log(userName);
}
```

**`another-module.js`**

```
import { logUserHelper } from './a-module';

logUserHelper(); // "David"
```

### Named vs. Default

There are two ways to of exporting a module; it can be a named export, or you can export some as the `default`. **Any export, named or defult, must be a top-level item in the module file; you cannot export bindings that live lexically within a function.**

#### Named

A named export is defined using the `export` statement prior to a variable or function declaration

```
export const myFunction = () => { //some code... }
```

By default the name of the export is taken from the binding identifier, in the above case `myFunction`. It is this identfier we use when importing from something from the module;

```
import { myFunction } from './somewhere';

myFunction();
```

A module can have multiple named exports; these exports are imported using the object destructuring syntax `{ something, somethingElse}`.

#### Default

A default export is the usually the main thing to be exported from a module - the `default` function/binding. If you wrap some API in a module, and it contains numerous functions and variables, but you only want to expose the main interface, the default export comes into its own.

```
const doThis = () => { ... }
const doThat = () => { ... }

function doAllTheThings() {
  doThis()
  doThat()
}

export default doAllTheThings;

```

**A module can only have one `default` export.**

Importing a `default` export isn't achieved using the destructuring syntax, as per named exports, but a single identifiers; `export default theMainTing`.

#### Handling identifier conflicts

##### Static and Dynamic

All of the above pertains to 'statically' imported module code, but modules can be imported dynamically using [dynamic imports](dynamic-module-loading).

## **Benefits**

- Modules allow for a cleaner, better-structured codebase.
- Each module is automatically set to 'strict' mode.

## **Modules Background**

Modular javaScript isn't anything new in JS applications, however prior to ES2015 there wasn't native support for modules; developers had to code a module pattern themselves, or use a third-party library to provide javaScript modules.

### Module Pattern

### NPM

Node Package Manager is the defacto package manager for JavaScript; it runs on node and contains a database of javaScript packages available for download and utilisation within applications.

The packages we download are essentially contain a bunch of exported modules.

---

#### Resources

- [MDN Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [ES6 In Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/)
