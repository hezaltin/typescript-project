// Generics types built in
//Array<T>,Promise<T> ==> T is nothing but a return/yeild value

const asignArray :Array<string> = []; // string[]

asignArray[0] = 'name';

const asignPromise:Promise<string> = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('This is a Promise')
    },2000)
})

asignPromise.then((data)=>{
    const splitData  = data.split(' ');
    console.log(splitData)
})

// Custom Generice Type intersection 
function merge<T,U>(objA:T,objB:U){
    return {...objA,...objB};
}

const callMerge= merge({name:'Mike',occupation:'own'},{age:30});

// generic constraints = extends is the keyword to give the specific return type

function mergeConstraints<T extends object,U extends object>(objA:T,objB:U){
    return {...objA,...objB};
}

const callMergeConstraints= mergeConstraints({name:'Mike',occupation:'own'},{age:30});

//Another Generic type functions

interface Lengthy{
    length:number
}

function anotherGenericType<T extends Lengthy>(element:T):[T, string]{
    let descriptionText = 'Got No Element';
    if(element.length === 1){
        descriptionText = 'Got 1 Element'
    }
    else if(element.length> 1){
        descriptionText = 'Got ' + element.length + ' Elements'
    }

return [element,descriptionText]
}

console.log(anotherGenericType('Hi There !'));

// Generic Type - keyof constraints

function extractAndConvert<T extends object, U extends keyof T>(obj:T,key:U){
        return 'Value Of Object is ' +  obj[key];
}

extractAndConvert({name:'Mike'},'name');


//Generics Classes
//Flexible with type safety
class DataStorage<T extends string|number|boolean> {
    private data:T[] = [];

    addItem(item:T){
        this.data.push(item);
    }

    removeItem<U>(item:T){    // we can add new generic types for methods inside class
        if(this.data.indexOf(item) === (-1)) {
            return
        }
        this.data.splice(this.data.indexOf(item),1);
    }

    getData(){
        return [...this.data]
    }

}


const textStorage = new DataStorage<string>();
textStorage.addItem('Mike')
textStorage.addItem('Hezaltin')
textStorage.removeItem('Mike');
console.log(textStorage.getData());

const storageWithPrimitive = new DataStorage<string|number|boolean>();
storageWithPrimitive.addItem('Mike')
storageWithPrimitive.addItem(30)
storageWithPrimitive.addItem(true)
storageWithPrimitive.removeItem('Mike');
console.log(storageWithPrimitive.getData());

// const objetStorage = new DataStorage<object>();
// const nameObject = {name:'Mike'}
// objetStorage.addItem(nameObject)
// objetStorage.addItem({name:'Hezaltin'})
// objetStorage.removeItem(nameObject);
// console.log(objetStorage.getData());


//Generic Utility Types

interface CourseGoal {
    title:string;
    description:string;
    courseUntill:Date;
}

function createCourseGoal(title:string,description:string,courseUntill:Date):CourseGoal{
    let courseGoal :Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description =description;
    courseGoal.courseUntill = courseUntill
    return courseGoal as CourseGoal;
}

const readOnlyArray:Readonly<string[]> = ['Mike','Hezaltin']
//readOnlyArray.push('name')