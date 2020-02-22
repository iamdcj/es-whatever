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
