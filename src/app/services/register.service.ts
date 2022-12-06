import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }
  Register(data: any): Observable<any>{
    const url='http://192.168.1.7:8000/api/register'
    return this.http.post<any>(url, data)
  }
}
