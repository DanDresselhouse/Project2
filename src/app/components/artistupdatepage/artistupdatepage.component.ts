import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';
import { PutrequestService } from 'src/services/putrequest.service';
import { GetrequestService } from 'src/services/getrequest.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artistupdatepage',
  templateUrl: './artistupdatepage.component.html',
  styleUrls: ['./artistupdatepage.component.css']
})
export class ArtistupdatepageComponent implements OnInit {

  artistid: number = 0;
  
  newName: string = "";
  newUsername: string = "";
  newPassword: string = "";

  constructor() { }

  ngOnInit() {
  }

}
