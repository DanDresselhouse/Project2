import { Component, OnInit } from '@angular/core';
import { PostrequestService } from 'src/services/postrequest.service';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/services/dataservice.service';
import { UploadService } from 'src/services/upload.service';

@Component({
  selector: 'app-artistuploadsongpage',
  templateUrl: './artistuploadsongpage.component.html',
  styleUrls: ['./artistuploadsongpage.component.css']
})
export class ArtistuploadsongpageComponent implements OnInit {
  songname: string = "";
  albumname: string = "";
  artistid: number = 0;

  selectedFiles: FileList;

  albumart: FileList;
  albumartpath: string = "";

  submittedform: boolean = false;
  correct: boolean = false;

  constructor(private idTransfer:DataserviceService, private postrequest: PostrequestService, private router: Router, private uploadService: UploadService) { }

  ngOnInit() {

    //get artist id but for testing its a constant for now
    this.idTransfer.currentMessage.subscribe(id => this.artistid=id);
    console.log(this.artistid);
  }

  submitsong() {

    let body = {
      id: 0,
      artistId: this.artistid,
      name: this.songname,
      releaseDate: Date.now(),
      albumName: this.albumname,
      inAlbum: 1,
      rating: 0,
      link: "https://songcollectionbucket.s3.us-east-2.amazonaws.com/" + this.selectedFiles.item(0).name,
      albumArt: this.albumartpath
    }

    console.log(this.albumart);

    console.log(body);

    let url = "http://ec2-18-216-221-127.us-east-2.compute.amazonaws.com:9999/song";

    this.postrequest.postmethod(url, body).then((info) => {
      console.log("success");
      console.log(info)
      this.submittedform = true;
      this.correct = true;
    }).catch((response) => { console.log("Information couldn't be found"); this.correct = false; this.submittedform = true; });

  }
  upload() {
    const file = this.selectedFiles.item(0);
    this.uploadService.uploadFile(file);
    console.log(this.selectedFiles.item(0).name);
  }

  selectMusicFile(event) {
    this.selectedFiles = event.target.files;
  }

  selectAlbumArt(event) {
    this.albumart = event.target.files;
    this.albumartpath = "https://songcollectionbucket.s3.us-east-2.amazonaws.com/" + this.albumart.item(0).name;
  }

  uploadEverything() {
    this.upload();
    this.submitsong();
  }

}

//public TemporarySong(int id, int artistId, String name, long releaseDate, String albumName, int inAlbum, int rating,
// String link, String albumArt)
