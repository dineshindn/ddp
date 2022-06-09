import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth.routing.module';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AuthComponent } from './auth.component';
import { CoreModule } from 'src/app/core_/core.module';




@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    RouterModule,
    CoreModule
  ],
  providers:[
    
  ]
})
export class AuthModule { }
