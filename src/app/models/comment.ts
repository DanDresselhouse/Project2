import { Song } from './song';
import { User } from './user';

//this is user or artist object
export class Comment{

    id:number;
    comment:string;
    rating:number;
    user: User;
    song: Song;

    constructor(id:number, comment:string, rating:number, user: User, song: Song){
        this.id = id;
        this.comment = comment;
        this.rating = rating;
        this.user = user;
        this.song = song;
    }
}