import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';
import { PutrequestService } from 'src/services/putrequest.service';
import { GetrequestService } from 'src/services/getrequest.service';
import { Artist } from 'src/app/models/artist';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artistupdatepage',
  templateUrl: './artistupdatepage.component.html',
  styleUrls: ['./artistupdatepage.component.css']
})
export class ArtistupdatepageComponent implements OnInit {

  artistid: number = 0;
  thisartist: Artist;
  newName: string = "";
  
  newPassword: string = "";

  constructor(private getrequest: GetrequestService,private putrequest: PutrequestService, private data: DataService, private router:Router) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(id => this.artistid = id);
    this.getartistbyid(3);
    //let thisartist = this.getartistbyid(this.artistid);

    //console.log(this.userid);
  }


  updateArtist(){
    let url = "http://ec2-18-216-221-127.us-east-2.compute.amazonaws.com:9999/artist";
    let body = {
      id: this.thisartist.id,
      name: this.newName, 
      username: this.thisartist.username,
      password: this.newPassword 
    };
    console.log(body);

    this.putrequest.putmethod(url, body).then(() => {
      console.log("success");
      //this.router.navigateByUrl("/artistoptionspage");
      
    }).catch((response) => { console.log("Information couldn't be found") });

  }

  getartistbyid(id: number) {
    let url = "http://ec2-18-216-221-127.us-east-2.compute.amazonaws.com:9999/artist/" + id;
    
    this.getrequest.getmethod(url).then((info) => {
      console.log(this.thisartist);
      this.thisartist = info;
      console.log(this.thisartist);
      
    }).catch((response) => { console.log("Information couldn't be found") });
  }

}
