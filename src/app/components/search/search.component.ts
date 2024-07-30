import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {DadataService} from "../../shared/services/dadata.service";
import {NgForOf, NgIf} from "@angular/common";
import {Suggestion} from "../../shared/entities/suggestion";
import {LocalStorageService} from "../../shared/services/local-storage.service";
import {CityStorageService} from "../../shared/services/city-storage.service";


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgIf
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {
  searchQuery: string = '';
  suggestions: string[] = [];
  presavedSuggestions: string[] = [];
  uniqueSuggestions: string[] = [];
  shouldSaveCity: boolean = false;

  constructor(private dadataService: DadataService,
              private localStorageService: LocalStorageService,
              private cityStorageService: CityStorageService) {

  }

  ngOnInit() {
    this.presavedSuggestions = this.localStorageService.getCities()
  }

  getSuggestions(): void {
    this.dadataService.getSuggestions(this.searchQuery)
      .subscribe(data => {
        this.suggestions = data
          .filter(suggestion => !this.presavedSuggestions.includes(suggestion.data.city))
          .map(suggestion => suggestion.data.city);
      });
  }

  saveCity() {
    if (this.searchQuery) {
      this.cityStorageService.city.next(this.searchQuery);
      if (this.shouldSaveCity) {
        this.localStorageService.setCity(this.searchQuery);
      }
    }
  }

  removeDuplicatesObjects(arr: any[], key: string): any[] {
    const uniqueMap = new Map();
    arr.forEach(item => {
      const keyValue = item[key];
      if (!uniqueMap.has(keyValue)) {
        uniqueMap.set(keyValue, item);
      }
    });
    return Array.from(uniqueMap.values());
  }


}
