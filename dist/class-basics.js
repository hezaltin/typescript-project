"use strict";
class Department {
    constructor(id, name, details, type) {
        this.id = id;
        this.departmentName = name;
        this.departmentDetails = details;
        this.departmentType = type;
        console.log(name);
    }
    getType() {
        return this.departmentType;
    }
    setType(type) {
        this.departmentType = type;
    }
    describe() {
        console.log('Department:', this.departmentName);
    }
}
class DepartmentMode extends Department {
    constructor(id) {
        super(id, 'IT', ['max', 'millian'], 'Engineering');
    }
    abstractDescribe() {
        console.log(`Department Mode Id is ${this.id}`);
    }
}
class DepartmentType extends Department {
    constructor(id) {
        super(id, 'ECE', ['Michael', 'Hez'], 'Engineering');
    }
    abstractDescribe() {
        console.log(`Department Mode Type is ${this.id}`);
        console.log(this);
    }
}
const departmentMode = new DepartmentMode('d1');
console.log(departmentMode);
console.log(departmentMode.abstractDescribe());
const instantiateDepartmentType = new DepartmentType('d2');
console.log(instantiateDepartmentType.abstractDescribe());
