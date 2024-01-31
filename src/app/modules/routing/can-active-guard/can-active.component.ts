import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'can-active',
  templateUrl: './can-active.component.html',
})
export class CanActiveComponent {
  title = 'Route Guards Demo';

  constructor(private authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logoutUser();
    this.router.navigate(['/routing/can-active-guard']);
  }
}
