import { Component, OnInit } from '@angular/core';
import { PostrequestService } from 'src/services/postrequest.service';
import { Artist } from 'src/app/Models/artist';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  constructor(private postrequest: PostrequestService) { }

  ngOnInit() {
  }

  username: string = "";
  password: number = 0;

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
      console.log("success")
    }).catch((response) => { console.log("Information couldn't be found") });
  }
}
