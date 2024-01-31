import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
  selector: 'parent-comp',
  template: `
    <h1>Welcome to {{ title }}!</h1>
    <p>current count is {{ Counter }}</p>
    <child2-component [count]="Counter" (countChanged)="countChangedHandler($event)"></child2-component>

    <!-- <button (click)="child.increment()">Increment</button>
    <button (click)="child.decrement()">decrement</button>
    <child2-component #child></child2-component> 
    // parent có thể truy cập tới child thông qua local variable #child -->
  `,
})
export class ParentComponent {
  title = 'Component Interaction';
  Counter = 5;

  // hoặc có thể truy cập tới child thông qua @ViewChild
  //   @ViewChild(ChildComponent) child!: ChildComponent;
  //   increment() {
  //     this.child.increment();
  //   }
  //   decrement() {
  //     this.child.decrement();
  //   }

  countChangedHandler(count: number) {
    this.Counter = count;
    console.log(count);
  }
}
