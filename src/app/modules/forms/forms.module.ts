import { NgModule } from '@angular/core';

import { FormsComponent } from './forms.component';
import { FormsRoutingModule } from './forms.routing.module';
import { SharedModule } from 'src/app/shared';
import { ReactiveFormsComponent } from './reactive-form/reactive-forms.component';
import { TemplateFormsComponent } from './template-form/template-forms.component';
import { gteValidatorDirective } from './template-form/gte.validator';
import { gteService } from './template-form/gte.service';

@NgModule({
  imports: [FormsRoutingModule, SharedModule],
  exports: [],
  declarations: [FormsComponent, ReactiveFormsComponent, TemplateFormsComponent, gteValidatorDirective],
  providers: [gteService],
})
export class FormsModule {}
