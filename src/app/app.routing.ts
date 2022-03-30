import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  {
    path: '', component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import("@app/layouts/auth-layout/auth-layout.module").then(m => m.AuthLayoutModule)
      }
    ]
  },
  {
    path: '', component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import("@app/layouts/admin-layout/admin-layout.module").then(m => m.AdminLayoutModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
