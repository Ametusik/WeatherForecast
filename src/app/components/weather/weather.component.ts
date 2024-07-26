import {Component, OnInit} from '@angular/core';
import {WeatherService} from "../../shared/services/weather.service";
import {WeatherData} from "../../shared/entities/weather-data";
import {SendCityService} from "../../shared/services/send-city.service";

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent implements OnInit {

  private weatherData: WeatherData;

  constructor(private weatherService: WeatherService,
              private sendCityService: SendCityService) {
  }

  ngOnInit() {
    this.weatherService.getWeatherData().subscribe(data => {
      this.weatherData = data;
    })
  }
}
