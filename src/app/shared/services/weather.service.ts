import {Injectable} from '@angular/core';
import {DadataService} from "./dadata.service";
import {Observable} from "rxjs";
import {WeatherData} from "../entities/weather-data";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  token: string = '428b905b01a726d22f6fdf885bda3bd6';

  constructor(private dadataService: DadataService,
              private http: HttpClient,
  ) {
  }

  getWeatherData(city: string): Observable<WeatherData> {
    let url: string = 'https://api.openweathermap.org/data/2.5/weather?q='
    url = url.concat(city);
    url = url.concat('&appid=');
    url = url.concat(this.token);
    return this.http.get<any>(url);
  }
}
