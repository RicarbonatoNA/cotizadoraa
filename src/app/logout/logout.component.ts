import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {
constructor(private logoutService: LoginService, private route: Router){
}

Logout() {
  localStorage.removeItem('token')
  this.route.navigate(['/login'])
}
}
