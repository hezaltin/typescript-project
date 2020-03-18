"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = (function () {
    function Department(id, name, details, type) {
        this.id = id;
        this.departmentName = name;
        this.departmentDetails = details;
        this.departmentType = type;
        console.log(name);
    }
    Department.prototype.getType = function () {
        return this.departmentType;
    };
    Department.prototype.setType = function (type) {
        this.departmentType = type;
    };
    Department.prototype.describe = function () {
        console.log('Department:', this.departmentName);
    };
    return Department;
}());
var DepartmentMode = (function (_super) {
    __extends(DepartmentMode, _super);
    function DepartmentMode(id) {
        return _super.call(this, id, 'IT', ['max', 'millian'], 'Engineering') || this;
    }
    DepartmentMode.prototype.abstractDescribe = function () {
        console.log("Department Mode Id is " + this.id);
    };
    return DepartmentMode;
}(Department));
var DepartmentType = (function (_super) {
    __extends(DepartmentType, _super);
    function DepartmentType(id) {
        return _super.call(this, id, 'ECE', ['Michael', 'Hez'], 'Engineering') || this;
    }
    DepartmentType.prototype.abstractDescribe = function () {
        console.log("Department Mode Type is " + this.id);
        console.log(this);
    };
    return DepartmentType;
}(Department));
var departmentMode = new DepartmentMode('d1');
console.log(departmentMode);
console.log(departmentMode.abstractDescribe());
var instantiateDepartmentType = new DepartmentType('d2');
console.log(instantiateDepartmentType.abstractDescribe());
