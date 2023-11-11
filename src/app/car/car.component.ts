import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Car, CarService} from "../service/car-service";
import {MatDialog} from "@angular/material/dialog";
import {AddCarComponent} from "./add-car/add-car.component";
import {EditCarComponent} from "./edit-car/edit-car.component";
import {DeleteCarComponent} from "./delete-car/delete-car.component";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit, OnChanges{

  displayedColumns: string[] = ["id", "brand", "model", "color","actions"];
  carsSource: Car[] = [];
  showAddCarComponent: boolean = false;

  constructor(private carService: CarService, private matDialog: MatDialog) {}

  ngOnInit(): void {
    this.carService.getAllCars().subscribe((data: any) => {
      this.carsSource = data._embedded.carList;
    })
  }

  showAddCar() {
    this.showAddCarComponent = !this.showAddCarComponent;
  }

  onShowAddCarComponent(value: any) {
    this.showAddCarComponent = value;
  }

  showEditCar(element: any) {
    console.log(element)
    this.matDialog.open(EditCarComponent, {
      data: element,
      width: '500px',
      enterAnimationDuration: 500,
      exitAnimationDuration: 500
    });
  }

  deleteCar(element: any) {
    this.matDialog.open(DeleteCarComponent, {
      data: element,
      width: '500px',
      enterAnimationDuration: 500,
      exitAnimationDuration: 500
    });
    }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }
}
