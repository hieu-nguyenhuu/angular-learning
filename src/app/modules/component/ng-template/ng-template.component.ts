import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'ng-template-comp',
  templateUrl: './ng-template.component.html',
})
export class NgTemplateComponent {
  title = 'ngTemplateOutlet Example';

  @ViewChild('cardTemplate') cardTemplate!: TemplateRef<HTMLElement>;
  @ViewChild('listTemplate') listTemplate!: TemplateRef<HTMLElement>;

  mode = 'card';

  items = [
    {
      header: 'Angular Tutorial',
      content: 'The Angular Tutorial for Beginners & Professionals',
    },
    {
      header: 'Typescript Tutorial',
      content: 'The Complete Guide to Typescript',
    },
    {
      header: 'Entity Framework Code Tutorial',
      content: 'Learn Everything about Entity Framework Core',
    },
  ];

  modeOptions = [{ mode: 'card' }, { mode: 'list' }];

  get template() {
    if (this.mode == 'list') return this.listTemplate;
    return this.cardTemplate;
  }
}
