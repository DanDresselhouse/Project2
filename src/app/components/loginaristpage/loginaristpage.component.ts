import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/Models/artist';
import { PostrequestService } from 'src/services/postrequest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginaristpage',
  templateUrl: './loginaristpage.component.html',
  styleUrls: ['./loginaristpage.component.css']
})
export class LoginaristpageComponent implements OnInit {

  constructor(private postrequest: PostrequestService, private router: Router) { }

  ngOnInit() {
  }

  username: string = "";
  password: string = "";

  artist: Artist;

  //this logins the artist and sets the artist object
  login() {

    let body = {
      id: 0,
      username: this.username,
      password: this.password
    };

    //backend endpoint goes here
    let url = "";

    this.postrequest.postmethod(url, body).then(() => {
      console.log("success");
      this.router.navigateByUrl("/artistoptionspage");
    }).catch((response) => { console.log("Information couldn't be found") });
  }
}
