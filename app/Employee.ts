export class Employee{
    empId:number
    firstName:string
    lastName:string
    experience:number
    tier:string
   skill:string
   
    email:string
    password:string
    isManager:String
    constructor(emp_id:number,first_name:string,last_name:string,experience:number,tier:string,primary_skill:string,email:string,password:string,isManager:String){

        this.empId=emp_id
        this.firstName=first_name
        this.lastName=last_name
        this.experience=experience
        this.tier=tier
        this.skill=primary_skill
       
        this.email=email
        this.password=password
        this.isManager=isManager

    }
   
    // get empID():number{
    //     return this.empId;
    // }
    // set empID(value: number){
    //     this.emp_id=value;
    // }
    // get passwordE():string{
    //     return this.password;
    // }
    // set passwordE(value: string){
    //     this.password=value;
    // }

}