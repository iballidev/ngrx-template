import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ControlsComponent } from './controls/controls.component';
import { ScreenComponent } from './screen/screen.component';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [RouterOutlet, ControlsComponent, ScreenComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  // count: number = 0;

  // onIncrease() {
  //   this.count++;
  // }

  // onDecrease() {
  //   this.count--;
  // }

  // onReset() {
  //   this.count = 0;
  // }
}
