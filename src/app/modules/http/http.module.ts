import { NgModule } from '@angular/core';

import { HttpComponent } from './http.component';
import { HttpRoutingModule } from './http.routing.module';
import { SharedModule } from 'src/app/shared';
import { GitHubService as GetService } from './get/github.service';
import { GetComponent } from './get/get.component';

@NgModule({
  imports: [HttpRoutingModule, SharedModule],
  exports: [],
  declarations: [HttpComponent, GetComponent],
  providers: [GetService],
})
export class HttpModule {}
