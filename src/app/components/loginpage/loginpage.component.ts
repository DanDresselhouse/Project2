import { Component, OnInit } from '@angular/core';
import { PostrequestService } from 'src/services/postrequest.service';
import { Artist } from 'src/app/models/artist';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/services/dataservice.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  constructor(private postrequest: PostrequestService, private router: Router, private data: DataserviceService) { }

  ngOnInit() {
  }

  username: string = "";
  password: string = "";

  artist: Artist;

  userid: number;

  incorrectpasswordmessage: string = "";

  //this logins the artist and sets the artist object
  login() {

    let body = {
      id: 0,
      username: this.username,
      password: this.password
    };

    //backend endpoint goes here
    let url = "http://ec2-18-216-221-127.us-east-2.compute.amazonaws.com:9999/user/login";

    this.postrequest.postmethod(url, body).then((info) => {

      if (info != null) {
        console.log(info);
        this.userid = info.id;
        this.data.changeMessage(this.userid);
        this.router.navigateByUrl("/useroptionspage");
      }
    }).catch((response) => { this.incorrectpasswordmessage = "Incorrect username or password. Please try again." });
  }
}
