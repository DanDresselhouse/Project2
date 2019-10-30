import { Component, OnInit } from '@angular/core';
import { GetrequestService } from 'src/services/getrequest.service';
import { Song } from 'src/app/models/song';
import { Artist } from 'src/app/Models/artist';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-useroptionspage',
  templateUrl: './useroptionspage.component.html',
  styleUrls: ['./useroptionspage.component.css']
})
export class UseroptionspageComponent implements OnInit {
  userid:number = 0;
  constructor(private getrequest: GetrequestService, private data:DataService) { }

  ngOnInit() {
    
    this.data.currentMessage.subscribe(id => this.userid=id)

    this.getallartists();
    this.getallsongs();
  }
  songs: Array<Song>;
  searchinput = "";
  artists: Array<Artist>;

  //this logins the artist and sets the artist object
  search() {
    this.artists = null;
    this.songs = null;
    //backend endpoint goes here
    let url = "";
    this.getrequest.getmethod(url).then((info) => {
      console.log("success");
      this.songs = info;
    }).catch((response) => { console.log("Information couldn't be found") });
  }

  getallartists() {
    let url = "http://ec2-18-216-221-127.us-east-2.compute.amazonaws.com:9999/artist";
    console.log(url);
    this.getrequest.getmethod(url).then((info) => {
      console.log("success");
      this.artists = info;
      console.log(info);
    }).catch((response) => { console.log("Information couldn't be found") });
  }

  getallsongs(){
    let url = "http://ec2-18-216-221-127.us-east-2.compute.amazonaws.com:9999/song";
    console.log(url);
    this.getrequest.getmethod(url).then((info) => {
      this.songs = info;
    }).catch((response) => { console.log("Information couldn't be found") });
  }

  rateit(){
    
  }
}
