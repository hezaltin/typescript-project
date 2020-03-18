
// describe how the object should be
interface Person{
    name:string;
    age:number;
    greet(phrase:string):void;
}

interface ExtendsName{
    extendsName:string
}

//custom type

//type AddFns = (a:number,b:number) => number;

interface AddFn{
    (a:number,b:number):number;
}

let addValue: AddFn;

addValue = (n1:number,n2:number)=>{
    return n1+n2
}

interface MultipleExtendsName {
    multipleExtendsName:string
}
interface Greetable extends ExtendsName,MultipleExtendsName{
    readonly name:string;
    greet(type:string):void;
}

class Persons implements Greetable{
    name:string;
    age:number = 30;
    extendsName:string = 'Hello';
    multipleExtendsName:string = 'lowes';
    constructor(n:string){
        this.name = n;
        
    }

    greet(phrase:string){
        console.log(`${phrase} ${this.name}`)

    }
}
let users:Greetable = new Persons('Welcone')

console.log(users)

let user1:Person;

user1 = {
    name:'Mike',
    age:30,
    greet(phrase:string){
        console.log(`${phrase} ${this.name}`)
    }
}

user1.greet('Hi there this is ')