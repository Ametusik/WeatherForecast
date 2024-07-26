import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SendCityService {

  private city: Subject<string>;

  constructor() {
  }

  public getCity(): Subject<string> {
    return this.city;
  }

  public setCity(city: string): void {
    this.city.next(city);
  }

}
