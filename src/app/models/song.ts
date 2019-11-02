import { timestamp } from 'aws-sdk/clients/cloudfront';

export class Song {

    id: number;
    artistId: number;
    name: string;
    releasedate: timestamp;
    albumname: string;
    inalbum: boolean;
    rating: number;
    link: string;
    artistname: string;
    isselected: boolean = false;
    isexpanded: boolean = false;

    constructor(artistname: string, id: number, artistId:number, name: string, releasedate: timestamp, albumname:string, inalbum:boolean, rating: number,link:string, isselected:boolean, isexpanded:boolean) {
        this.artistname = artistname;
        this.id=id;
        this.artistId=artistId;

        this.name=name;
        this.releasedate=releasedate;
        this.albumname=albumname;
        this.inalbum=inalbum;
        this.rating=rating;
        this.link=link;
        this.isselected=isselected;
        this.isexpanded=isexpanded;
        
    }
}