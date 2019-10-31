export class User{

    id: number;
    name: string;
    password: string;
    comments: Array<Comment>;
    username: string;
    

    constructor(id:number, name:string, password:string, comments:Array<Comment>, username:string){
        this.id;
        this.name=name;
        this.comments = comments;
        this.username=username;
        this.password=password;
    }
}