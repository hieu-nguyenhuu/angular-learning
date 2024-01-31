import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example1',
  template: ` <h2>Button Demo With ng-content</h2>
    <app-fancybtn>Click Me</app-fancybtn>
    <app-fancybtn><b>Submit</b></app-fancybtn>

    <h2>Button with click event</h2>
    <app-fancybtn (click)="btnClicked($event)"><b>Submit</b></app-fancybtn>

    <h2>Button with user defined event event</h2>
    <app-fancybtn (someEvent)="DoSomething()"><b>Submit</b></app-fancybtn>`,
})
export class Example1Component implements OnInit {
  ngOnInit() {}

  btnClicked($event: Event) {
    console.log($event);
    alert('button clicked');
  }

  DoSomething() {
    alert('event fired from directive');
  }
}
