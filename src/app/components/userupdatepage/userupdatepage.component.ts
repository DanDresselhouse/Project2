import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';
import { PutrequestService } from 'src/services/putrequest.service';
import { GetrequestService } from 'src/services/getrequest.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-userupdatepage',
  templateUrl: './userupdatepage.component.html',
  styleUrls: ['./userupdatepage.component.css']
})
export class UserupdatepageComponent implements OnInit {

  userid: number = 0;
  thisuser: User;
  newName: string = "";
  newPassword: string = "";
  


  constructor(private getrequest: GetrequestService,private putrequest: PutrequestService, private data: DataService, private router:Router) { }

  ngOnInit() {

    this.data.currentMessage.subscribe(id => this.userid = id);
    this.getuserbyid(this.userid);
    //let thisuser = this.getuserbyid(this.userid);

    //console.log(this.userid);
  }



  updateUser(){
    let url = "http://ec2-18-216-221-127.us-east-2.compute.amazonaws.com:9999/user";
    let body = {
      id: this.thisuser.id,
      name: this.newName, 
      username: this.thisuser.username,
      password: this.newPassword 
    };
    console.log(body);

    this.putrequest.putmethod(url, body).then(() => {
      console.log("success");
      //this.router.navigateByUrl("/useroptionspage");
      
    }).catch((response) => { console.log("Information couldn't be found") });

  }

  getuserbyid(id: number) {
    let url = "http://ec2-18-216-221-127.us-east-2.compute.amazonaws.com:9999/user/" + id;
    
    this.getrequest.getmethod(url).then((info) => {
      console.log(this.thisuser);
      this.thisuser = info;
      console.log(this.thisuser);
      
    }).catch((response) => { console.log("Information couldn't be found") });
  }

}
