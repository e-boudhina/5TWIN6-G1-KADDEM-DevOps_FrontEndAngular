import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/dashboard/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.http.get(API_URL + 'users');
  }

  create(data:any): Observable<any> {
    return this.http.post(API_URL+'/add', data);
  }
  
}
