import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PutrequestService {

  constructor(private http:HttpClient) { }


  //pass in url and body object
  putmethod(url:string, putObject: any):Promise<any>{

    //put backend rest point here
    let response:Promise<any> = this.http.put<any>(url, putObject).toPromise();
    return response;
  }

}
