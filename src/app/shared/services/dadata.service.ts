import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DadataService {


  private url: string = "http://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";

  constructor(private http: HttpClient) {

  }

  public getSuggestions(query: string): Observable<any> {
    const token = 'bb96dbb64bb5ecd47d61e4facc3d307c5f60eec5';
    const httpOptions = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', 'Token '.concat(token))
    };
    const body = {
      query: query,
    };
    return this.http.post<any>(`${this.url}`, body, httpOptions);
  }

}


