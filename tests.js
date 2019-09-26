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
  }
}