import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {DadataService} from "../../shared/services/dadata.service";
import {NgForOf} from "@angular/common";
import {Suggestion} from "../../shared/entities/suggestion";
import {LocalStorageService} from "../../shared/services/local-storage.service";
import {CityStorageService} from "../../shared/services/city-storage.service";


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {
  searchQuery: string = '';
  suggestions: Suggestion[] = [];
  presavedSuggestions: string[] = [];

  constructor(private dadataService: DadataService,
              private localStorageService: LocalStorageService,
              private cityStorageService: CityStorageService) {

  }

  ngOnInit() {
    this.getSuggestions();
  }

  getSuggestions(): void {
    this.dadataService.getSuggestions(this.searchQuery)
      .subscribe(data => {
        this.suggestions = data;
      });
  }

  saveCity() {
    if (this.searchQuery) {
      this.localStorageService.setCity(this.searchQuery);
      this.cityStorageService.city.next(this.searchQuery);
    }
  }


}
