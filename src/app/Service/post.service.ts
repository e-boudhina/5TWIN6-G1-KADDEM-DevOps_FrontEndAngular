import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../Models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl2 = 'http://localhost:8090/POST-SERVICE/post/getAll';
  private apiUrl = 'http://localhost:8088/post';
  private apiUrl3= 'http://localhost:8090/POST-SERVICE/post/getOne';

  constructor(private http: HttpClient) { }

  getPostById(id: number): Observable<Post> {
    const url = `${this.apiUrl3}/${id}`;
    return this.http.get<Post>(url);
  }
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl2);
  }

  deletePost(id: number): Observable<string> {
    const deleteUrl = `${this.apiUrl}/delete/${id}`;
    return this.http.delete<string>(deleteUrl);
  }
  private apiUrl4 = 'http://127.0.0.1:8088/post/addPost';


  createPost(postData: any) {
    return this.http.post(this.apiUrl4, postData);
  }
}
