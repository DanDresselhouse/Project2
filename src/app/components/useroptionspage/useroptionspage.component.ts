import { Component, OnInit } from '@angular/core';
import { GetrequestService } from 'src/services/getrequest.service';
import { Song } from 'src/app/models/song';
import { Artist } from 'src/app/Models/artist';
import { DataService } from 'src/services/data.service';
import { PostrequestService } from 'src/services/postrequest.service';
import { User } from 'src/app/models/user';
import { NgForm } from '@angular/forms';
import { transition, trigger, style, animate, state } from '@angular/animations';
import { BlockingProxy } from 'blocking-proxy';

@Component({
  selector: 'app-useroptionspage',
  templateUrl: './useroptionspage.component.html',
  styleUrls: ['./useroptionspage.component.css'],
  animations: [
    trigger (
      'showSongInformation',
      [
        state('show', 
          style({height: 100})
        ),
        state('hide',
          style({height: 0})
        ),
        transition('hide => show', [
          animate('1s')
        ]),
        transition('show => hide', [
          animate('1s')
        ])
      ]
    ),
    trigger (
      'expandDiv',
      [
        state('expand', 
          style({height: '33%'})
        ),
        state('contract',
          style({height: '25%'})
        )
      ]
    )
  ]
})
export class UseroptionspageComponent implements OnInit {
  userid: number = 0;
  thisuser: User;
  searchinput: string = "";
  songs: Array<Song>;
  artists: Array<string>=[];

  isVisible: boolean = false;
  randomnumber: number = 1;

  isExpanded: boolean = false;

  constructor(private getrequest: GetrequestService, private data: DataService, private postrequest: PostrequestService) { }

  ngOnInit() {

    this.randomnumber = Math.floor((Math.random()*100) + 1);
    console.log(this.randomnumber);
    if (this.randomnumber > 50) {
      this.isVisible = true;
    }


    this.data.currentMessage.subscribe(id => this.userid = id)


    //TEMPORARY FOR TESTING USE THE BELOW IMPLEMENTATION FROM BELOW
    this.getuserbyid(2);
    //let thisuser = this.getuserbyid(this.userid);

    this.getallsongs();


  }

  currentsong: Array<number> = [];
  showsonginfo: boolean = false;
  showSongInfo(song: Song) {
    if (song.isselected) {
      song.isselected = false;
      song.isexpanded = false;
    } else {
      song.isselected = true;
      song.isexpanded = true;
    }
  }

  getartistbyid(artistid: number, songindex:number) {
    let url = "http://ec2-18-216-221-127.us-east-2.compute.amazonaws.com:9999/artist/" + artistid;
    this.getrequest.getmethod(url).then((info) => {

      console.log(info);

      this.songs[songindex].artistname = info.name;
      


    }).catch((response) => { console.log("Information couldn't be found") });
    return null;
  }

  getallsongs() {
    let url = "http://ec2-18-216-221-127.us-east-2.compute.amazonaws.com:9999/song";
    this.getrequest.getmethod(url).then((info) => {
      this.songs = info;

      console.log(info)

        
      for(let i=0; i<this.songs.length; i++){
        this.getartistbyid(this.songs[i].artistId, i);
      }
      
    }).catch((response) => { console.log("Information couldn't be found") });
  }
  
  // getallartists() {
  //   let url = "http://ec2-18-216-221-127.us-east-2.compute.amazonaws.com:9999/artist";
    
  //   this.getrequest.getmethod(url).then((info) => {
      
  //     this.artists = info;
  //   }).catch((response) => { console.log("Information couldn't be found") });
  // }

  getuserbyid(id: number) {
    let url = "http://ec2-18-216-221-127.us-east-2.compute.amazonaws.com:9999/user/" + id;
    
    this.getrequest.getmethod(url).then((info) => {
      
      this.thisuser = info;
      console.log(this.thisuser);
      
    }).catch((response) => { console.log("Information couldn't be found") });
    return null;
  }


  search(name: string) {
    let url = "http://ec2-18-216-221-127.us-east-2.compute.amazonaws.com:9999/song/name/" + name;
    this.getrequest.getmethod(url).then((info) => {
      console.log(info);
      this.songs = info;

      for(let i=0; i<this.songs.length; i++){
        this.getartistbyid(this.songs[i].artistId, i);
      }

    }).catch((response) => { console.log("Information couldn't be found") });
  }

  //rating function**********************************************

  currentpossition: Array<number> = [];


  ischecked(song: Song, star: number) {

    if (star <= song.rating || (this.currentpossition[0] == song.id && this.currentpossition[1] >= star)) {
      return true;
    }
    else {
      return false;
    }
  }


  rateit(song: Song, i: number) {
    song.rating = i;
  }

  onmouseeneter(songid: number, i: number) {

    this.currentpossition = [songid, i];

  }

  onmouseleave() {
    this.currentpossition = [];
  }

  commentid: Array<string> = [];

  submitcomment(thissong: Song) {

    console.log(this.commentid[thissong.id]);



    let body = {
      id: 0,
      comment: this.commentid[thissong.id],
      rating: thissong.rating,
      user: this.thisuser.id,
      song: thissong.id
    }

    console.log(body);

    //backend endpoint goes here
    let url = "http://ec2-18-216-221-127.us-east-2.compute.amazonaws.com:9999/comment/song";

    this.postrequest.postmethod(url, body).then(() => {

      console.log("success")

    }).catch((response) => { console.log("something went wrong") });


  }

  //**************************** ****************************************/
}
