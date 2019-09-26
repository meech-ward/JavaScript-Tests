$(() => {
  $('select').formSelect();
});

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

