import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Suggestion} from "../entities/suggestion";

@Injectable({
  providedIn: 'root'
})
export class DadataService {

  constructor(private http: HttpClient) {

  }

  public getSuggestions(query: string): Observable<Suggestion[]> {
    let url: string = "http://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
    const token: string = 'bb96dbb64bb5ecd47d61e4facc3d307c5f60eec5';
    const httpOptions = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', 'Token '.concat(token))

    };
    const body = {
      query: query,
    };
    return this.http.post<any>(`${url}`, body, httpOptions)
      .pipe(
        map(response => response.suggestions)
      );
  }


}


