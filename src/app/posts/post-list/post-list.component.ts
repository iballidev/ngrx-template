import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss',
})
export class PostListComponent implements OnInit {
  posts!: any[];
  constructor(private _postSvc: PostService) {}

  ngOnInit(): void {
    this._postSvc.getPosts().subscribe({
      next: (response: any) => {
        if (response) {
          console.log('response: ', response);
          this.posts = response;
        }
      },
      error: (err: any) => {
        console.log('Error: ', err);
      },
    });
  }
}
