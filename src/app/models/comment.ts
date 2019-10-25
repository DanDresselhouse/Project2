//this is user or artist object
export class User{

    commentid:number;
    comment:string;
    rating:number;
    userid:number;
    songid:number;

    constructor(commentid:number, comment:string, rating:number, userid:number, songid:number){
        this.commentid = commentid;
        this.comment = comment;
        this.rating = rating;
        this.userid = userid;
        this.songid = songid;
    }
}