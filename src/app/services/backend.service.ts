import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  baseUrl: string = 'http://localhost:8080/';
  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  });
  options;


  constructor(private http: HttpClient) {
  }

  post(entity: any, url: String) {
    this.options = { headers: this.httpHeaders };

    return this.http.post(this.baseUrl + url, JSON.stringify(entity), this.options);
  }

  putEntity(entity: any, url: String) {

    this.options = { headers: this.httpHeaders };

    return this.http.put(this.baseUrl + url, JSON.stringify(entity), this.options);
  }

  ViewEntities(url: String, param?) {
    
    this.options = { headers: this.httpHeaders, params: param };

    return this.http.get(this.baseUrl + url, this.options);
  }

  ViewEntity(url: String) {
    this.options = { headers: this.httpHeaders };

    return this.http.get(this.baseUrl + url, this.options);
  }

  deleteEntity(url: String) {
    this.options = { headers: this.httpHeaders };

    return this.http.delete(this.baseUrl + url, this.options);
  }
}
