import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpComponent } from './http.component';
import { GetComponent } from './get/get.component';

const routes: Routes = [
  { path: 'http', component: HttpComponent, children: [{ path: 'get', component: GetComponent }] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HttpRoutingModule {}
