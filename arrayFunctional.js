function newArrayFunctional() {
  const arrayFunctional = {
    cbCallTimes: 0,
    cbCallItems: [],
    cbFunction: function(item) {
      this.cbCallTimes++;
      this.cbCallItems.push(item);
    }
  }
  arrayFunctional.cbFunction = arrayFunctional.cbFunction.bind(arrayFunctional);
  return arrayFunctional;
}
