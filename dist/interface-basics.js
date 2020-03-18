"use strict";
var addValue;
addValue = function (n1, n2) {
    return n1 + n2;
};
var Persons = (function () {
    function Persons(n) {
        this.age = 30;
        this.extendsName = 'Hello';
        this.multipleExtendsName = 'lowes';
        this.name = n;
    }
    Persons.prototype.greet = function (phrase) {
        console.log(phrase + " " + this.name);
    };
    return Persons;
}());
var users = new Persons('Welcone');
console.log(users);
var user1;
user1 = {
    name: 'Mike',
    age: 30,
    greet: function (phrase) {
        console.log(phrase + " " + this.name);
    }
};
user1.greet('Hi there this is ');
