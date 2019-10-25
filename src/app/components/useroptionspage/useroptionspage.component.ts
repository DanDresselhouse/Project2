import { Component, OnInit } from '@angular/core';
import { GetrequestService } from 'src/services/getrequest.service';
import { Song } from 'src/app/models/song';

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

   //this logins the artist and sets the artist object
   login() {

    //backend endpoint goes here
    let url = "";
    this.getrequest.getmethod(url).then((info) => {
      console.log("success");
      this.songs=info;
      
    }).catch((response) => { console.log("Information couldn't be found") });
  }

}
