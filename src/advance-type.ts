//intersection types

type Admin = {
    name:string;
    privileage:string[]
}

type Employee = {
    name:string;
    startDate:Date;
}

type ElevatedEmployee = Admin & Employee;

const el:ElevatedEmployee = {
    name:'Mike',
    privileage:['user'],
    startDate:new Date()
}

console.log(el)

type Combine = string | number; // esp for union types
type Numeric = number | boolean;

type Universal = Combine & Numeric;

// Type Guards ==> will check the type for union types

function addNumber(a:Combine, b:Combine){
    if(typeof a=== 'string' || typeof b=== 'string'){ //for normal varliable use typeof as Type Guard
        return a.toString() + b.toString();
    }

    return a + b;
   
}
console.log(addNumber(4,4));

type UnknownEmployee = Employee | Admin  // esp for union types

function printElevatedEmployee(emp:UnknownEmployee){
    console.log('Emp Name', emp.name);
    if('privileage' in emp){
        console.log('Emp Privelage', emp.privileage)
    }

    if('startDate' in emp){ //for object use in as Type Guard
        console.log('Emp StartDate', emp.startDate);
    }
    
}

console.log({name:'Mike',startDate:new Date()});

class Car{
    drive(){
        console.log('driving Car')
    }
}

class Truck {
    drive(){
        console.log('driving Truck')
    }

    loadAmount (amount:number){
        console.log('driving Truck amount of ', amount)
    }
}


const v1 = new Car();
const v2 = new Truck();

type Vehicle = Car | Truck;

function useVehicle(vehicle:Vehicle){
        vehicle.drive();
        if(vehicle instanceof Truck){ // for class use instanceof as Type Guard
            vehicle.loadAmount(100);
        }
}

console.log(useVehicle(v2))

//Discriminated Unions - one common property needs to assign

interface Bird {
    type:'bird';
    flyingSpeed:number;
}

interface Horse{
    type:'horse';
    runningSpeed:number
}

type Animal = Bird | Horse;

function movingAnimal(animal:Animal){
    let speed;
   switch(animal.type){
       case 'bird': 
        speed = animal.flyingSpeed;
       break;
       case 'horse' :
        speed = animal.runningSpeed;
       break;
       
   }

   console.log('moving speed is ',speed)
}

movingAnimal({type:'bird',flyingSpeed:100});


//Type Casting = which is actually a dom thing

const getHtmlParagraph =  document.getElementById('userPara')
const getInput=  <HTMLInputElement>document.getElementById('input')!; // this is one type of type casting ; ! refers a not a null
const getAnotherInput= document.getElementById('inputAnother')! as HTMLInputElement;// this is another type of type casting  ! refers a not a nul
const getTruthy = document.getElementById('getTruthy');

if(getTruthy){
    (getTruthy as HTMLInputElement).value = 'Get Truthy'
}


getInput.value = 'Hello World'
getAnotherInput.value = 'Another Hello World'

// Index Properties= allows that dynamic props types which are not predefined

interface ErrorContainer{
    [props:string]:string
}

const errorTypes :ErrorContainer = {
    email:'Email is not valid',
    userName:'must Enter user name'
}

//function overloads ==> tells the typescript to produce the exact return type as in function

function addNumberOverloads(a:string, b:string):string;
function addNumberOverloads(a:number, b:number):number;
function addNumberOverloads(a:number, b:string):string;
function addNumberOverloads(a:string, b:number):string;

function addNumberOverloads(a:Combine, b:Combine){
    if(typeof a=== 'string' || typeof b=== 'string'){ //for normal varliable use typeof as Type Guard
        return a.toString() + b.toString();
    }

    return a + b;
   
}

const functionOverloads = addNumberOverloads(10,'10'); //string


//Optional Chaining 
const fetchUserData = {
    id:'u1',
    name:'Mike',
    job:{title:'own company',descripttion:'my own brand'}
}

console.log(fetchUserData?.job?.title)

//Nullish coalescing = check and execute the fallback value if value is only undefined/ null

const userInput = null;
const storedData = userInput ?? 'Default';

console.log(storedData)




