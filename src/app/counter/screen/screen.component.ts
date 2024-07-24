import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './screen.component.html',
  styleUrl: './screen.component.scss',
})
export class ScreenComponent implements OnInit {
  @Input() count: number = 0;
  count$!: Observable<{ counter: number }>;

  constructor(private store: Store<{ counter: { counter: number } }>) {}

  ngOnInit(): void {
    this.count$ = this.store.select('counter');
  }
}
