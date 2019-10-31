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

    constructor(id: number, artistId:number, name: string, releasedate: timestamp, albumname:string, inalbum:boolean, rating: number,link:string) {
        this.id=id;
        this.artistId=artistId;
        this.name=name;
        this.releasedate=releasedate;
        this.albumname=albumname;
        this.inalbum=inalbum;
        this.rating=rating;
        this.link=link;
    }
}