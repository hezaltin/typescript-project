"use strict";
let addValue;
addValue = (n1, n2) => {
    return n1 + n2;
};
class Persons {
    constructor(n) {
        this.age = 30;
        this.extendsName = 'Hello';
        this.multipleExtendsName = 'lowes';
        this.name = n;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
}
let users = new Persons('Welcone');
console.log(users);
let user1;
user1 = {
    name: 'Mike',
    age: 30,
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
};
user1.greet('Hi there this is ');
