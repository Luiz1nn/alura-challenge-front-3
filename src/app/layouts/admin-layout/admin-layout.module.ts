import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { AdminLayoutComponent } from './admin-layout.component';

import { MainComponent } from '@pages/main/main.component';
import { ComponentsModule } from '@app/components/components.module';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    ComponentsModule
  ]
})
export class AdminLayoutModule { }
