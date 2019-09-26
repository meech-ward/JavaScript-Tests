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
  }
}