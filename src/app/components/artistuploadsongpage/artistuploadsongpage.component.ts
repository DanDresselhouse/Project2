import { Component, OnInit } from '@angular/core';
import { PostrequestService } from 'src/services/postrequest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artistuploadsongpage',
  templateUrl: './artistuploadsongpage.component.html',
  styleUrls: ['./artistuploadsongpage.component.css']
})
export class ArtistuploadsongpageComponent implements OnInit {
  songname:string = "";
  albumname:string = "";
  artistid:number = 0;

  constructor(private postrequest: PostrequestService, private router: Router) { }

  ngOnInit() {

    //get artist id but for testing its a constant for now
    this.artistid = 3;
  }

  submitsong(){

    let body = {
      id: 0,
      artistId: this.artistid,
      name: this.songname,
      releaseDate: Date.now(),
      albumName: this.albumname,
      inAlbum:1,
      rating: 0,
      link: "temp link",
      albumArt: "temp albumart link"
    }

    console.log(body);

    let url = "http://ec2-18-216-221-127.us-east-2.compute.amazonaws.com:9999/song";

    this.postrequest.postmethod(url, body).then((info) => {
      console.log("success");
      console.log(info)
    }).catch((response) => { console.log("Information couldn't be found") });

  }

}

//public TemporarySong(int id, int artistId, String name, long releaseDate, String albumName, int inAlbum, int rating,
// String link, String albumArt)
