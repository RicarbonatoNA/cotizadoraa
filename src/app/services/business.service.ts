import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor(private http:HttpClient) { }

  Create(data: any): Observable<any>{
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    const url= 'http://192.168.1.7:8000/api/auth/business/CreateBusiness'
    return this.http.post<any>(url,data,{headers})
  }

  Read(){
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    const url= 'http://192.168.1.7:8000/api/auth/business/ReadBusiness'
    return this.http.get(url,{headers})
  }

  Update(data: any, id: number): Observable<any>{
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    const url= `http://192.168.1.7:8000/api/auth/business/UpdateBusiness/${id}`
    return this.http.post<any>(url,data,{headers})
  }

  Delete(id: number){
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    const url= `http://192.168.1.7:8000/api/auth/business/DeleteBusiness/${id}`
    return this.http.delete(url,{headers})
  }

  GetUsers(){
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    const url= 'http://192.168.1.7:8000/api/auth/users'
    return this.http.get(url,{headers})
  }
}
