import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../passing-parameters/product';

@Component({
  template: `
    <H1>Passing Dynamic Data Demo</H1>

    {{ product }}

    <p>
      <button (click)="goBack()">Back</button>
    </p>
  `,
})
export class DynamicComponent implements OnInit {
  product: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    console.log(this.router.getCurrentNavigation()?.extras.state);
    console.log('dynamic');
  }

  ngOnInit() {
    console.log(history.state);
    this.product = history.state;
  }

  goBack() {
    this.router.navigate(['/routing/passing-data']);
  }
}
