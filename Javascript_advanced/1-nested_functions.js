var globalVariable = "Welcome";
function outer() {
  alert(globalVariable);
  var course = "Holberton";
  function inner() {
    alert(globalVariable + course);
    var exclamation = '!';
    function incpetion() {
      alert(globalVariable + course + exclamation)
    }
    incpetion();
  }
  inner();
}
outer();
