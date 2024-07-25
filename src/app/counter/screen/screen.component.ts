import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CounterState } from '../counterStore/counter.state';
import { getCounterState } from '../counterStore/counter.selector';

@Component({
  selector: 'app-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './screen.component.html',
  styleUrl: './screen.component.scss',
})
export class ScreenComponent implements OnInit {
  @Input() count: number = 0;
  count$!: Observable<CounterState>;

  constructor(private store: Store<CounterState>) {}

  ngOnInit(): void {
    this.count$ = this.store.select(getCounterState);
  }
}
