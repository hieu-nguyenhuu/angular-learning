import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { gte } from './gte.validator';

@Component({
  selector: 'reactive-forms-comp',
  templateUrl: './reactive-forms.component.html',
})
export class ReactiveFormsComponent implements OnInit {
  title = 'Angular Reactive forms';

  ngOnInit(): void {
    //statusChange trả về valid/invalid
    this.contactForm?.get('firstname')?.statusChanges.subscribe((newStatus) => {
      console.log('firstname status changed');
      console.log(newStatus); //latest
      console.log(this.contactForm?.get('firstname')?.status); //latest
      console.log(this.contactForm?.status); //old. vì event sẽ được emit sau khi formControl thay đổi, nhưng trước khi parent (formGroup) thay đổI

      setTimeout(() => {
        console.log(this.contactForm?.status);
      });
    });

    this.contactForm?.get('address')?.statusChanges.subscribe((newStatus) => {
      console.log('address status changed');
      console.log(newStatus);
    });

    this.contactForm?.statusChanges.subscribe((newStatus) => {
      console.log('form status changed');
      console.log(newStatus);
    });
  }

  contactForm = new FormGroup({
    firstname: new FormControl('', [Validators.required, Validators.minLength(10)]),
    lastname: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.pattern('^[a-zA-Z]+$')]),
    email: new FormControl('', [Validators.email, Validators.required]),
    gender: new FormControl('', [Validators.required]),
    age: new FormControl('', [gte(18), Validators.required]),
    isMarried: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    address: new FormGroup({
      city: new FormControl('', [Validators.required]),
      street: new FormControl('', [Validators.required]),
      pincode: new FormControl('', [Validators.required]),
    }),
  });

  get firstname() {
    return this.contactForm.get('firstname');
  }

  get lastname() {
    return this.contactForm.get('lastname');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get gender() {
    return this.contactForm.get('gender');
  }

  get age() {
    return this.contactForm.get('age');
  }

  get isMarried() {
    return this.contactForm.get('isMarried');
  }

  get country() {
    return this.contactForm.get('country');
  }

  get city() {
    return this.contactForm.get('address')?.get('city');
  }

  get street() {
    return this.contactForm.get('address')?.get('street');
  }

  get pincode() {
    return this.contactForm.get('address')?.get('pincode');
  }

  countryList: country[] = [new country('1', 'India'), new country('2', 'USA'), new country('3', 'England')];

  onSubmit() {
    console.log(this.contactForm.value);
  }
  setDefault() {
    const contact: contact = {
      firstname: 'Hieuuuuuuu',
      lastname: 'nguyenhuu',
      email: 'nguyenhuuhieu9alv@gmail.com',
      gender: 'male',
      age: 20,
      isMarried: false,
      country: '3',
      address: {
        city: 'Bac Ninh',
        street: 'An Dong',
        pincode: '100000',
      },
    };
    this.contactForm.setValue(contact);
  }
  withOnlySelf() {
    this.contactForm?.get('firstname')?.setValue('', { onlySelf: true });
  }
  withoutEmitEvent() {
    this.contactForm?.get('firstname')?.setValue('', { emitEvent: false });
  }
}

export class contact {
  firstname: string = '';
  lastname: string = '';
  email: string = '';
  gender: string = '';
  age: number = 0;
  isMarried: boolean = false;
  country: string = '';
  address: {
    city: string;
    street: string;
    pincode: string;
  } = { city: '', street: '', pincode: '' };
}

export class country {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
