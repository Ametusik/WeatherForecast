import {Component, OnInit} from '@angular/core';
import {WeatherService} from "../../shared/services/weather.service";
import {WeatherData} from "../../shared/entities/weather-data";
import {CityStorageService} from "../../shared/services/city-storage.service";
import {TranslateWeatherPipe} from "../../shared/pipes/translate-weather.pipe";

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [
    TranslateWeatherPipe
  ],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent implements OnInit {

  weatherData: WeatherData;
  city: string = '';
  showWeatherData: boolean;

  constructor(private weatherService: WeatherService,
              private cityStorageService: CityStorageService) {
  }

  ngOnInit() {
    this.cityStorageService.city.subscribe(data => {
        this.city = data;
        if (this.city != '') {
          this.weatherService.getWeatherData(this.city).subscribe(data => {
            this.weatherData = data;
            if (this.weatherData) {
              this.showWeatherData = true;
            }
          })
        }

      }
    )
  }

  protected readonly Math = Math;
}
