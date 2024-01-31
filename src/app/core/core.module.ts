import { NgModule, Optional, SkipSelf } from '@angular/core';
import { GithubService } from './models/services';

@NgModule({
  declarations: [],
  imports: [],
  providers: [GithubService],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error('Should import core module in the root modules');
    }
  }
}
