
var greet = function() {
	console.log("Hello world");
}

function Greetr() {
	this.greeting = "hello world!";
	this.greet = function() {
		console.log(this.greeting);
	}
}

module.exports = new Greetr();

