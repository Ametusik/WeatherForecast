import {Injectable} from '@angular/core';
import {DadataService} from "./dadata.service";
import {Observable} from "rxjs";
import {WeatherData} from "../entities/weather-data";
import {Address} from "../entities/address";
import {HttpClient} from "@angular/common/http";
import {CityStorageService} from "./city-storage.service";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  token: string = '428b905b01a726d22f6fdf885bda3bd6';
  cityData: Address;
  city: string;

  constructor(private dadataService: DadataService,
              private http: HttpClient,
              private cityStorageService: CityStorageService) {
  }

  /*getWeatherData(): Observable<WeatherData> {
    this.cityStorageService.city.subscribe(data=>{
      this.city = data;
      this.dadataService.getCoordinatesByCity(this.city).subscribe(data => {
        this.cityData = data
      });
    })
    let url: string = 'https://api.openweathermap.org/data/2.5/onecall?lat='
    url = url.concat(String(this.cityData.geo_lat));
    url = url.concat('&lon=');
    url = url.concat(String(this.cityData.geo_lon));
    url = url.concat('&exclude=current&appid=');
    url = url.concat(this.token);
    return this.http.get<any>(url);
  }*/
}
