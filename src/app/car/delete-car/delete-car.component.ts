import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Car, CarService} from "../../service/car-service";

@Component({
  selector: 'app-delete-car',
  templateUrl: './delete-car.component.html',
  styleUrls: ['./delete-car.component.css']
})
export class DeleteCarComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Car, private service: CarService) { }


  deleteCar() {
    this.service.deleteCar(this.data.id).subscribe((data: any) => {
      console.log('deleted')
    })
  }
}
