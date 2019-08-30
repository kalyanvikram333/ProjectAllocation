export class Openings{
    client:string;
    experience:number;
    tier:string;
    skill:string;
    jobDescription:string;
   
    constructor( client:string,experience:number,tier:string,skill:string,jobDescription:string){
   this.client=client;
   this.experience=experience;
   this.tier=tier;
   this.skill=skill;
   this.jobDescription=jobDescription;
    }

}
