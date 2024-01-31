import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingComponent } from './routing.component';
import { ProductComponent } from './passing-parameters/product.component';
import { ProductComponent as QueryProduct } from './query-parameters/product.component';
import { ProductComponent as CanActiveProduct } from './can-active-guard/product.component';
import { ProductDetailComponent } from './passing-parameters/product-detail.component';
import { QueryComponent } from './query-parameters/query.component';
import { CanActiveComponent } from './can-active-guard/can-active.component';
import { LoginComponent } from './can-active-guard/login.component';
import { AuthGuardService } from './can-active-guard/auth-guard.service';
import { ResolveGuardComponent } from './resolve-guard/resolve-guard.component';
import { Product1Component } from './resolve-guard/product1.component';
import { Product2Component } from './resolve-guard/product2.component';
import { ProductListResolverService } from './resolve-guard/product-list-resolver.service';
import { Product1DetailComponent } from './resolve-guard/product1-detail.component';
import { Product2DetailComponent } from './resolve-guard/product2-detail.component';
import { ProductResolverService } from './resolve-guard/product-resolver.service';
import { PassingDataComponent } from './passing-data/passing-data.component';
import { StaticComponent } from './passing-data/static.component';
import { DynamicComponent } from './passing-data/dynamic.component';

const routes: Routes = [
  {
    path: 'routing',
    component: RoutingComponent,
    children: [
      {
        path: 'passing-parameters',
        component: ProductComponent,
        children: [{ path: 'product/:id', component: ProductDetailComponent }],
      },
      {
        path: 'query-parameters',
        component: QueryComponent,
        children: [{ path: 'product', component: QueryProduct }],
      },
      {
        path: 'can-active-guard',
        component: CanActiveComponent,
        children: [
          { path: 'product', component: CanActiveProduct, canActivate: [AuthGuardService] },
          { path: 'login', component: LoginComponent },
        ],
      },
      {
        path: 'resolve-guard',
        component: ResolveGuardComponent,
        children: [
          { path: 'product1', component: Product1Component },
          { path: 'product2', component: Product2Component, resolve: { products: ProductListResolverService } },
          { path: 'product1/:id', component: Product1DetailComponent },
          { path: 'product2/:id', component: Product2DetailComponent, resolve: { product: ProductResolverService } },
        ],
      },
      {
        path: 'passing-data',
        component: PassingDataComponent,
        children: [
          {
            path: 'static',
            component: StaticComponent,
            data: { id: '1', name: 'Angular' },
          },
          { path: 'dynamic', component: DynamicComponent },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutingRoutingModule {}
