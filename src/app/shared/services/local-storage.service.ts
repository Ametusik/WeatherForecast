import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {
  }

  setCity(city: string) {
    localStorage.setItem(city, city);
  }

  getCities(): string[] {
    let cities: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      // @ts-ignore
      cities.push(localStorage.getItem(localStorage.key(i)));
    }
    return cities
  }

  deleteCity(city: string) {
    localStorage.removeItem(city);
  }


}
