import { Component } from '@angular/core';

@Component({
  selector: 'resolve-guard',
  template: `<div class="container">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" [routerLink]="['./']"
            ><strong> {{ title }} </strong></a
          >
        </div>
        <ul class="nav navbar-nav">
          <li><a [routerLink]="['product1']">Product1</a></li>
          <li><a [routerLink]="['product2']">Product2</a></li>
        </ul>
      </div>
    </nav>
    <router-outlet></router-outlet>
  </div>`,
})
export class ResolveGuardComponent {
  title = 'Route Guards Demo';
}
