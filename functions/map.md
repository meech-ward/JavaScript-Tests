# forEach()

Write a function called `map()` that accepts an array and a callback function and **creates a new array** with the results of calling a provided function on every element in the array. This is basically a copy of the built in `Array.prototype.map` method.

**DON'T USE `Array.prototype.forEach`**

## Example:

**JavaScript:**

```js
const values = [1, 2, 3];
const valuesDoubled = map(values, function(item) {
  return item*2;
});
console.log(valuesDoubled);
```

**Output:**

```js
[1, 4, 6]
```
