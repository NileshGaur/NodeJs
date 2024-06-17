// Modules - Encapsulated Code (only share minimum)
// CommonJS, every file in node is module (by default)

const names = require("./4-names");

// const {john, peter} = require("./4-names");

const sayHi = require("./5-utils");

sayHi("susan");
sayHi(names.john);
sayHi(names.peter);

console.log("-----------------------------------------------");

const data = require("./6-alternative-flavour.js");
console.log(data);

console.log("-----------------------------------------------");

// when you require a file, it actually invokes the code in that file
require("./7-mind-granade");
