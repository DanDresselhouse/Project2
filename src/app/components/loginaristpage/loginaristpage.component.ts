import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/models/artist';
import { PostrequestService } from 'src/services/postrequest.service';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/services/dataservice.service';

@Component({
  selector: 'app-loginaristpage',
  templateUrl: './loginaristpage.component.html',
  styleUrls: ['./loginaristpage.component.css']
})
export class LoginaristpageComponent implements OnInit {

  constructor(private postrequest: PostrequestService, private router: Router, private idService:DataserviceService) { }

  ngOnInit() {
  }

  username: string = "";
  password: string = "";

  artist: Artist;
  artistID:number = 0;
  //this logins the artist and sets the artist object
  login() {

    let body = {
      id: 0,
      username: this.username,
      password: this.password
    };

      //console.log(info);
      this.artistID = 8;
      this.idService.changeMessage(this.artistID);
      this.router.navigateByUrl("/artistoptionspage");

    //backend endpoint goes here
    let url = "http://ec2-18-216-221-127.us-east-2.compute.amazonaws.com:9999/artist/login";

    this.postrequest.postmethod(url, body).then((info) => {
      console.log(info);
      this.artistID = info.artistID;
      this.idService.changeMessage(this.artistID);
      this.router.navigateByUrl("/artistoptionspage");

    }).catch((response) => { console.log("Information couldn't be found") });
  }
}
