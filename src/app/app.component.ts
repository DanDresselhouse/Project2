import { Component, OnInit } from '@angular/core';
import { UploadService } from '../services/upload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  selectedFiles: FileList;

  constructor(private uploadservice: UploadService) {

  }
  
  ngOnInit() {

  }

  upload() {
    const file = this.selectedFiles.item(0);
    this.uploadservice.uploadFile(file);
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  title = 'Project2';
}
