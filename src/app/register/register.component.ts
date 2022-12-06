import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private RegisterService: RegisterService, private route: Router){

  }
  forum = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    password_confirmation: new FormControl('', [Validators.required])
  })

  get f(): { [key: string]: AbstractControl} {return this.forum.controls; }

  Register(){
    if(this.forum.valid){
      const Request = {
        'name': this.f['name'].value,
        'email': this.f['email'].value,
        'password': this.f['password'].value,
        'password_confirmation': this.f['password_confirmation'].value
      }
      console.log(Request)
      this.RegisterService.Register(Request).subscribe({
        next:(data)=>[console.log(data), this.route.navigate(['/login'])]
      })
    }
  }
}
