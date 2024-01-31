import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PassingDataComponent } from './passing-data.component';
import { ParentComponent } from './child-to-parent/parent.component';
import { ParentComponent as Parent } from './parent-to-child/parent.component';

const routes: Routes = [
  {
    path: 'passing-data',
    component: PassingDataComponent,
    children: [
      { path: 'child-to-parent', component: ParentComponent },
      { path: 'parent-to-child', component: Parent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PassingDataRoutingModule {}
