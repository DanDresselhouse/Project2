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
import { DataserviceService } from 'src/services/dataservice.service';
import { Router } from '@angular/router';

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
  userid:number;
  searchinput: string = "";
  songs: Array<Song>;
  artists: Array<string>=[];

  isVisible: boolean = false;
  randomnumber: number = 1;

  isExpanded: boolean = false;

  comments: Array<Comment>;

  constructor(private idTransfer:DataserviceService, private getrequest: GetrequestService, private data: DataService, private postrequest: PostrequestService,private router: Router) { }

  ngOnInit() {

    this.randomnumber = Math.floor((Math.random()*100) + 1);
    console.log(this.randomnumber);
    if (this.randomnumber > 50) {
      this.isVisible = true;
    }


    this.idTransfer.currentMessage.subscribe(id => this.userid=id);
    this.idTransfer.changeMessage(this.userid);



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

 


  search(name: string) {
    let url = "http://ec2-18-216-221-127.us-east-2.compute.amazonaws.com:9999/song/name/" + name;
    this.getrequest.getmethod(url).then((info) => {
      console.log(info);
      this.songs = info;

      for(let i=0; i<this.songs.length; i++){
        this.getartistbyid(this.songs[i].artistId, i);
      }

    }).catch((response) => { console.log("Information couldn't be found") });

    let url2 = "http://ec2-18-216-221-127.us-east-2.compute.amazonaws.com:9999/song/artist/name/" + name;
    this.getrequest.getmethod(url2).then((info) => {
      console.log(info);
      let artistsongs: Array<Song> = info;
      this.songs = this.songs.concat(artistsongs);

      for(let i=0; i<this.songs.length; i++){
        this.getartistbyid(this.songs[i].artistId, i);
      }

    }).catch((response) => { console.log("Information couldn't be found") });


  }

  gotosongpage(song: Song){
    this.data.changeMessage(song.id);
    this.router.navigateByUrl("/songpage");
  }


  
}
