"use strict";
var _a, _b;
var el = {
    name: 'Mike',
    privileage: ['user'],
    startDate: new Date()
};
console.log(el);
function addNumber(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
console.log(addNumber(4, 4));
function printElevatedEmployee(emp) {
    console.log('Emp Name', emp.name);
    if ('privileage' in emp) {
        console.log('Emp Privelage', emp.privileage);
    }
    if ('startDate' in emp) {
        console.log('Emp StartDate', emp.startDate);
    }
}
console.log({ name: 'Mike', startDate: new Date() });
var Car = (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log('driving Car');
    };
    return Car;
}());
var Truck = (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log('driving Truck');
    };
    Truck.prototype.loadAmount = function (amount) {
        console.log('driving Truck amount of ', amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadAmount(100);
    }
}
console.log(useVehicle(v2));
function movingAnimal(animal) {
    var speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log('moving speed is ', speed);
}
movingAnimal({ type: 'bird', flyingSpeed: 100 });
var getHtmlParagraph = document.getElementById('userPara');
var getInput = document.getElementById('input');
var getAnotherInput = document.getElementById('inputAnother');
var getTruthy = document.getElementById('getTruthy');
if (getTruthy) {
    getTruthy.value = 'Get Truthy';
}
getInput.value = 'Hello World';
getAnotherInput.value = 'Another Hello World';
var errorTypes = {
    email: 'Email is not valid',
    userName: 'must Enter user name'
};
function addNumberOverloads(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
var functionOverloads = addNumberOverloads(10, '10');
var fetchUserData = {
    id: 'u1',
    name: 'Mike',
    job: { title: 'own company', descripttion: 'my own brand' }
};
console.log((_b = (_a = fetchUserData) === null || _a === void 0 ? void 0 : _a.job) === null || _b === void 0 ? void 0 : _b.title);
var userInput = null;
var storedData = (userInput !== null && userInput !== void 0 ? userInput : 'Default');
console.log(storedData);
