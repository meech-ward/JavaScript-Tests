const tests = {
  'calculate-values': () => {
    describe('calculateValues', function () {
      it('should return 1 when given ["1"]', function () {
        chai.expect(testFunction(["1"])).to.equal(1);
      });
      it('should return 1 when given ["1", "+", "0"]', function () {
        chai.expect(testFunction(["1", "+", "0"])).to.equal(1);
      });
      it('should return 2 when given ["1", "+", "1"]', function () {
        chai.expect(testFunction(["1", "+", "1"])).to.equal(2);
      });
      it('should return 0 when given ["1", "-", "1"]', function () {
        chai.expect(testFunction(["1", "-", "1"])).to.equal(0);
      });
    });
  },
  'count-letters': () => {
    it('should return {} when given ""', function () {
      chai.assert.deepEqual(testFunction(""), {});
    });
    it('should return {"a": 1} when given "a"', function () {
      chai.assert.deepEqual(testFunction("a"), {"a": 1});
    });
    it('should return {"a": 2} when given "aa"', function () {
      chai.assert.deepEqual(testFunction("aa"), {"a": 2});
    });
    it('should return {"a": 1, "b": 1} when given "ab"', function () {
      chai.assert.deepEqual(testFunction("ab"), {"a": 1, "b": 1});
    });
  },
  'for-each': () => {
    it('should call the function n times', function () {
      [[1], [1,2], [1,2,3,20]].forEach(array => {
        const arrayFunctional = newArrayFunctional();
        testFunction(array, arrayFunctional.cbFunction);
        chai.assert.deepEqual(arrayFunctional.cbCallTimes, array.length);
      });
    });
    it('should pass in the current array value each time', function () {
      [[1], [1,2], [1,2,3,20]].forEach(array => {
        const arrayFunctional = newArrayFunctional();
        testFunction(array, arrayFunctional.cbFunction);
        chai.assert.deepEqual(arrayFunctional.cbCallItems, array);
      });
    });
  },
  'array-map': () => {
    it('should call the function n times', function () {
      [[1], [1,2], [1,2,3,20]].forEach(array => {
        const arrayFunctional = newArrayFunctional();
        testFunction(array, arrayFunctional.cbFunction);
        chai.assert.deepEqual(arrayFunctional.cbCallTimes, array.length);
      });
    });
    it('should pass in the current array value each time', function () {
      [[1], [1,2], [1,2,3,20]].forEach(array => {
        const arrayFunctional = newArrayFunctional();
        testFunction(array, arrayFunctional.cbFunction);
        chai.assert.deepEqual(arrayFunctional.cbCallItems, array);
      });
    });
    it('should create a new array from the return value', function () {
      [[1], [1,2], [1,2,3,20]].forEach(array => {
        const arrayFunctional = newArrayFunctional();
        const double = item => item*2;
        arrayFunctional.returnCbFunction = double;
        const mappedArray = array.map(double);
        const result = testFunction(array, arrayFunctional.cbFunction);
        chai.assert.deepEqual(mappedArray, result);
      });
    });
  },
  'array-filter': () => {
    it('should call the function n times', function () {
      [[1], [1,2], [1,2,3,20]].forEach(array => {
        const arrayFunctional = newArrayFunctional();
        testFunction(array, arrayFunctional.cbFunction);
        chai.assert.deepEqual(arrayFunctional.cbCallTimes, array.length);
      });
    });
    it('should pass in the current array value each time', function () {
      [[1], [1,2], [1,2,3,20]].forEach(array => {
        const arrayFunctional = newArrayFunctional();
        testFunction(array, arrayFunctional.cbFunction);
        chai.assert.deepEqual(arrayFunctional.cbCallItems, array);
      });
    });
    it('should create a new array with all elements that pass the test implemented by the provided function', function () {
      [[1], [1,2], [1,2,3,20]].forEach(array => {
        const arrayFunctional = newArrayFunctional();
        const filter = item => item>2;
        arrayFunctional.returnCbFunction = filter;
        const filteredArray = array.filter(filter);
        const result = testFunction(array, arrayFunctional.cbFunction);
        chai.assert.deepEqual(filteredArray, result);
      });
    });
  }
}