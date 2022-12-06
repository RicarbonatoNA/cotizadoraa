import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from 'enviroments/enviroments.prod';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { 

  }

  Login(data: any): Observable<any>{
    const url='http://192.168.1.7:8000/api/login'
    return this.http.post<any>(url, data)
  }

  Logout():Observable<any>{
    const url='http://192.168.1.7:8000/api/auth/logout'
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    return this.http.post(url, {headers})
  }
}
