import {Routes} from "@angular/router";
import {FeaturesComponent} from "./features.component";

export const FEATURES_ROUTES: Routes = [
  {path: '', component: FeaturesComponent},
  {path: 'employes', loadChildren: () => import ('./users/employe/employe.module').then(m => m.EmployeModule)}
]
