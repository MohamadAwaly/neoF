import {DeleteCustomerComponent} from "./users/customer/delete-customer/delete-customer.component";
import {UpdateCustomerComponent} from "./users/customer/update-customer/update-customer.component";
import {UpdateEmployeComponent} from "./users/employe/update-employe/update-employe.component";
import {DeleteEmployeComponent} from "./users/employe/delete-employe/delete-employe.component";
import {NewCustomerComponent} from "./users/customer/new-customer/new-customer.component";
import {NewEmployeComponent} from "./users/employe/new-employe/new-employe.component";
import {SidNavComponent} from "./sid-nav/sid-nav.component";
import {HeaderComponent} from "./header/header.component";
import {FeaturesComponent} from './features.component';
import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {FEATURES_ROUTES} from "./features.routes";
import {MaterialModule} from "../shared/modules/material.module";


@NgModule({
  declarations: [
    SidNavComponent,
    FeaturesComponent,
    HeaderComponent,
    NewCustomerComponent,
    UpdateCustomerComponent,
    DeleteCustomerComponent,
    NewEmployeComponent,
    UpdateEmployeComponent,
    DeleteEmployeComponent,
  ],
  imports: [
    MaterialModule,
    MaterialModule,
    RouterModule.forChild(FEATURES_ROUTES),

  ]
})
export class FeaturesModule {
}
