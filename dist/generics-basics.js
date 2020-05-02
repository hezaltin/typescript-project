"use strict";
const asignArray = [];
asignArray[0] = 'name';
const asignPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is a Promise');
    }, 2000);
});
asignPromise.then((data) => {
    const splitData = data.split(' ');
    console.log(splitData);
});
function merge(objA, objB) {
    return Object.assign(Object.assign({}, objA), objB);
}
const callMerge = merge({ name: 'Mike', occupation: 'own' }, { age: 30 });
function mergeConstraints(objA, objB) {
    return Object.assign(Object.assign({}, objA), objB);
}
const callMergeConstraints = mergeConstraints({ name: 'Mike', occupation: 'own' }, { age: 30 });
function anotherGenericType(element) {
    let descriptionText = 'Got No Element';
    if (element.length === 1) {
        descriptionText = 'Got 1 Element';
    }
    else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' Elements';
    }
    return [element, descriptionText];
}
console.log(anotherGenericType('Hi There !'));
function extractAndConvert(obj, key) {
    return 'Value Of Object is ' + obj[key];
}
extractAndConvert({ name: 'Mike' }, 'name');
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === (-1)) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getData() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Mike');
textStorage.addItem('Hezaltin');
textStorage.removeItem('Mike');
console.log(textStorage.getData());
const storageWithPrimitive = new DataStorage();
storageWithPrimitive.addItem('Mike');
storageWithPrimitive.addItem(30);
storageWithPrimitive.addItem(true);
storageWithPrimitive.removeItem('Mike');
console.log(storageWithPrimitive.getData());
function createCourseGoal(title, description, courseUntill) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.courseUntill = courseUntill;
    return courseGoal;
}
const readOnlyArray = ['Mike', 'Hezaltin'];
