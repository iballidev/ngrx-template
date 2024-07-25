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

  sendPost(payload: Post) {
    return this.http.post(this.baseUrl, payload);
  }

  getPostDetails(id: string) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}

export interface Post {
  title: string;
  body: string;
  tags: string;
  featuredImage: string;
}
