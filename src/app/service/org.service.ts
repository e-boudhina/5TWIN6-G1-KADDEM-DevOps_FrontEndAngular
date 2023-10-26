import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Org } from '../Models/org'; 

@Injectable({
  providedIn: 'root'
})
export class OrgService {
  private baseUrl = 'http://localhost:8044'; // Remplacez par l'URL de votre backend
  private base = 'http://localhost:8090/MICROORGANISATION-S'; // Remplacez par l'URL de votre backend

  constructor(private http: HttpClient) {}

  // Méthode pour récupérer tous les articles
  getAllOrgs(): Observable<Org[]> {
    return this.http.get<Org[]>(`${this.base}`);
  }

  // Méthode pour ajouter un nouvel article
  addOrg(org: Org): Observable<Org> {
    return this.http.post<Org>(`${this.baseUrl}`, org);
  }

  // Méthode pour mettre à jour un article
  updateOrg(id: number, org: Org): Observable<Org> {
    return this.http.put<Org>(`${this.baseUrl}/${id}`, org);
  }

  // Méthode pour supprimer un article
  deleteOrg(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  // Méthode pour obtenir un article par ID
  getOrgById(id: number): Observable<Org> {
    return this.http.get<Org>(`${this.baseUrl}/${id}`);
  }
}
