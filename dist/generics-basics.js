"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var asignArray = [];
asignArray[0] = 'name';
var asignPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('This is a Promise');
    }, 2000);
});
asignPromise.then(function (data) {
    var splitData = data.split(' ');
    console.log(splitData);
});
function merge(objA, objB) {
    return __assign(__assign({}, objA), objB);
}
var callMerge = merge({ name: 'Mike', occupation: 'own' }, { age: 30 });
function mergeConstraints(objA, objB) {
    return __assign(__assign({}, objA), objB);
}
var callMergeConstraints = mergeConstraints({ name: 'Mike', occupation: 'own' }, { age: 30 });
function anotherGenericType(element) {
    var descriptionText = 'Got No Element';
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
