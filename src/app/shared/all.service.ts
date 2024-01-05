import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AllService {

  constructor(private http: HttpClient,private router : Router) { }
  baseUrl = 'http://localhost:8080/';

  getadmin(): Observable<any[]>{
    let url = `${this.baseUrl}admin`;
    // console.log(url)
    return this.http.get<any[]>(url);
  }

  getusers():Observable<any[]>{
    let url = `${this.baseUrl}users`;
    // console.log(url)
    return this.http.get<any[]>(url);
  }

  getuser(username : string, password : string): Observable<any[]>{
    let url = `${this.baseUrl}user/${username}/${password}`;
    // console.log(url)
    return this.http.get<any[]>(url);
  }

  createuser(formValue : any): Observable<any[]>{
    let url = `${this.baseUrl}signUp`;
    // console.log(url)
    return this.http.post<any[]>(url,formValue);
  }
  //voters 

  createCandidates(formValue:any): Observable<any[]>{
    let url = `${this.baseUrl}polls/createcandidate`;
    // console.log(url)
    return this.http.post<any[]>(url,formValue);
  }

  getCandidates():Observable<any[]>{
    let url = `${this.baseUrl}polls/candidates`;
    // console.log(url)
    return this.http.get<any[]>(url);
  }

  deletCandidate(username : any):Observable<any[]>{
    let url = `${this.baseUrl}polls/${username}`;
    // console.log(url)
    return this.http.delete<any[]>(url);
  }
  updateCandidate(value:any): Observable<any[]>{
    let url = `${this.baseUrl}polls/updatecandidate`;
    // console.log(url)
    return this.http.put<any[]>(url,value);
  }
  updateuser(uservalue:any): Observable<any[]>{
    let url = `${this.baseUrl}user/update`;
    // console.log(url)
    return this.http.put<any[]>(url,uservalue);
  }
  logout(){
    // this.value = null; 
    sessionStorage.removeItem('token')
    sessionStorage.clear()
    this.router.navigate(['/login'])
    }
    
}
