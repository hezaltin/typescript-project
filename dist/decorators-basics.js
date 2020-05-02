"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(logString) {
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
function WithTemplate(template, hookId) {
    return function (constructor) {
        const hookElem = document.getElementById(hookId);
        const p = new constructor();
        if (hookElem) {
            hookElem.innerHTML = template;
            hookElem.querySelector('h1').textContent = p.name;
        }
    };
}
let Person = class Person {
    constructor() {
        this.name = 'Michael';
        console.log('creating person object');
    }
};
Person = __decorate([
    Logger('LOAD_PERSONS')
], Person);
let WithTemplatePerson = class WithTemplatePerson {
    constructor() {
        this.name = 'Michael';
        console.log('creating person object');
    }
};
WithTemplatePerson = __decorate([
    WithTemplate('<h1>Hello World!!</h1>', 'templateId')
], WithTemplatePerson);
const persons = new Person();
console.log(persons);
