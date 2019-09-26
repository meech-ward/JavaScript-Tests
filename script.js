$(() => {
  $('select').formSelect();
});

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

function runTest(func, code) {
  eval(`window.testFunction = ${code}`);
  console.log(func);
  tests[func]();
}

const $functionSelect = $("#function-select");

$("#test-form").on("submit", function(event) {
  $(this).remove();
  event.preventDefault();
  mocha.setup('bdd');
  runTest($functionSelect.val(), editor.getValue());
  mocha.run();
});

