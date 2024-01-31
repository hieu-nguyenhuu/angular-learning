import { Component } from '@angular/core';

@Component({
  selector: 'parent-comp',
  template: ` <h1>Welcome to {{ title }}!</h1>
    <button (click)="increment()">Increment</button>
    <button (click)="decrement()">decrement</button>
    <child-component [count]="Counter"></child-component>`,
})
export class ParentComponent {
  title = 'Component Interaction';
  Counter = 5;

  increment() {
    this.Counter++;
  }
  decrement() {
    this.Counter--;
  }
}
