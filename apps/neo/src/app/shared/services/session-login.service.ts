import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SessionLoginService {
  LOGIN_URL = '/neo/login/';
  LOGIN_OUT = '/neo/logout/';

  constructor(private httpClient: HttpClient) {}

  public login(pUsername: string, pPassword: string) {
    const loginData = {
      username: pUsername,
      pPassword: pPassword,
    };
    return new Observable<boolean>((observer) => {
      // this.httpClient.post(environment.baseUrl + this.LOGIN_URL, loginData).subscribe(result => {
      //   observer.next(true);
      //   observer.complete();
      // }, error => {
      //   observer.error(false);
      //   observer.complete();
      // })
      observer.next(true);
    });
  }

  public logout() {
    return new Observable<boolean>((observer) => {
      this.httpClient.get(environment.baseUrl + this.LOGIN_OUT).subscribe(
        (result) => {
          observer.next(true);
          observer.complete();
        },
        (error) => {
          observer.error(true);
          observer.complete();
        }
      );
    });
  }
}
