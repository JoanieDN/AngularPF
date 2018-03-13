
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';


import { Car } from '../car.model';



@Injectable()
export class CarListService {

  clients: Array<Car> = [];
  constructor(public http: HttpClient) { }


  public findAll():Observable<Array<Car>>{

    return this.http.get<Array<Car>>('http://localhost:8080/findAll')
      .pipe(
        catchError(this.handleError)
      );

  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log(error.error.message);
    } else {
      console.log(error.status, error.error);
    }
    return new ErrorObservable('ERROR');
  }


}
