
function Logger(logString:string){
    return function(constructor:Function){
        console.log(logString)
        console.log(constructor)
    }
}

//Factory Decorators - MAinly for metta programming - function retirning the function higher order type
// Decorators Loads befor the class instatiate which mean on the definition itself;
// Something has Angular uses which is @Component decorator, @Effect,@HostListener..etc the core idea is here
// Can Add multiple decorators for the single class;
//How the execution part with Decorators; compaliation is to happen in top down execution part will be  bottom up/ bubble ]; rececent decorator will execute first;

function WithTemplate(template:string,hookId:string){
    return function(constructor:any){
        const hookElem = document.getElementById(hookId);
        const p = new constructor()
        if(hookElem){
            hookElem.innerHTML = template;
            hookElem.querySelector('h1')!.textContent = p.name
        }
    }
}

@Logger('LOAD_PERSONS')
class Person {
    name = 'Michael';
    constructor(){
        console.log('creating person object')
    }
}


@WithTemplate('<h1>Hello World!!</h1>','templateId')
class WithTemplatePerson {
    name = 'Michael';
    constructor(){
        console.log('creating person object')
    }
}

const persons  = new Person();

console.log(persons)