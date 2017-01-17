var greet1 = require("./greet1.js");
greet1();


var greet2 = require("./greet2.js").greet;
greet2();


var greet3 = require("./greet3.js");
greet3.greet();

var Greet4 = require("./greet4.js");

var gtr = new Greet4();
gtr.greet();

var greet5 = require("./greet5.js");

greet5.greet();
