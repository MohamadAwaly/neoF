import {SessionLoginService} from "../../shared/services/session-login.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../shared/services/auth.service";
import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  form: FormGroup;

  constructor(private sessionLogin: SessionLoginService,
              private router: Router,
              private fb: FormBuilder,
              private authService: AuthService) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  login() {
    if (this.form.valid) {
      console.log('inside');
      this.authService.login({
        username: this.username.value,
        password: this.password.value
      }).pipe(
        tap(() => this.router.navigate(['features']))
      ).subscribe()
    }
  }

  get username(): FormControl {
    return this.form.get('username') as FormControl;
  }

  get password(): FormControl {
    return this.form.get('password') as FormControl;
  }
}
