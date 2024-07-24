import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.scss',
})
export class PostDetailsComponent implements OnInit {
  post: any;
  constructor(private route: ActivatedRoute, private _postSvc: PostService) {}

  ngOnInit(): void {
    this.route.params.subscribe((param: any) => {
      console.log('param: ', param);
      let postId = param.postId;
      console.log('postId: ', postId);
      this.getPostDetails(postId);
    });
  }

  getPostDetails(id: string) {
    this._postSvc.getPostDetails(id).subscribe({
      next: (response: any) => {
        if (response) {
          console.log('response: ', response);
          this.post = response
        }
      },
      error: (err: any) => {
        console.log('Error: ', err);
      },
    });
  }
}
