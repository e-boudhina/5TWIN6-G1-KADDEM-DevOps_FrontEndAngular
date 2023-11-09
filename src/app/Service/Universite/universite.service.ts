// universite.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Universite} from "../../Models/universite";

@Injectable({
  providedIn: 'root'
})
export class UniversiteService {
  private baseUrl = 'http://localhost:8085/universite';

  constructor(private http: HttpClient) {}

  getUniversites(): Observable<Universite[]> {
    return this.http.get<Universite[]>(`${this.baseUrl}/retrieve-all-universites`);
  }
  getUniversite(id: number): Observable<Universite> {
    return this.http.get<Universite>(`${this.baseUrl}/retrieve-universite/${id}`);
  }

  addUniversite(universite: Universite): Observable<Universite> {
    return this.http.post<Universite>(`${this.baseUrl}/add-universite`, universite);
  }

  updateUniversite(universite: Universite): Observable<Universite> {
    return this.http.put<Universite>(`${this.baseUrl}/update-universite`, universite);
  }
}
