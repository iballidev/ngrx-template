import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  baseUrl = 'http://localhost:3100/posts';

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get(this.baseUrl);
  }
}
