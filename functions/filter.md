# forEach()

Write a function called `filter()` that accepts an array and a callback function and **creates a new array** with all elements that pass the test implemented by the provided function. This is basically a copy of the built in `Array.prototype.filter` method.

**DON'T USE `Array.prototype.filter`**

## Example:

**JavaScript:**

```js
const values = [-1, -2, 3, 1];
const positiveValues = filter(values, function(item) {
  return item > 0;
});
console.log(positiveValues);
```

**Output:**

```js
[3, 1]
```
