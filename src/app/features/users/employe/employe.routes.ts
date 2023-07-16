import {Routes} from "@angular/router";
import {ListEmployeComponent} from "./list-employe/list-employe.component";

export const EMPLOYES_ROUTES: Routes = [
  {path: '', component: ListEmployeComponent},
  {path: 'employes', component: ListEmployeComponent},
  // {path: 'employe', loadChildren: () => import ('./users/employe/employe.module').then(m => m.EmployeModule)}


]
