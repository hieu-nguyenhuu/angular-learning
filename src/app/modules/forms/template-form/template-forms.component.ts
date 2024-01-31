import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'temp-forms-comp',
  templateUrl: './template-forms.component.html',
})
export class TemplateFormsComponent implements OnInit {
  title = 'Template driven forms';

  @ViewChild('contactForm') contactForm!: NgForm;

  contact!: contact;
  add_country: string = '';
  countryList: country[] = [new country(1, 'India'), new country(2, 'USA'), new country(3, 'England')];

  ngOnInit() {
    this.contact = {
      firstname: '',
      lastname: '',
      gender: 'male',
      isToc: true,
      email: '',
      age: '',
      country: 0,
    };
  }

  setDefault() {
    this.contact = {
      firstname: 'Hieuuuuuuu',
      lastname: 'NguyenHuu',
      gender: 'male',
      isToc: true,
      country: 1,
      email: 'Nguyenhuuhieu9alv@gmail.com',
      age: '23',
    };
  }

  onSubmit() {
    console.log(this.contactForm.value);
  }
  addCountry() {
    const maxId = this.countryList.reduce<number>(
      (max, item) => (max < item.id ? item.id : max),
      this.countryList[0].id,
    );
    const newCountry = new country(maxId + 1, this.add_country);
    this.countryList.push(newCountry);
  }
}

export class contact {
  firstname: string = '';
  lastname: string = '';
  gender: string = '';
  isToc: boolean = false;
  email: string = '';
  age: string = '';
  country: number = 0;
}
export class country {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
