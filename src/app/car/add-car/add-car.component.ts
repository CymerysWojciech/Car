import {Component, EventEmitter, Output} from '@angular/core';
import {CarService} from "../../service/car-service";
@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent {
  @Output() showAddCarComponent= new EventEmitter<boolean>();

  constructor(private carService: CarService) {
  }
  addCar(  brand: string, model: string, color: string) {
    this.carService.addCar(brand, model, color).subscribe((data: any) => {
      console.log(data)
    });
  }

  exit() {
    console.log("exit");
    this.showAddCarComponent.emit(false);
  }
}
