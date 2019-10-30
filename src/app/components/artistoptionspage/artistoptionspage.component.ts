import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/services/dataservice.service';

@Component({
  selector: 'app-artistoptionspage',
  templateUrl: './artistoptionspage.component.html',
  styleUrls: ['./artistoptionspage.component.css']
})
export class ArtistoptionspageComponent implements OnInit {

  constructor(private idTransfer:DataserviceService) { }

  id:number = 0;
  ngOnInit() {
    this.idTransfer.currentMessage.subscribe(id => this.id=id);
    console.log(this.id);

  }

}
