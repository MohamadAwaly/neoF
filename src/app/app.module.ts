import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "./shared/modules/material.module";
import {LoginComponent} from './features/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {APP_ROUTES} from "./app.routes";
import {NgModule} from '@angular/core';

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
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
