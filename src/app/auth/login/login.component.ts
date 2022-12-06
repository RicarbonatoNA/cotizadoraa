import { Component, OnInit} from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private LoginService: LoginService, private route: Router){

  }
  forum = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  get f(): { [key: string]: AbstractControl} {return this.forum.controls; }

  Login(){
    if(this.forum.valid){
      const Request = {
        'email': this.f['email'].value,
        'password': this.f['password'].value
      }
      console.log(Request)
      this.LoginService.Login(Request).subscribe({
        next:(data)=>[console.log(data), localStorage.setItem('token', data.access_token), this.route.navigate(['/home'])]
      })
    }
  }
}

