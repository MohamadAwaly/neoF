import { ListEmployeComponent } from './list-employe/list-employe.component';
import { EMPLOYES_ROUTES } from './employe.routes';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [ListEmployeComponent],
  imports: [CommonModule, RouterModule.forChild(EMPLOYES_ROUTES)],
})
export class EmployeModule {}
