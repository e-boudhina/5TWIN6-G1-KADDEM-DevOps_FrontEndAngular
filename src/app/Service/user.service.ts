import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../Models/post.model";
import {User} from "../Models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private fetchAllUsersURL = 'http://localhost:8090/USER-SERVICE/user/users';
  private fetchUserByIdURL = 'http://localhost:8090/USER-SERVICE/user/';
  private deleteUsersByIdURL = 'http://localhost:8090/USER-SERVICE/user';
  private addUserURL = 'http://localhost:8090/USER-SERVICE/add';
  constructor(private http: HttpClient) {

  }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.fetchAllUsersURL);
  }
  deleteUser(id: number): Observable<any> {
    const deleteUrl = `${this.deleteUsersByIdURL}/${id}`;
    return this.http.delete<any>(deleteUrl, { responseType: 'json'});
  }

  getUserById(id: number): Observable<any> {
    const fetchUserUrl = `${this.fetchUserByIdURL}/${id}`;
    return this.http.get<any>(fetchUserUrl, { responseType: 'json'});
  }
  createUser(userData: { firstname: any; address: any; phonenumber: any; email: any; age: any; username: any; lastname: any }) :Observable<any> {
    console.log("before");
    return this.http.post<any>(this.addUserURL, userData);

  }


  }
