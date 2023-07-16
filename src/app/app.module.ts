import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "./shared/modules/material.module";
import {LoginComponent} from './features/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {APP_ROUTES} from "./app.routes";
import {NgModule} from '@angular/core';
import {AuthInterceptor} from "./shared/interceptor/auth.interceptor";
// import { JwtModule } from '@auth0/angular-jwt';
// used to create fake backend
// import { fakeBackendProvider } from './_helpers';

export function tokenGetter(): string | null {
  return sessionStorage.getItem("token");
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    RouterModule.forRoot(APP_ROUTES),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    BrowserModule,
    FormsModule,

    // JwtModule.forRoot({
    //   config: {
    //     tokenGetter: tokenGetter,
    //     allowedDomains: ['localhost:3000']
    //   }
    // })


  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
