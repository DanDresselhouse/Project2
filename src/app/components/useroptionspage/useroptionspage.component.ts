import { Component, OnInit } from '@angular/core';
import { GetrequestService } from 'src/services/getrequest.service';
import { Song } from 'src/app/models/song';
import { Artist } from 'src/app/Models/artist';

@Component({
  selector: 'app-useroptionspage',
  templateUrl: './useroptionspage.component.html',
  styleUrls: ['./useroptionspage.component.css']
})
export class UseroptionspageComponent implements OnInit {

  constructor(private getrequest: GetrequestService) { }

  ngOnInit() {
  }
  songs: Array<Song>;
  searchinput = "";
  artists: Array<Artist>;

  //this logins the artist and sets the artist object
  search() {

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
}
