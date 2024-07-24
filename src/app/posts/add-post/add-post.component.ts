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
  imports: [ReactiveFormsModule],
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.scss',
})
export class AddPostComponent implements OnInit {
  addPostForm!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.addPostForm = this.fb.group({
      title: new FormControl('Hello'),
      body: new FormControl('Hello'),
      tags: new FormControl('Hello'),
    });
  }

  onSubmit(data:FormGroup){
    console.log("data: ", data.value)
  }

  backHistory() {
    history.back();
  }
}
