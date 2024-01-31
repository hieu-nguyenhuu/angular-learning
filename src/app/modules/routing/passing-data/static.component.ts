import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  template: `
    <h1>Passing Static Data Demo</h1>
    {{ product }}

    <p>
      <button (click)="goBack()">Back</button>
    </p>
  `,
})
export class StaticComponent implements OnInit {
  product: any;
  constructor(private router: Router, private activatedroute: ActivatedRoute) {
    console.log('static');
  }

  ngOnInit() {
    this.activatedroute.data.subscribe((data) => {
      this.product = data;
    });
    console.log(this.product);
  }

  goBack() {
    this.router.navigate(['/routing/passing-data']);
  }
}
