import { timestamp } from 'aws-sdk/clients/cloudfront';

export class Song {

    songid: number;
    artistid: number;
    name: string;
    releasedate: timestamp;
    albumname: string;
    inalbum: boolean;
    rating: number;
    link: string;
    albumart: string;
    comments: Array<Comment>;

    constructor(songid: number, artistid:number, name: string, releasedate: timestamp, albumname:string, inalbum:boolean, rating: number,link:string, albumart:string, comments:Array<Comment>) {
        this.songid=songid;
        this.artistid=artistid;
        this.name=name;
        this.releasedate=releasedate;
        this.albumname=albumname;
        this.inalbum=inalbum;
        this.rating=rating;
        this.link=link;
        this.albumart=albumart;
        this.comments=comments;
    }
}