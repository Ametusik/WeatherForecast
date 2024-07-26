import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {DadataService} from "../../shared/services/dadata.service";
import {NgForOf} from "@angular/common";
import {Suggestion} from "../../shared/entities/suggestion";
import {MatAutocomplete, MatAutocompleteTrigger, MatOption} from "@angular/material/autocomplete";
import {MatInput} from "@angular/material/input";
import {LocalStorageService} from "../../shared/services/local-storage.service";
import {SendCityService} from "../../shared/services/send-city.service";

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    MatAutocomplete,
    MatOption,
    MatAutocompleteTrigger,
    MatInput
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {
  searchQuery: string;
  suggestions: Suggestion[];
  presavedSuggestions: string[];

  constructor(private dadataService: DadataService,
              private localStorageService: LocalStorageService,
              private sendCityService: SendCityService) {

  }

  ngOnInit() {
    this.dadataService.getSuggestions(this.searchQuery)
      .subscribe(data => {
        this.suggestions = data;
      });
    this.presavedSuggestions = this.localStorageService.getCities();
  }

  getSuggestions(): void {
    this.suggestions.length = 0;
    this.dadataService.getSuggestions(this.searchQuery)
      .subscribe(data => {
        this.suggestions = data;
      });
  }

  saveCity(city: string) {
    if (city) {
      this.localStorageService.setCity(city);
      this.sendCityService.setCity(city);
    }
  }


}
