import {Component, OnInit} from '@angular/core';
import {WeatherService} from "../../shared/services/weather.service";
import {WeatherData} from "../../shared/entities/weather-data";
import {CityStorageService} from "../../shared/services/city-storage.service";

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent implements OnInit {

  weatherData: WeatherData | undefined;
  city: string;
  showWeatherData: boolean;

  constructor(private weatherService: WeatherService,
              private cityStorageService: CityStorageService) {
  }

  ngOnInit() {
    this.cityStorageService.city.subscribe(data => {
        this.city = data;
        console.log(data);
      }
    )
  }
}
