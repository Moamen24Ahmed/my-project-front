import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  apiUrl = 'https://dummyjson.com/auth/login';

  private tokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<
    string | null
  >(null);

  constructor(private http: HttpClient) {

  //   if (localStorage) {
  //     const token = localStorage.getItem('token');

  //     if (token) {
  //       this.tokenSubject.next(token);
  //     }
  //   }
  }

  login(userName: string, password: string): Observable<any> {
    return this.http
      .post<any>(this.apiUrl, {
        username: 'emilys',
        password: 'emilyspass',
      })
      .pipe(
        tap((res) => {
          if (localStorage) {
            const token = res;
            localStorage.setItem('token', token);
            this.tokenSubject.next(token.accessToken);
            console.log(token);
          }
        })
      );
  }

  getToken(): Observable<string | null> {
    return this.tokenSubject.asObservable();
  }

  logOut() {
    if (localStorage) {
      localStorage.removeItem('token');
      this.tokenSubject.next(null);
    }
  }

  isAuthanticatedd(): boolean {
    return this.tokenSubject.value !== null;
  }
}
