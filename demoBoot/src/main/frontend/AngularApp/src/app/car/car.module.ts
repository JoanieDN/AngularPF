import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import {HttpClientModule} from'@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { BrowserModule } from "@angular/platform-browser";
import 'hammerjs';
import{MatInputModule} from '@angular/material';

import { CarListComponent } from './car-list/car-list.component';
import { CarCreateComponent } from './car-create/car-create.component';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule
  ],
  declarations: [CarListComponent, CarCreateComponent],
})
export class CarModule { }
