import { Component, OnInit } from '@angular/core';
import { GetrequestService } from 'src/services/getrequest.service';
import { Song } from 'src/app/models/song';
import { Artist } from 'src/app/Models/artist';
import { DataService } from 'src/services/data.service';
import { PostrequestService } from 'src/services/postrequest.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-useroptionspage',
  templateUrl: './useroptionspage.component.html',
  styleUrls: ['./useroptionspage.component.css']
})
export class UseroptionspageComponent implements OnInit {
  userid: number = 0;
  thisuser: User;
  searchinput: string = "";
  songs: Array<Song>;
  artists: Array<Artist>;

  constructor(private getrequest: GetrequestService, private data: DataService, private postrequest:PostrequestService) { }

  ngOnInit() {


    this.data.currentMessage.subscribe(id => this.userid = id)

    this.getuserbyid(2);
    //let thisuser = this.getuserbyid(this.userid);

    this.getallsongs();

    
  }

  getallsongs() {
    let url = "http://ec2-18-216-221-127.us-east-2.compute.amazonaws.com:9999/song";
    this.getrequest.getmethod(url).then((info) => {
      console.log(info);
      this.songs = info;
      console.log(this.songs);

    }).catch((response) => { console.log("Information couldn't be found") });
  }
  
  // getallartists() {
  //   let url = "http://ec2-18-216-221-127.us-east-2.compute.amazonaws.com:9999/artist";
    
  //   this.getrequest.getmethod(url).then((info) => {
      
  //     this.artists = info;
  //   }).catch((response) => { console.log("Information couldn't be found") });
  // }

  getuserbyid(id: number) {
    let url = "http://ec2-18-216-221-127.us-east-2.compute.amazonaws.com:9999/user/" + id;
    
    this.getrequest.getmethod(url).then((info) => {
      
      this.thisuser = info;
      console.log(this.thisuser);
      
    }).catch((response) => { console.log("Information couldn't be found") });
  }


  search(name: string) {
    let url = "http://ec2-18-216-221-127.us-east-2.compute.amazonaws.com:9999/song/name/"+name;
    this.getrequest.getmethod(url).then((info) => {
      console.log(info);
      this.songs = info;
      console.log(this.songs);

    }).catch((response) => { console.log("Information couldn't be found") });
  }

  checkedstring: string = "fa fa-star checked zoom";
  uncheckedstring: string = "fa fa-star zoom";

  class1: string = this.checkedstring;
  class2: string = this.uncheckedstring;
  class3: string = this.uncheckedstring;
  class4: string = this.uncheckedstring;
  class5: string = this.uncheckedstring;

  oldclass1: string = this.checkedstring;
  oldclass2: string = this.uncheckedstring;
  oldclass3: string = this.uncheckedstring;
  oldclass4: string = this.uncheckedstring;
  oldclass5: string = this.uncheckedstring;

  rateit(i: number) {
    switch (i) {
      case 1:
        this.class1 = this.checkedstring;
        this.class2 = this.uncheckedstring;
        this.class3 = this.uncheckedstring;
        this.class4 = this.uncheckedstring;
        this.class5 = this.uncheckedstring;
        break;
      case 2:
        this.class1 = this.checkedstring;
        this.class2 = this.checkedstring;
        this.class3 = this.uncheckedstring;
        this.class4 = this.uncheckedstring;
        this.class5 = this.uncheckedstring;
        break;
      case 3:
        this.class1 = this.checkedstring;
        this.class2 = this.checkedstring;
        this.class3 = this.checkedstring;
        this.class4 = this.uncheckedstring;
        this.class5 = this.uncheckedstring;
        break;
      case 4:
        this.class1 = this.checkedstring;
        this.class2 = this.checkedstring;
        this.class3 = this.checkedstring;
        this.class4 = this.checkedstring;
        this.class5 = this.uncheckedstring;
        break;
      case 5:
        this.class1 = this.checkedstring;
        this.class2 = this.checkedstring;
        this.class3 = this.checkedstring;
        this.class4 = this.checkedstring;
        this.class5 = this.checkedstring;
    }

    this.oldclass1 = this.class1;
    this.oldclass2 = this.class2;
    this.oldclass3 = this.class3;
    this.oldclass4 = this.class4;
    this.oldclass5 = this.class5;
  }

  temprate(i: number) {

    this.oldclass1 = this.class1;
    this.oldclass2 = this.class2;
    this.oldclass3 = this.class3;
    this.oldclass4 = this.class4;
    this.oldclass5 = this.class5;

    switch (i) {
      case 1:
        this.class1 = this.checkedstring;
        this.class2 = this.uncheckedstring;
        this.class3 = this.uncheckedstring;
        this.class4 = this.uncheckedstring;
        this.class5 = this.uncheckedstring;
        break;
      case 2:
        this.class1 = this.checkedstring;
        this.class2 = this.checkedstring;
        this.class3 = this.uncheckedstring;
        this.class4 = this.uncheckedstring;
        this.class5 = this.uncheckedstring;
        break;
      case 3:
        this.class1 = this.checkedstring;
        this.class2 = this.checkedstring;
        this.class3 = this.checkedstring;
        this.class4 = this.uncheckedstring;
        this.class5 = this.uncheckedstring;
        break;
      case 4:
        this.class1 = this.checkedstring;
        this.class2 = this.checkedstring;
        this.class3 = this.checkedstring;
        this.class4 = this.checkedstring;
        this.class5 = this.uncheckedstring;
        break;
      case 5:
        this.class1 = this.checkedstring;
        this.class2 = this.checkedstring;
        this.class3 = this.checkedstring;
        this.class4 = this.checkedstring;
        this.class5 = this.checkedstring;
    }

  }
  oldrate(){
    this.class1 = this.oldclass1;
    this.class2 = this.oldclass2;
    this.class3 = this.oldclass3;
    this.class4 = this.oldclass4;
    this.class5 = this.oldclass5;
  }

  
  submitcomment(thissong: Song){
  
    console.log(this.thisuser);
    console.log(thissong);
    let body = {
      id:16,
      comment:"test comment",
      rating: 4,
      user: this.thisuser.id,
      song: 1
    }

    console.log(body);

    //backend endpoint goes here
    let url = "http://ec2-18-216-221-127.us-east-2.compute.amazonaws.com:9999/comment/song";

    this.postrequest.postmethod(url, body).then(() => {

      console.log("success")

    }).catch((response) => { console.log("something went wrong") });
  

  }
}
