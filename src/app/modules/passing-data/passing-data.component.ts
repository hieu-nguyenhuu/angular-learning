import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'passing-data-comp',
  template: `<ul>
      <li><a routerLink="child-to-parent">Child to Parent</a></li>
      <li><a routerLink="parent-to-child">Parent to Child</a></li>
    </ul>
    <router-outlet></router-outlet>`,
})
export class PassingDataComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
