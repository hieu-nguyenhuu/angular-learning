import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'http-comp',
  template: `<ul>
      <li><a routerLink="./get">get</a></li>
    </ul>
    <router-outlet></router-outlet>`,
})
export class HttpComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
