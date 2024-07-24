import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

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
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();

    console.log('this.label: ', this.label);
    console.log('this.imgUrl: ', this.imgUrl);
    console.log('this.isReadyToBeSaved: ', this.isReadyToBeSaved);
    console.log('this.isFile: ', this.isFile);
  }

  buildForm() {
    this.addPostForm = this.fb.group({
      title: new FormControl('Hello'),
      body: new FormControl('Hello'),
      tags: new FormControl('Hello'),
    });
  }

  onChange($event: any) {
    console.log('$event: ', $event);

    let rawImg = $event.target.files[0];
    console.log('rawImg: ', rawImg);

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
    console.log('this.label: ', this.label);
    console.log('this.imgUrl: ', this.imgUrl);
    console.log('this.isReadyToBeSaved: ', this.isReadyToBeSaved);
    console.log('this.isFile: ', this.isFile);
  }

  onSubmit(data: FormGroup) {
    console.log('data: ', data.value);
  }

  backHistory() {
    history.back();
  }
}
