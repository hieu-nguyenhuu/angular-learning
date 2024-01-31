import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ProductService } from './product.service';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/internal/operators';
import { Product } from './product';

@Injectable()
export class ProductResolverService implements Resolve<any> {
  constructor(private router: Router, private productService: ProductService) {}

  resolve1(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    console.log('ProductResolverService  called');
    let id = parseInt(route.paramMap.get('id') ?? '0');
    return this.productService.getProduct(id);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    let id = parseInt(route.paramMap.get('id') ?? '0');
    console.log('ProductResolverService is called with ' + id);
    return this.productService.getProduct(id).pipe(
      map((data) => {
        if (data.name != 'Undefined') {
          console.log(data);
          return data;
        } else {
          console.log('redirecting');
          this.router.navigate(['/routing/resolve-guard/product2']);
          return null;
        }
      }),
    );
  }
}
