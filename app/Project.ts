export class Project{

    projectId:number
    client:string
    experience:number
    tier:string
    skill:string
    job_description:string

    constructor( projectid:number,client:string, experience:number,tier:string,skill:string, job_description:string){
this.projectId=projectid
        this.client=client
        this.experience=experience
        this.tier=tier
        this.skill=skill
        this.job_description=job_description
    }

}