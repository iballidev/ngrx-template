import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Post, PostService } from '../../services/post.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { PostsState } from '../postStore/posts.state';
import postsActions from '../postStore/posts.actions';

@Component({
  selector: 'app-add-post',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.scss',
})
export class AddPostComponent implements OnInit {
  addPostForm!: FormGroup;
  label: any;
  imgUrl: any;
  isReadyToBeSaved!: boolean;
  isFile!: boolean;
  constructor(
    private fb: FormBuilder,
    private store: Store<PostsState>
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.addPostForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required]),
      tags: new FormControl(''),
    });
  }

  onChange($event: any) {
    let rawImg = $event.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(rawImg);
    reader.onload = (event: any) => {
      // console.log("reader.onload: ", event)
      this.imgUrl = event.target.result;
      this.label = rawImg.name;
      this.isReadyToBeSaved = true;
      this.isFile = true;
      this.uploadImage();
    };
  }

  uploadImage() {
    // console.log('this.label: ', this.label);
    // console.log('this.imgUrl: ', this.imgUrl);
    // console.log('this.isReadyToBeSaved: ', this.isReadyToBeSaved);
    // console.log('this.isFile: ', this.isFile);
  }

  onSubmit(data: FormGroup) {
    if (data.valid) {
      const payload: Post = {
        ...data.value,
        featuredImage: this.imgUrl,
      };

      this.store.dispatch(postsActions.addPost({ post: payload }));
    }
  }

  backHistory() {
    history.back();
  }
}
