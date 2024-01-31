import { NgModule } from '@angular/core';

import { PassingDataComponent } from './passing-data.component';
import { PassingDataRoutingModule } from './passing-data-routing.module';
import { SharedModule } from 'src/app/shared';
import { ChildComponent } from './child-to-parent/child.component';
import { ParentComponent } from './child-to-parent/parent.component';
import { ChildComponent as Child } from './parent-to-child/child.component';
import { ParentComponent as Parent } from './parent-to-child/parent.component';

@NgModule({
  imports: [PassingDataRoutingModule, SharedModule],
  exports: [],
  declarations: [PassingDataComponent, ChildComponent, ParentComponent, Child, Parent],
  providers: [],
})
export class PassingDataModule {}
