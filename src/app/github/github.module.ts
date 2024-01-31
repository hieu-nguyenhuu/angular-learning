import { NgModule } from '@angular/core';
import { GithubRoutingModule } from './github-routing.module';

import { RepoListComponent } from './pages';

import { SharedModule } from '../shared';

@NgModule({
  imports: [GithubRoutingModule, SharedModule],
  providers: [],
  declarations: [RepoListComponent],
})
export class GithubModule {}
