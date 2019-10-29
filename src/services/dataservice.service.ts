import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  private messageSource = new BehaviorSubject(0);
  currentMessage = this.messageSource.asObservable();


  constructor() { }

  changeMessage(artistId:number){
    this.messageSource.next(artistId);
  }
}
