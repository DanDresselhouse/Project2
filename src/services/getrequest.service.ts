import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetrequestService {

  constructor(private http: HttpClient) { }

  
  getmethod(url: string): Promise<string> {

    //put backend rest point here
    let response: Promise<any> = this.http.get<string>(url).toPromise();
    return response;
  }
}
