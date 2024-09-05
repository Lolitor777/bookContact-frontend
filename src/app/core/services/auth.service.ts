import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { authEnvironments } from '../../../environments/environments';

@Injectable()

export class AuthService {
  private _tokenKey = 'authToken'

  constructor(private _http: HttpClient, private router: Router) { }

  createUser( name: string, email: string, password: string ): Observable<any>{
    return this._http.post<any>(`${authEnvironments.createUser}`, { name, email, password })
  }

  login( email: string, password: string ): Observable<any>{
    return this._http.post<any>(`${authEnvironments.login}`, { email, password } ).pipe(
      tap(response => {
        if (response.token) {
          this.setToken( response.token ) 
        }
      })
    )
  }

  private setToken(token: string): void {
    localStorage.setItem( this._tokenKey, token );
  }

  private getToken(): string | null {
    return localStorage.getItem(this._tokenKey);
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    if (!token) {
      return false;
    }

    const payload = JSON.parse(atob(token.split('.')[1]));
    const exp = payload.exp * 1000;
    return Date.now() < exp;
  }

  logout(): void {
    localStorage.removeItem(this._tokenKey);
    this.router.navigate(['/login'])
  }

}
