import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CarListComponent} from './car/car-list/car-list.component';
import {CarCreateComponent} from './car/car-create/car-create.component';


const routes: Routes = [
  {path: '', redirectTo:'/home',pathMatch:'full'},
  {path: 'home', component: CarListComponent},
 {path: 'register', component: CarCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
