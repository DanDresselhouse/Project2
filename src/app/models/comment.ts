

//this is user or artist object
export class Comment{

    id:number;
    comment:string;
    rating:number;
    user: number;
    song: number;

    constructor(id:number, comment:string, rating:number, user: number, song: number){
        this.id = id;
        this.comment = comment;
        this.rating = rating;
        this.user = user;
        this.song = song;
    }
}