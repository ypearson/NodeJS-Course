// function greeting() {
//     console.log("hi");
// }
// greeting();

// function mytest(fn) {
//     fn();
// }

// mytest(greeting);

// var fs = mytest;

// fs(greeting);

// mytest(function() { console.log("HelloThere");});

// var greet = require('./greet');

// greet();

// // object literal has inspired JSON, Javascript Object Notation
// var person = {
//     firstname: 'John',
//     lastname: 'Doe',
//     greet: function () {
//         console.log("Hello, " + this.firstname + ' ' + this.lastname);
//     }
// }

// person.greet();

// console.log(person['firstname']);

// function constructor
function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname  = lastname;

}

Person.prototype.greet = function () {
    console.log('hello ' + this.firstname + ' ' + this.lastname);
}

var john = new Person("John", "Doe");
var jane = new Person("Jane", "Doe");
john.greet();
jane.greet();

console.log(john.__proto__);
console.log(jane.__proto__);


//pass by reference
function change(b) {
    b=2;
}

var a = 1;
change(a);
console.log(a);

// pass by reference

function changeObj(d) {
    d.prop1 = function(){};
    d.prop2 = {};
}

var c = {};
c.prop1 = {};
changeObj(c);
console.log(c);



(function (lastname) {

    // var lastname = "Doe";
    console.log(lastname);

}("DOE"));





