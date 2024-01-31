import { Component, OnInit } from '@angular/core';

import { ProductService } from './product.service';
import { Product } from './product';
import { ActivatedRoute } from '@angular/router';

@Component({
  template: `<h1>With Resolve</h1>
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let product of products">
            <td>
              <a [routerLink]="['../product2', product.productID]">{{ product.name }} </a>
            </td>
            <td>{{ product.price }}</td>
          </tr>
        </tbody>
      </table>
    </div>`,
})
export class Product2Component {
  public products: Product[] = [];

  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit() {
    this.products = this.route.snapshot.data['products'];
  }
}
