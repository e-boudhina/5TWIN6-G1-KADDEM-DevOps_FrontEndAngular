import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Etudiant} from "../Models/etudiant";

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  private fetchAllStudentsURL = 'http://localhost:8085/etudiant/retrieve-all-etudiants';
  private fetchStudentByIdURL = 'http://localhost:8085/etudiant/retrieve-etudiant';
  private deleteStudentByIdURL = 'http://localhost:8085/etudiant/removeEtudiant';
  private addStudentURL = 'http://localhost:8085/etudiant/add-etudiant';
  private updateStudentURL = 'http://localhost:8085/etudiant/update-etudiant';
  constructor(private http: HttpClient) {

  }
  getStudents(): Observable<Etudiant[]> {
    console.log('hit');
    return this.http.get<Etudiant[]>(this.fetchAllStudentsURL);
  }
  deleteStudnet(id: number): Observable<any> {
    const deleteUrl = `${this.deleteStudentByIdURL}/${id}`;
    return this.http.delete<any>(deleteUrl, { responseType: 'json'});
  }

  getStudentById(id: string | null): Observable<any> {
    const fetchStudentUrl = `${this.fetchStudentByIdURL}/${id}`;
    return this.http.get<any>(fetchStudentUrl, { responseType: 'json'});
  }
  createStudent(studentData: { prenomE: any; nomE: any; op: any; }) :Observable<any> {
    console.log("before");
    console.log(studentData);
    return this.http.post<any>(this.addStudentURL, studentData);
  }
  updateStudent(studentData: { prenomE: any; nomE: any; op: any; }) :Observable<any> {
    console.log("before");
    console.log(studentData);
    return this.http.put<any>(this.updateStudentURL, studentData);
  }
}
