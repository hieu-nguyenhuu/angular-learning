import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example2',
  template: `<app-card>
      <header><h1>Angular</h1></header>
      <content>One framework. Mobile & desktop.</content>
      <footer><b>Super-powered by Google </b></footer>
    </app-card>

    <app-card>
      <header><h1 style="color:red;">React</h1></header>
      <content>A JavaScript library for building user interfaces</content>
      <footer><b>Facebook Open Source </b></footer>
    </app-card>

    <app-card>
      <div class="header"><h1>Typescript</h1></div>
      <div class="content">Typescript is a javascript for any scale</div>
      <div class="footer"><b>Microsoft </b></div>
    </app-card>`,
})
export class Example2Component implements OnInit {
  constructor() {}

  ngOnInit() {}
}
