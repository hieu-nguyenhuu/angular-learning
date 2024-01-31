import { Component } from '@angular/core';

@Component({
  template: `
    <div class="container">
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <strong> {{ title }} </strong>
          </div>

          <ul class="nav navbar-nav">
            <div class="navbar-form navbar-left">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Page No" [(ngModel)]="pageNum" />
              </div>
            </div>
            <li class="nav">
              <a [routerLink]="['product']" [queryParams]="{ pageNum: pageNum }">Product</a>
            </li>
          </ul>
        </div>
      </nav>

      <router-outlet></router-outlet>
    </div>
  `,
})
export class QueryComponent {
  title: string = 'Query Parameters';
  pageNum: number = 0;
}
