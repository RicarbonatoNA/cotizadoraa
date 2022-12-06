import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BusinessService } from '../services/business.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent {
constructor(private BusinessService: BusinessService, private route: Router){
  
}

ngOnInit(): void{
this.getUsers()
this.getBusiness()
}

forum = new FormGroup({
  name: new FormControl('', [Validators.required]),
  identificador_fiscal: new FormControl('', [Validators.required]),
  direccion_facturacion: new FormControl('', [Validators.required]),
  telefono: new FormControl('', [Validators.required]),
  logo: new FormControl('', [Validators.required]),
  notas: new FormControl('', [Validators.required]),
  user_id: new FormControl('', [Validators.required])
})

get f(): { [key: string]: AbstractControl} {return this.forum.controls; }

Create(){
  if(this.forum.valid){
    const Request = {
      'name': this.f['name'].value,
      'identificador_fiscal': this.f['identificador_fiscal'].value,
      'direccion_facturacion': this.f['direccion_facturacion'].value,
      'telefono': this.f['telefono'].value,
      'logo': this.f['logo'].value,
      'notas': this.f['notas'].value,
      'user_id': this.f['user_id'].value,
    }
    console.log(Request)
    this.BusinessService.Create(Request).subscribe({
      next:(data)=>[console.log(data),this.forum.reset(), this.getBusiness()]
    })
  }
}
public listaUsers: any = []
getUsers(){
  this.BusinessService.GetUsers().subscribe(Response=>{this.listaUsers = Response})
  console.log(this.listaUsers)
}

public listaBusiness: any =[]
getBusiness(){
  this.BusinessService.Read().subscribe(Response=>{this.listaBusiness = Response})
}

Delete(id: number){
  this.BusinessService.Delete(id).subscribe();
  this.getBusiness()
}

foro = new FormGroup({
  name2: new FormControl('', [Validators.required]),
  identificador_fiscal2: new FormControl('', [Validators.required]),
  direccion_facturacion2: new FormControl('', [Validators.required]),
  telefono2: new FormControl('', [Validators.required]),
  logo2: new FormControl('', [Validators.required]),
  notas2: new FormControl('', [Validators.required]),
  user_id2: new FormControl('', [Validators.required])
})

get g(): { [key: string]: AbstractControl} {return this.foro.controls; }

Update(){
  if(this.foro.valid){
    const Request2 = {
      'name': this.g['name2'].value,
      'identificador_fiscal': this.g['identificador_fiscal2'].value,
      'direccion_facturacion': this.g['direccion_facturacion2'].value,
      'telefono': this.g['telefono2'].value,
      'logo': this.g['logo2'].value,
      'notas': this.g['notas2'].value,
      'user_id': this.g['user_id2'].value,
    }
    console.log(Request2)
    this.BusinessService.Update(Request2, this.id).subscribe({
      next:(data)=>[console.log(data),this.forum.reset(), this.getBusiness()]
    })
  }
}

id !:number;

getId(id: number){
  this.id=id
  console.log(this.id)
}
}
