import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Content Projection with ng-content</h1>

    <ul>
      <li><a [routerLink]="['example1']">Example1</a></li>
      <li><a [routerLink]="['example2']">Example2</a></li>
      <li><a routerLink="ng-template">Ng-Template</a></li>
    </ul>

    <router-outlet></router-outlet> `,
})
export class ComponentComponent {
  name = 'Angular ' + VERSION.major;
}
