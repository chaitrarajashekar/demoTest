import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { customer } from '../model/Customer';



@Injectable({
  providedIn: 'root'
})

export class CustomerService {

  public configFile: string = "assets/config.json";
  public apiURL: string;
  configurations: any = new Object();

  public async load() {
    let result = this.http.get(this.configFile).toPromise();
    await result;
    result.then((resultData: any) => {
      this.configurations = resultData;
      if (this.configurations["apiUrl"] != null && this.configurations["apiUrl"] != undefined)
        this.apiURL = this.configurations["apiUrl"];
    });
  }


  constructor(private http: HttpClient) {
  }

 

  public getCustomerDetails() {
    const headers = new HttpHeaders(
      {
        'Authorization': 'Basic ' + btoa(`${'PetSure'}:${'PetSure'}`)
      });
    return this.http.get<customer[]>(this.apiURL, { headers });
  }


}
