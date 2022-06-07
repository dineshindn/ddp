import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarRoutingModule } from './navbar-routing.module';
import { NavbarComponent } from './navbar.component';
import { NavbarService } from './navbar.service';
import { CoreModule } from '../core_/core.module';


@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    NavbarRoutingModule,
    CoreModule
  ],
  providers:[
    NavbarService
  ]
})
export class NavbarModule { }
