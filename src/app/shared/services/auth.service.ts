import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {BehaviorSubject, Observable} from "rxjs";
import {LoginResponseI} from "../interfaces/login-response-i";
import {map, tap} from "rxjs/operators";
import {User} from "../interfaces/user";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient, private snackbar: MatSnackBar) {
  }

  login(user: User): Observable<LoginResponseI> {
    return this._http.post<LoginResponseI>('login', { user }).pipe(
      map((resp: LoginResponseI) => {
        return new LoginResponseI(resp);
      }),
      tap((resp: LoginResponseI) => {
        console.log(resp);
        this.jwtToken.next({
          isAuthenticated: true,
          token: resp.token,
          expire: moment(this._jwtHelper.getTokenExpirationDate(resp.token)),
        });
        this._subscription = this._initTimer();
        const decodedJwt = this._jwtHelper.decodeToken(resp.token);

      }


  }

  public jwtToken: BehaviorSubject<JwtToken> = new BehaviorSubject<JwtToken>(
    {
      isAuthenticated: null,
      token: null,
      expire: null,
    },)


}
