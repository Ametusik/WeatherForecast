import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {DadataService} from "./shared/services/dadata.service";
import {SearchComponent} from "./components/search/search.component";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WeatherForecast';

  constructor(private dadataService: DadataService) {
  }


}
