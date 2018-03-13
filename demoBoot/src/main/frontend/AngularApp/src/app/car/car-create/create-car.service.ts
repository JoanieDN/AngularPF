import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

import { RestResponse } from '../restResponse.model';
import { Car } from './../car.model';
@Injectable()
export class CreateCarService {

  public car : Car = new Car(null,null,null,null);

  constructor(private httpClient:HttpClient) { 
  }

  public validate(car: Car):boolean{

    let isValid = true;

    if (!car.anio)
      isValid = false;

      if (!car.color)
      isValid = false;

      if (!car.marca)
      isValid = false;

      if (!car.modelo)
      isValid = false;

    
    return isValid;

  }

  public save(car : Car) : Observable<RestResponse> {
    return this.httpClient.post<RestResponse>("http://localhost:8080/save",JSON.stringify(car));

  }

}
