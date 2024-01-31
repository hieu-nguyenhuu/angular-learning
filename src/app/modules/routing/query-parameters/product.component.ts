import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  template: `
    <h1>Product Page</h1>

    <p>
      Current Page No <strong> {{ pageNo }} </strong>
    </p>
    <p>
      snapshot Page No <strong> {{ snapshotPageNo }} </strong>
    </p>

    <button (click)="nextPage()">Next Page</button>
    <a [routerLink]="['../product']" [queryParams]="{ pageNum: this.pageNo - 1 }">Back</a>
  `,
})
export class ProductComponent implements OnInit {
  pageNo: number = 0;
  snapshotPageNo: number = 0;

  constructor(private Activatedroute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.snapshotPageNo = parseInt(this.Activatedroute.snapshot.queryParamMap.get('pageNum') ?? '0');

    this.Activatedroute.queryParamMap.subscribe((params) => {
      this.pageNo = parseInt(params.get('pageNum') ?? '0');
    });
  }

  nextPage() {
    this.router.navigate(['routing/query-parameters/product'], {
      queryParams: { pageNum: this.pageNo + 1 },
    });
  }
}
