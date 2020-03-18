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

// Tuple ==> fixed array length eg) [1,2] this one is fiexd which should not update as different type(push is excepton)

const userwithTuple:{
    name:string;
    age:number;
    hobbies:string[],
    roles:[number,string] // Tuple
} = {
    name:'',
    age:30,
    hobbies:['Coding','Driving'],
    roles:[0,'Entrepreneur']
}