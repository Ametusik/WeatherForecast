import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CityStorageService {

  city: Subject<string> = new Subject<string>();

  constructor() {
  }

}
