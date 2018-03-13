import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { AppModule } from './../app.module';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class SharedModule { }
