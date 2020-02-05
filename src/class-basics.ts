class Department {
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
}

class DepartmentMode extends Department{
    constructor(id:string){
        super(id,'IT',['max','millian'],'Engineering')
    }
}

const departmentMode = new DepartmentMode('mode1');
console.log(departmentMode)
const instantiateDepartment = new Department('d1','IT',['max','millian'],'Engineering');
console.log(instantiateDepartment)