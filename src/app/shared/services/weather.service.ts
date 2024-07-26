import {Injectable} from '@angular/core';
import {SendCityService} from "./send-city.service";
import {DadataService} from "./dadata.service";
import {Observable} from "rxjs";
import {WeatherData} from "../entities/weather-data";
import {Address} from "../entities/address";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private token: string = '428b905b01a726d22f6fdf885bda3bd6';
  private cityData: Address;
  private city: string;

  constructor(private sendCityService: SendCityService,
              private dadataService: DadataService,
              private http: HttpClient) {
  }

  getWeatherData(): Observable<WeatherData> {
   this.sendCityService.getCity().sub;
    let url: string = 'https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}'
    this.dadataService.getCoordinatesByCity(city).subscribe(data => {
      this.cityData = data
    });
    url = url.concat(String(this.cityData.geo_lat));
    url = url.concat('&lon=');
    url = url.concat(String(this.cityData.geo_lon));
    url = url.concat('&exclude=current&appid=');
    url = url.concat(this.token);
    return this.http.get<any>(url);
  }
}
