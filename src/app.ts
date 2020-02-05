// const person: Person = {
//     name:'michael',
//     age:30
// }

// console.log(person.mickname)



// interface Person{
//         name:string;
//         age:number;
//         mickname?:string;
// }

const userName = 'Mike';
console.log(userName);
enum Role { 
        ADMIN = 100,
        READ_ONLY,
        AUTHOR 
} 

const person = {
    name:'michael',
    age:30,
    role:Role.ADMIN
}

console.log(person.role)