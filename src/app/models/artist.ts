import { Song } from './song';

//this is user or artist object
//Im calling it artist because user is too generic
//Fight me
export class Artist{

    id: number;
    name: string;
    password: string;
    songs: Array<Song>;
    username: string;
    

    constructor(id:number, name:string, password:string, songs:Array<Song>, username:string){
        this.id;
        this.name=name;
        this.songs = songs;
        this.username=username;
        this.password=password;
    }
}