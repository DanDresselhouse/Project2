import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/models/song';
import { PostrequestService } from 'src/services/postrequest.service';
import { User } from 'src/app/models/user';
import { GetrequestService } from 'src/services/getrequest.service';
import { Comment } from 'src/app/models/comment';

import { PutrequestService } from 'src/services/putrequest.service';
import { DataserviceService } from 'src/services/dataservice.service';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-songpage',
  templateUrl: './songpage.component.html',
  styleUrls: ['./songpage.component.css']
})
export class SongpageComponent implements OnInit {
  userid: number = 0;
  songid: number = 0;
  thissong: Song;
  comments: Array<Comment> = null;
  randomnumber: number = 1;
  albumartpath: string;

  constructor(private idTransfer: DataserviceService, private postrequest: PostrequestService, private putrequest: PutrequestService, private getrequest: GetrequestService, private data: DataService) { }

  ngOnInit() {

    this.idTransfer.currentMessage.subscribe(id => this.userid = id);

    this.data.currentMessage.subscribe(id => this.songid = id);
    console.log("this song is");
    console.log(this.songid);

    console.log("this user is ");
    console.log(this.userid);


    this.getsongbyid(this.songid);
  }

  getuserbyid(id: number) {
    let url = "http://ec2-18-216-221-127.us-east-2.compute.amazonaws.com:9999/user/" + id;

    this.getrequest.getmethod(url).then((info) => {
      console.log(info);
      let thisuser: User = info;
      return info;

    }).catch((response) => { console.log("Information couldn't be found") });
    return null;
  }

  getsongbyid(id: number) {

    let url = "http://ec2-18-216-221-127.us-east-2.compute.amazonaws.com:9999/song/" + id;

    this.getrequest.getmethod(url).then((info) => {
      console.log(info);
      this.thissong = info;
      console.log(this.thissong);

      this.getcommentsbysongid(this.thissong.id);

      this.getartistbyid();

      console.log(this.thissong);

      if (this.thissong.albumArt !== "") {
        this.albumartpath = this.thissong.albumArt;
      } else {
        console.log(this.thissong.albumArt + " oaisndoia");
        this.randomnumber = Math.floor((Math.random() * 3) + 1)
        this.albumartpath = "https://songcollectionbucket.s3.us-east-2.amazonaws.com/zach" + this.randomnumber + ".jpg"
      }

    }).catch((response) => { console.log("Information couldn't be found") });

    return null;
  }

  getartistbyid() {
    let url = "http://ec2-18-216-221-127.us-east-2.compute.amazonaws.com:9999/artist/" + this.thissong.artistId;
    this.getrequest.getmethod(url).then((info) => {

      console.log(info);

      this.thissong.artistname = info.name;



    }).catch((response) => { console.log("Information couldn't be found") });
    return null;
  }

  getcommentsbysongid(id: number) {
    let url = "http://ec2-18-216-221-127.us-east-2.compute.amazonaws.com:9999/comment/song/" + id;

    this.getrequest.getmethod(url).then((info) => {
      this.comments = info;
      console.log(info);

    }).catch((response) => { console.log("Information couldn't be found") });

  }

  currentpossition: number = 0;


  ischecked(star: number) {


    if (star <= this.thissong.rating) {
      return true;
    }
    else {
      return false;
    }

  }


  rateit(i: number) {
    this.thissong.rating = i;
  }

  onmouseeneter(i: number) {

    this.currentpossition = i;

  }

  onmouseleave() {
    this.currentpossition = 0;
  }

  songcomment: string = "";
  commentid: number = 0;

  submitcomment(thissong: Song) {

    let isnewcomment: boolean = this.hasusercommented();

    let body = {
      id: this.commentid,
      comment: this.songcomment,
      rating: this.thissong.rating,
      user: this.userid,
      song: this.thissong.id
    }

    console.log(body);

    //backend endpoint goes here
    let url = "http://ec2-18-216-221-127.us-east-2.compute.amazonaws.com:9999/comment";

    if (this.hasusercommented()) {
      this.putrequest.putmethod(url, body).then(() => {

        console.log("success")
        this.getcommentsbysongid(this.thissong.id);

      }).catch((response) => { console.log("something went wrong") });
    }
    else {
      url = "http://ec2-18-216-221-127.us-east-2.compute.amazonaws.com:9999/comment/song";
      this.postrequest.postmethod(url, body).then(() => {

        console.log("success")
        this.getcommentsbysongid(this.thissong.id);


      }).catch((response) => { console.log("something went wrong with posting") });
    }


  }

  hasusercommented(): boolean {
    for (let comment of this.comments) {
      if (this.userid == comment.user) {
        this.commentid = comment.id;
        return true;
      }
    }
    console.log("this is false");
    return false;
  }


}
