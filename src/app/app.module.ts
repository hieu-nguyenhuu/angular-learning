import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SharedModule } from './shared';
import { AdminModule } from './admin/admin.module';
import { GithubModule } from './github';
import { HomeModule } from './home';
import { CoreModule } from './core/core.module';
import { RoutingModule } from './modules/routing/routing.module';
import { GithubService } from './core/models';
import { HttpModule } from './modules/http/http.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppHttpInterceptor } from './AppHttpInterceptor';
import { PassingDataModule } from './modules/passing-data/passing-data.module';
import { FormsModule } from './modules/forms/forms.module';
import { ComponentModule } from './modules/component/component.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    GithubModule,
    HomeModule,
    RoutingModule,
    AdminModule,
    HttpModule,
    PassingDataModule,
    FormsModule,
    ComponentModule,
  ],
  providers: [
    GithubService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
