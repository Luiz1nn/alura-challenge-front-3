import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { AdminLayoutComponent } from './admin-layout.component';

import { ComponentsModule } from '@app/components/components.module';
import { MainComponent } from '@pages/main/main.component';
import { ListProductsComponent } from '@products/list-products/list-products.component';
import { ProductComponent } from '@products/product/product.component';
import { AddProductComponent } from '@products/add-product/add-product.component';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    MainComponent,
    ListProductsComponent,
    ProductComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    ComponentsModule
  ]
})
export class AdminLayoutModule { }
