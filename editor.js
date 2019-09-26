// pass options to ace.edit
var editor = ace.edit("editor", {
  mode: "ace/mode/javascript",
  selectionStyle: "text"
})
// use setOptions method to set several options at once
editor.setOptions({
  autoScrollEditorIntoView: true,
  copyWithEmptySelection: true,
});
// use setOptions method
editor.setOption("mergeUndoDeltas", "always");

// some options are also available as methods e.g. 
editor.setTheme("ace/theme/twilight");

const code = localStorage.getItem("code");
editor.setValue(code || "// Write your code here");

editor.session.on('change', function(delta) {
  localStorage.setItem("code", editor.getValue());
});