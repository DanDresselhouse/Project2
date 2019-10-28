import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/Models/artist';
import { PostrequestService } from 'src/services/postrequest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createaccountpage',
  templateUrl: './createaccountpage.component.html',
  styleUrls: ['./createaccountpage.component.css']
})
export class CreateaccountpageComponent implements OnInit {

  constructor(private postrequest: PostrequestService, private router:Router) { }

  name: string = "";
  username: string = "";
  password: string = "";
  isartist: boolean = false;

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

    
    let url="";

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
      if(this.isartist){
        this.router.navigateByUrl("/artistoptionspage");
      }else{
        this.router.navigateByUrl("/useroptionspage");
      }
    }).catch((response) => { console.log("Information couldn't be found") });
  }

}
