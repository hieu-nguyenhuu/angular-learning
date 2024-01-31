import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms.component';
import { ReactiveFormsComponent } from './reactive-form/reactive-forms.component';
import { TemplateFormsComponent } from './template-form/template-forms.component';

const routes: Routes = [
  {
    path: 'forms',
    component: FormsComponent,
    children: [
      { path: 'reactive-form', component: ReactiveFormsComponent },
      { path: 'template-form', component: TemplateFormsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormsRoutingModule {}
