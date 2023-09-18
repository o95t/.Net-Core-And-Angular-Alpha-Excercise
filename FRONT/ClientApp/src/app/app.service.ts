import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Router } from "@angular/router";

const httpOptions = {
    headers: new HttpHeaders({ 
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
       'Content-Type': 'application/json' })
  };
  
   
  @Injectable({
    providedIn: 'root'
  })
  
  export class AppService {
    url ="";
    
    constructor(public http:HttpClient, @Inject('BASE_URL') baseUrl: string,
    private router: Router) {
      this.url = baseUrl;
     }
  
    validProduct(product: any) {
  
      var data ="product=" + product
  
      return this.http.post(this.url + 'api/Mix/validProduct?'+data,data, {responseType: 'text'});
  
    }
  
  }