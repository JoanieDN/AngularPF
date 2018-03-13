import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { CreateCarService } from './create-car.service';
import { CarModule } from './../car.module';
import { Car } from './../car.model';
import { Ok } from '../httpStatus';

@Component({
  selector: 'cr-car-create',
  templateUrl: './car-create.component.html',
  styleUrls: ['./car-create.component.scss'],
  providers:[CreateCarService]
})
export class CarCreateComponent implements OnInit {
  private car: Car;
  private isValid: boolean= false;
  private messange: string ="";

  constructor(private createCarService : CreateCarService,
    private router: Router) {    
     this.car =  new Car(null,null,null,null);
   }

   public save():void{

    this.isValid = this.createCarService.validate(this.car);
    
    if (this.isValid){
      
      this.createCarService.save(this.car).subscribe(res=>{
          if (res.responseCode == Ok){

           this.messange = "Guardado exitoso";
           
           alert(this.messange);

           this.router.navigate(['/home']);
        

          }else
          {
            this.messange = res.message;
           
            this.isValid = false;
          }


      });

    }
    else{

      this.messange="Los campos son obligatorios";
      alert(this.messange);
    }
     

   }

 ngOnInit() {
 
  }



}
