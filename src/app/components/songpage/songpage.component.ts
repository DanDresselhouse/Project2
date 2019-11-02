import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-songpage',
  templateUrl: './songpage.component.html',
  styleUrls: ['./songpage.component.css']
})
export class SongpageComponent implements OnInit {

  randomnumber: number = Math.floor((Math.random() * 3) + 1)

  albumartpath: string = "https://songcollectionbucket.s3.us-east-2.amazonaws.com/zach" + this.randomnumber + ".jpg"

  constructor() { }

  ngOnInit() {
  }

}
