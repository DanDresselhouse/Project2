import { Component, OnInit } from '@angular/core';
import { PostrequestService } from 'src/services/postrequest.service';
import { Artist } from 'src/app/Models/artist';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  constructor(private postrequest: PostrequestService, private router: Router) { }

  ngOnInit() {
  }

  username: string = "";
  password: string = "";

  artist: Artist;

  //this logins the artist and sets the artist object
  login() {

    let body = {
      id:0,
      username:this.username,
      password:this.password
    };

    //backend endpoint goes here
    let url = "";

    this.postrequest.postmethod(url,body).then(() => {
      console.log("success");
      this.router.navigateByUrl("/useroptionspage");
    }).catch((response) => { console.log("Information couldn't be found") });
  }
}
