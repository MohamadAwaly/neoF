import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "./shared/modules/material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HeaderComponent} from './header/header.component';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {NgModule} from '@angular/core';

import { DeleteCustomerComponent } from './features/users/customer/delete-customer/delete-customer.component';
import { UpdateCustomerComponent } from './features/users/customer/update-customer/update-customer.component';
import { UpdateEmployeComponent } from './features/users/employe/update-employe/update-employe.component';
import { DeleteEmployeComponent } from './features/users/employe/delete-employe/delete-employe.component';
import { NewCustomerComponent } from './features/users/customer/new-customer/new-customer.component';
import { NewEmployeComponent } from './features/users/employe/new-employe/new-employe.component';
import {AppComponent} from './app.component';
import { SidNavComponent } from './features/sid-nav/sid-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewCustomerComponent,
    UpdateCustomerComponent,
    DeleteCustomerComponent,
    NewEmployeComponent,
    UpdateEmployeComponent,
    DeleteEmployeComponent,
    SidNavComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
