export class Application{

    empId:number
    projectId:number

    constructor(empId:number,projectId:number){

        this.empId=empId
        this.projectId=projectId
    }

    get emp():number{
        return this.empId;
    }
    set emp(value: number){
        this.empId=value;
    }
    get projId():number{
        return this.projectId;
    }
    set projId(value: number){
        this.projectId=value;
    }

}