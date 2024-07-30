import {Component, OnInit} from '@angular/core';
import {WeatherService} from "../../shared/services/weather.service";
import {WeatherData} from "../../shared/entities/weather-data";
import {CityStorageService} from "../../shared/services/city-storage.service";
import {TranslateWeatherPipe} from "../../shared/pipes/translate-weather.pipe";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [
    TranslateWeatherPipe,
    NgIf
  ],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent implements OnInit {

  weatherData: WeatherData;
  city: string = '';
  showWeatherData: boolean;
  protected readonly Math = Math;
  loading: boolean = false;

  constructor(private weatherService: WeatherService,
              private cityStorageService: CityStorageService) {
  }

  ngOnInit() {
    this.cityStorageService.city.subscribe(data => {
      this.city = data;
      if (this.city !== '') {
        this.loading = true;
        this.weatherService.getWeatherData(this.city).subscribe(
          data => {
            this.weatherData = data;
            this.showWeatherData = !!this.weatherData;
            this.loading = false;
          },
          error => {
            console.error('Ошибка при получении данных о погоде:', error);
            this.showWeatherData = false;
            this.loading = false;
          }
        );
      }
    });
  }


}
