import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child2-component',
  template: `<h2>Child Component</h2>
    <button (click)="increment()">Increment</button>
    <button (click)="decrement()">decrement</button>
    current count is {{ count }} `,
})
export class ChildComponent {
  @Input() count!: number;

  @Output() countChanged: EventEmitter<number> = new EventEmitter(); // khai báo CountChanged thuộc kiểu EventEmitter

  increment() {
    this.count++;
    this.countChanged.emit(this.count);
  }
  // this.countChanged.emit(this.count); sẽ phát ra 1 "tín hiệu", kèm theo giá trị count.
  // khi này, (countChanged) sẽ được kích hoạt bên parent, và hàm countChangedHandle($event) được gọi
  // parent có thể truy cập tới giá trị được emit ra, qua $event
  decrement() {
    this.count--;
    this.countChanged.emit(this.count);
  }
}
