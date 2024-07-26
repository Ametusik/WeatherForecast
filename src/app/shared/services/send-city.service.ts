import {Injectable} from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SendCityService {

  private city: string;


  constructor() {
  }

  public getCity(): string {
    return this.city;
  }

  public setCity(city: string): void {
    this.city = city;
  }

}
