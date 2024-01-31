import { Component, OnInit } from '@angular/core';

@Component({
  template: `<ul>
      <li><a routerLink="./passing-parameters">passing router parameters</a></li>
      <li><a routerLink="./query-parameters">query parameters</a></li>
      <li><a routerLink="./can-active-guard">can active guard</a></li>
      <li><a routerLink="./resolve-guard">resolve guard</a></li>
      <li><a routerLink="./passing-data">passing data</a></li>
    </ul>
    <router-outlet></router-outlet>`,
})
export class RoutingComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
