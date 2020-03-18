abstract class Department {
    public departmentName:string;
    private departmentDetails:string[];
    protected departmentType:string;
    constructor(public id:string,name:string,details:string[],type:string){
       
        this.departmentName= name;
        this.departmentDetails = details
        this.departmentType = type
        console.log(name)

    }

    getType(){
        return this.departmentType;
    }
    setType(type:string):void{
        this.departmentType = type;
    }
    describe(this:Department){
        console.log('Department:', this.departmentName)
    }

    abstract abstractDescribe(this:Department):void
}

class DepartmentMode extends Department{
    constructor(id:string){
        super(id,'IT',['max','millian'],'Engineering')
    }

    abstractDescribe(){
        console.log(`Department Mode Id is ${this.id}`)
    }
}


class DepartmentType extends Department {
    constructor(id:string){
        super(id,'ECE',['Michael','Hez'],'Engineering')
    }

    abstractDescribe(){
        console.log(`Department Mode Type is ${this.id}`)
        console.log(this)
    }
}

//Abstract classes ==> used to enforce to modify the method of the base class in the exteneded classes
// Abstract classes does not have implementation in the base class we have to use only the defining method

const departmentMode = new DepartmentMode('d1');
console.log(departmentMode)
console.log(departmentMode.abstractDescribe())
const instantiateDepartmentType = new DepartmentType('d2');
console.log(instantiateDepartmentType.abstractDescribe())

// const instantiateDepartment = new Department('d1','IT',['max','millian'],'Engineering');
// console.log(instantiateDepartment)