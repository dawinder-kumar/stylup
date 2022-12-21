import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenericHttpService {

  apiUrl: String = "";

  constructor(private httpClient: HttpClient) { }

  serverRequest(requestType: String, apiEndPoint: String, apiPayload?: any): Observable<any> 
  {
    if(requestType == 'GET') {
      return this.httpClient.get(this.bindServerUrl(apiEndPoint), { params: apiPayload, headers: this.getHeader() })
    } 
    else if(requestType == 'POST') {
      return this.httpClient.post(this.bindServerUrl(apiEndPoint), apiPayload, { headers: this.getHeader() })
    } 
    else if(requestType == 'PUT') {
      return this.httpClient.put(this.bindServerUrl(apiEndPoint), apiPayload, { headers: this.getHeader() })
    } 
    else if(requestType == 'DELETE') {
      return this.httpClient.delete(this.bindServerUrl(apiEndPoint) + apiPayload, { headers: this.getHeader() })
    } 
    else {
      return of(null)
    }
  }

  getHeader() {
    const authToken: string = String(localStorage.getItem('authorizationToken'));
    let headers = new HttpHeaders().set("authorization", authToken)
    return headers;
  }

  bindServerUrl(url: String) {
    return this.apiUrl + '/' + url
  }
}
