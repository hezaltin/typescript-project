"use strict";
var userName = 'Mike';
console.log(userName);
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 100] = "ADMIN";
    Role[Role["READ_ONLY"] = 101] = "READ_ONLY";
    Role[Role["AUTHOR"] = 102] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: 'michael',
    age: 30,
    role: Role.ADMIN
};
console.log(person.role);
var userwithTuple = {
    name: '',
    age: 30,
    hobbies: ['Coding', 'Driving'],
    roles: [0, 'Entrepreneur']
};
