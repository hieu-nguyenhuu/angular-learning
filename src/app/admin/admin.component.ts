import { Component } from '@angular/core';
@Component({
  selector: 'app-admin',
  template: `<ul>
      <li><a routerLink="dashboard">dashboard</a></li>
      <li><a routerLink="user">user</a></li>
      <li><a routerLink="rights">rights</a></li>
    </ul>
    <router-outlet></router-outlet>`,
})
export class AdminComponent {}
