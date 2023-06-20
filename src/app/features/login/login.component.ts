import {Component, OnInit} from '@angular/core';
import {SessionLoginService} from "../../shared/services/session-login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  wrongCredentials: boolean = false;

  constructor(private sessionLogin: SessionLoginService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  login() {
    this.wrongCredentials = false;
    this.sessionLogin.login(this.username, this.password).subscribe(result => {
      //TODO redirect
      console.log('dans le true');
      this.router.navigate(['features']);
    }, error => {
      console.log('dans lerror');
      this.wrongCredentials = false;
      this.router.navigate(['/']);

    })
  }

}
