import { NgModule } from '@angular/core';

import { ComponentComponent } from './component.component';
import { Example1Component } from './example1/example1.component';
import { Example2Component } from './example2/example2.component';
import { FancyBtnComponent } from './example1/fancy-btn.component';
import { CardComponent } from './example2/card.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { ItemViewComponent } from './ng-template/item-view.component';

const routes: Routes = [
  {
    path: 'component',
    component: ComponentComponent,
    children: [
      { path: 'example1', component: Example1Component },
      { path: 'example2', component: Example2Component },
      { path: 'ng-template', component: NgTemplateComponent },
    ],
  },
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forChild(routes)],
  exports: [],
  declarations: [
    ComponentComponent,
    Example1Component,
    Example2Component,
    FancyBtnComponent,
    CardComponent,
    NgTemplateComponent,
    ItemViewComponent,
  ],
  providers: [],
})
export class ComponentModule {}
