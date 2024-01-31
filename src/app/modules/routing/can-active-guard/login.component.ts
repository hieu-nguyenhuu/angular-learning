import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  templateUrl: './login.component.html',
  styles: [``],
})
export class LoginComponent implements OnInit {
  invalidCredentialMsg!: string;
  username!: string;
  password!: string;
  retUrl: string = '/routing/can-active-guard';

  constructor(private authService: AuthService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe((params) => {
      this.retUrl = params.get('retUrl') ?? '';
      console.log('LoginComponent/ngOnInit ' + this.retUrl);
    });
  }

  onFormSubmit(loginForm: NgForm) {
    this.authService.login(loginForm.value.username, loginForm.value.password).subscribe(() => {
      console.log('return to ' + this.retUrl);
      if (this.retUrl != null) {
        this.retUrl = 'routing/can-active-guard/' + this.retUrl;
        this.router.navigate([this.retUrl]);
      } else {
        this.router.navigate(['/routing/can-active-guard']);
      }
    });
  }
}
