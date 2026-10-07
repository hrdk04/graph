"use strict";

var student = "Hardik";
var greet = function greet() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Student";
  return "Hello ".concat(name);
};
console.log(greet(student));
console.log(greet());