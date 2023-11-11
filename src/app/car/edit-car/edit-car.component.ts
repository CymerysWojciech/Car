import {Component, Inject, Injector, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Car, CarService} from "../../service/car-service";

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent  {


    constructor(@Inject(MAT_DIALOG_DATA) public data: Car, private service: CarService) { }

  editCar(brand: string, model: string, color: string) {
    this.service.editCar(this.data.id, brand, model, color).subscribe((data: any) => {
    })
  }

  exit() {

  }
}
