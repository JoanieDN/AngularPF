import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { CarListService } from './car-list.service';
import { Car } from '../car.model';

@Component({
  selector: 'cr-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss'],
  providers:[CarListService]
})
export class CarListComponent implements OnInit {

  cars: Car[];
  constructor(private router: Router,private carListService:CarListService) { }

  ngOnInit() {

    this.carListService.findAll()
    .subscribe(cars => {
        console.log(cars);
        this.cars = cars;
    }, error => {
        console.log(error);
    });
console.log("async");

  }


  private findAll():void{

    this.carListService.findAll();

  }
}
