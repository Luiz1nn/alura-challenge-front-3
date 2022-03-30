import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { AdminLayoutComponent } from './admin-layout.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AdminLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes)
  ]
})
export class AdminLayoutModule { }
