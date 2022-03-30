import { Routes } from '@angular/router';

import { MainComponent } from '@pages/main/main.component';
import { ListProductsComponent } from '@products/list-products/list-products.component';
import { ProductComponent } from '@products/product/product.component';

export const AdminLayoutRoutes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'products/list-products', component: ListProductsComponent },
  { path: 'products/product', component: ProductComponent },
];
