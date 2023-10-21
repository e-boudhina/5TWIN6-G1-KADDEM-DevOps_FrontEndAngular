import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contract } from '../models/Contract';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiServerUrl = 'http://localhost:8081/dashboard';

  constructor(private http: HttpClient) { }

  public getUsersList(): Observable<Contract[]> {
    return this.http.get<Contract[]>(`${this.apiServerUrl}/users`);
  }

  public addUser(user: Contract): Observable<Contract> {
    return this.http.post<Contract>(`${this.apiServerUrl}/addContract`,user);
  }

  public updateUser(user: Contract): Observable<Contract> {
    return this.http.put<Contract>(`${this.apiServerUrl}/users/update`,user);
  }

  public deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/users/delete/${userId}`);
  }
}