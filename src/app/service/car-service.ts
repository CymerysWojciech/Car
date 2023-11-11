import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface Car {
  "id": number,
  "brand": "string",
  "model": "string",
  "color": "string"
}
@Injectable({
  providedIn: 'root'
})
export class CarService {
  baseUrl = 'http://localhost:8084/api/v1/car';
  constructor( private http: HttpClient) {}

  getAllCars():Observable<any> {
    return this.http.get(this.baseUrl);
  }

  addCar(brand: string, model: string, color: string) {
    return this.http.post(this.baseUrl, {brand, model, color});
  }

  editCar(id: number | undefined, brand: string, model: string, color: string) {
    return this.http.put(this.baseUrl + '/' + id, {brand, model, color});
  }

  deleteCar(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
