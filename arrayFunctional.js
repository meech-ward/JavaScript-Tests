function newArrayFunctional() {
  const arrayFunctional = {
    cbCallTimes: 0,
    cbCallItems: [],
    returnCbFunction: function() {

    },
    cbFunction: function(item) {
      this.cbCallTimes++;
      this.cbCallItems.push(item);
      return this.returnCbFunction(item);
    }
  }
  arrayFunctional.cbFunction = arrayFunctional.cbFunction.bind(arrayFunctional);
  return arrayFunctional;
}
