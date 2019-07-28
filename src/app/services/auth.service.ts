import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Observable, pipe, throwError} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private message: string;


  constructor(private _router: Router,private http: HttpClient) { }

  endpoint = 'http://localhost:4080/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  private extractData(res: Response) {
    let body = res;
    return body || {status:'fail'};
  }

  clear(): void {
    localStorage.clear();
  }
  isAuthenticated(): boolean {
    return localStorage.getItem('token') != null && !this.isTokenExpired();
  }

  isTokenExpired(): boolean {
    return false;
  }

  loginServer(user): void {

    this.http.get(this.endpoint+'?user='+user).pipe(map(this.extractData)).subscribe(data => {

      if(data.status!='fail')
        {
          localStorage.setItem('token', data.status+'');
          localStorage.setItem('user', user);
          this._router.navigate(['/dashboard']);
        }
        else window.alert('usuario invalido');

    })
  }

  login(user): void {


    if(user=='noel')
    {
      localStorage.setItem('token', 'Admin');
      localStorage.setItem('user', user);
    }
    else if(user=='oscar')
    {
      localStorage.setItem('token', 'Guest');
      localStorage.setItem('user', user);
    }
    else window.alert('usuario invalido');
    this._router.navigate(['/dashboard']);
  }

  logout(): void {
    this.clear();
    this._router.navigate(['/login']);
  }

  decode() {
    return (localStorage.getItem('token'));
  }
}
