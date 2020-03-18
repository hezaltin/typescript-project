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
