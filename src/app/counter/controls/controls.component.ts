import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import counterActions from '../counterStore/counter.actions';
import { CounterState } from '../counterStore/counter.state';

@Component({
  selector: 'app-controls',
  standalone: true,
  imports: [],
  templateUrl: './controls.component.html',
  styleUrl: './controls.component.scss',
})
export class ControlsComponent {
  // @Output() increase = new EventEmitter<number>();
  // @Output() decrease = new EventEmitter<number>();
  // @Output() reset = new EventEmitter<number>();

  // handleIncrease() {
  //   this.increase.emit();
  // }
  // handleDecrease() {
  //   this.decrease.emit();
  // }

  // handleReset() {
  //   this.reset.emit();
  // }

  constructor(private store: Store<CounterState>) {}

  handleIncrease() {
    this.store.dispatch(counterActions.increment());
  }
  handleDecrease() {
    this.store.dispatch(counterActions.decrement());
  }

  handleReset() {
    this.store.dispatch(counterActions.reset());
  }
}
