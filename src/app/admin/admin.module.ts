import { NgModule } from '@angular/core';
import { DashboardComponent, RightsComponent, UserComponent } from './pages';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin.routing.module';

@NgModule({
  declarations: [UserComponent, DashboardComponent, RightsComponent, AdminComponent],
  imports: [AdminRoutingModule],
  providers: [],
})
export class AdminModule {}
