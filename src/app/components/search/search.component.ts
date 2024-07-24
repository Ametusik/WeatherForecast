import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {DadataService} from "../../shared/services/dadata.service";
import {NgForOf} from "@angular/common";
import {Suggestion} from "../../shared/entities/suggestion";
import {MatAutocomplete, MatAutocompleteTrigger, MatOption} from "@angular/material/autocomplete";
import {MatInput} from "@angular/material/input";

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

  constructor(private dadataService: DadataService) {

  }

  ngOnInit() {
    this.dadataService.getSuggestions(this.searchQuery)
      .subscribe(data => {
        this.suggestions = data.suggestions;
      });
  }

  getSuggestions(): void {
    this.suggestions.length = 0;
    this.dadataService.getSuggestions(this.searchQuery)
      .subscribe(data => {
        this.suggestions = data.suggestions;
      });
  }

}
