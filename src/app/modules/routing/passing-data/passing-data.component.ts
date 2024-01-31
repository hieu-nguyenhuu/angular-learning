import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  template: `
    <ul>
      <li><a [routerLink]="['static']" routerLinkActive="router-link-active">Static Data</a></li>
      <li><a [routerLink]="['dynamic']" [state]="product">Dynamic Data</a></li>
    </ul>

    <p>Id : <input type="text" [(ngModel)]="product.id" /></p>
    <p>name :<input type="text" [(ngModel)]="product.name" /></p>
    <button (click)="gotoDynamic()">Goto Dynamic Component</button>
    <router-outlet></router-outlet>
  `,
})
export class PassingDataComponent {
  public product = { id: '1', name: 'Angular' };

  constructor(private router: Router) {}

  gotoDynamic() {
    console.log('gotoDynamic');
    this.router.navigateByUrl('/routing/passing-data/dynamic', { state: this.product });
  }
}
