import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent {
  constructor(private ClientService: ClientService, private ruta: Router){}

  onInit(){

  }

  formulario = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    identificador_fiscal: new FormControl('', [Validators.required]),
    telefono: new FormControl('', [Validators.required]),
    calle: new FormControl('', [Validators.required]),
    numero: new FormControl('', [Validators.required]),
    colonia: new FormControl('', [Validators.required]),
    codigo_postal: new FormControl('', [Validators.required]),
    ciudad: new FormControl('', [Validators.required]),
    estado: new FormControl('', [Validators.required]),
    pais: new FormControl('', [Validators.required]),
    notas: new FormControl('', [Validators.required]),
    user_id: new FormControl('', [Validators.required]),
  })

  get a(): { [key: string]: AbstractControl} {return this.formulario.controls; }

  Prueba(){
    if(this.formulario.valid){
      const Request = {
        'name': this.a['name'].value,
        'email': this.a['email'].value,
        'identificador_fiscal': this.a['identificador_fiscal'].value,
        'telefono': this.a['telefono'].value,
        'calle': this.a['calle'].value,
        'numero': this.a['numero'].value,
        'colonia': this.a['colonia'].value,
        'codigo_postal': this.a['codigo_postal'].value,
        'ciudad': this.a['ciudad'].value,
        'estado': this.a['estado'].value,
        'pais': this.a['pais'].value,
        'notas': this.a['notas'].value,
        'user_id': this.a['user_id'].value
      }
      console.log('ola')
      console.log(Request)
      this.ClientService.Create(Request).subscribe({
        next:(data)=>[console.log(data),this.formulario.reset()] //this.getClient()]
      })
    }
  }

/*   Prueba(){
    console.log('ola')
  } */
}
