import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth', 
    loadChildren: () => import("./modules_/auth/auth.module").then(x => x.AuthModule),
    data: { preload: false, delay: false }
  },
  {
    path: 'home',
    loadChildren: () => import("./modules_/home/home.module").then(x=> x.HomeModule),
    data: { preload: false, delay: false }
  },
  { path: "**", redirectTo: "auth" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
