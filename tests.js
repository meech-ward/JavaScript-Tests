const tests = {
  'calculate-values': () => {
    describe('calculateValues', function () {
      it('should correctly calculate all the values in the array', function () {
        chai.expect(testFunction(["1"])).to.equal(1);
        chai.expect(testFunction(["1", "+", "0"])).to.equal(1);
        chai.expect(testFunction(["1", "+", "1"])).to.equal(2);
        chai.expect(testFunction(["1", "-", "1"])).to.equal(0);
      });
    });
  },
  'count-letters': () => {
    it('should correctly count the number of letters in the string', function () {
      chai.assert.deepEqual(testFunction(""), {});
      chai.assert.deepEqual(testFunction("a"), {"a": 1});
      chai.assert.deepEqual(testFunction("aa"), {"a": 2});
      chai.assert.deepEqual(testFunction("ab"), {"a": 1, "b": 1});
    });
  }
}