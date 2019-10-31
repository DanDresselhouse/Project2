import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostrequestService {

  constructor(private http:HttpClient) { }

    //pass in url and body object
    postmethod(url:string, postObject: any):Promise<any>{

      //put backend rest point here
      let response:Promise<any> = this.http.post<any>(url, postObject).toPromise();
      return response;
    }
}
