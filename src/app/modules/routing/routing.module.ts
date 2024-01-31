import { NgModule } from '@angular/core';

import { RoutingComponent } from './routing.component';
import { RoutingRoutingModule } from './routing.routing.module';
import { ProductComponent } from './passing-parameters/product.component';
import { ProductComponent as QueryProduct } from './query-parameters/product.component';
import { ProductComponent as CanActiveProduct } from './can-active-guard/product.component';
import { ProductService } from './passing-parameters/product.service';
import { ProductService as ActiveProductService } from './can-active-guard/product.service';
import { ProductService as ResolveProductService } from './resolve-guard/product.service';
import { QueryComponent } from './query-parameters/query.component';
import { SharedModule } from 'src/app/shared';
import { LoginComponent } from './can-active-guard/login.component';
import { AuthService } from './can-active-guard/auth.service';
import { CanActiveComponent } from './can-active-guard/can-active.component';
import { AuthGuardService } from './can-active-guard/auth-guard.service';
import { Product1Component } from './resolve-guard/product1.component';
import { Product1DetailComponent } from './resolve-guard/product1-detail.component';
import { Product2Component } from './resolve-guard/product2.component';
import { Product2DetailComponent } from './resolve-guard/product2-detail.component';
import { ResolveGuardComponent } from './resolve-guard/resolve-guard.component';
import { ProductListResolverService } from './resolve-guard/product-list-resolver.service';
import { ProductResolverService } from './resolve-guard/product-resolver.service';
import { PassingDataComponent } from './passing-data/passing-data.component';
import { DynamicComponent } from './passing-data/dynamic.component';
import { StaticComponent } from './passing-data/static.component';

@NgModule({
  imports: [RoutingRoutingModule, SharedModule],
  exports: [],
  declarations: [
    RoutingComponent,
    ProductComponent,
    QueryComponent,
    QueryProduct,
    LoginComponent,
    CanActiveComponent,
    LoginComponent,
    CanActiveProduct,
    Product1Component,
    Product1DetailComponent,
    Product2Component,
    Product2DetailComponent,
    ResolveGuardComponent,
    PassingDataComponent,
    DynamicComponent,
    StaticComponent,
  ],
  providers: [
    ProductService,
    AuthService,
    ActiveProductService,
    AuthGuardService,
    ProductListResolverService,
    ProductResolverService,
    ResolveProductService,
  ],
})
export class RoutingModule {}
