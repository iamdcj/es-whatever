# Default Function Parameters

Default Function arguments provide the ability to ensure named function arguments are initialized with a value when the function is invoked.

This feature is useful when a function is called without all the parameters being passed, or when a parameter is passed as `undefined`.

### Parameter Absence

The following function requires two parameters in order to do its computation.

```
const adder = (x,y) => x + y;

```

If the function is called with only one of the two required parameters, the result will likely be undesired;

```
adder(2)

// NaN
```

**This is because function parameters default to `undefined`**

If we modify our function parameters by setting a default value;

```
const adder = (x, y = 1) => x + y;

```

We can save face, and get a better return value;

```
adder(2)

// 3
```

### `undefined` parameter values

If a parameter is passed to a function with the value of `undefined`, the stated default paramter will be used instead;

```

adder(5, undefined)

// 6

```

### Falsy values

If `undefined` is passed, then default parameters will kick into action 👆, however that isn't the case for other falsy values, e.g. `null` and empty strings `''`.

#### `null`

If `null` is passed for the second argument, then it will persist as a value whenever it is referenced in the function body;

```
adder(5, null)

// 5

```

_Default Parameter was not used in place of `null`_

#### Empty String

If we pass an empty string, that empty string will also persist as a value;

```
adder(5, '')

// '5'
```

The string is results in type coercion, returning a string(`'5'`) from the computation;

```
typeof adder(5, '')

// string

```
