import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'forms-comp',
  template: `<ul>
      <li><a routerLink="reactive-form">Reactive Form</a></li>
      <li><a routerLink="template-form">Template Form</a></li>
    </ul>
    <router-outlet></router-outlet>`,
})
export class FormsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
