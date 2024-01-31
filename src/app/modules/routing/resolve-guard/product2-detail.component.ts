import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from './product';

@Component({
  template: `<h1>Product Details Page [With resolve]</h1>

    Product : {{ product.name }} <br />
    Price : {{ product.price }}`,
})
export class Product2DetailComponent {
  product: Product;
  constructor(private _Activatedroute: ActivatedRoute) {
    this.product = this._Activatedroute.snapshot.data['product'];
  }
}
