import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/models/artist';
import { PostrequestService } from 'src/services/postrequest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createaccountpage',
  templateUrl: './createaccountpage.component.html',
  styleUrls: ['./createaccountpage.component.css']
})
export class CreateaccountpageComponent implements OnInit {

  constructor(private postrequest: PostrequestService, private router: Router) { }

  name: string = "";
  username: string = "";
  password: string = "";
  confirmpassword: string = "";
  isartist: boolean = false;

  nameflag: boolean = false;
  checkname() {
    if (this.name === "") {
      this.nameflag = true;
    }
  }

  confirmation:boolean = false;
  confirmationmessage:string = "";

  artist: Artist;

  ngOnInit() {
  }

  createaccount() {

    let body = {
      id: 0,
      name: this.name,
      username: this.username,
      password: this.password
    };

    if (this.name === "") {
      this.confirmation = true;
      this.confirmationmessage = "Please enter your name";
    } else if (this.username === "") {
      this.confirmation = true;
      this.confirmationmessage = "Please enter a username";
    } else if (this.password === "") {
      this.confirmation = true;
      this.confirmationmessage = "Please enter a password";
    } else {
      if (this.confirmpassword != this.password) {
        this.confirmation = true;
        this.confirmationmessage = "Your passwords do not match";
      } else {

        this.confirmation = false;

        let url = "";

        //backend endpoint goes here
        if (this.isartist) {
          url = "http://ec2-18-216-221-127.us-east-2.compute.amazonaws.com:9999/artist";
        }
        else {
          url = "http://ec2-18-216-221-127.us-east-2.compute.amazonaws.com:9999/user";
        }
        console.log(url);

        this.postrequest.postmethod(url, body).then(() => {
          console.log("success");
          if (this.isartist) {
            this.router.navigateByUrl("/loginpage");
          } else {
            this.router.navigateByUrl("/loginpage");
          }
        }).catch((response) => { console.log("Information couldn't be found") });
      }
    }
  }

}
