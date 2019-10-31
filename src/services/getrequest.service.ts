import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetrequestService {

  constructor(private http: HttpClient) { }

  
  getmethod(url: string): Promise<any> {

    //put backend rest point here
    let response: Promise<any> = this.http.get<any>(url).toPromise();
    return response;
  }
}
