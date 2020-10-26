import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  constructor(private http: HttpClient) {}

  getQuote() {
    const params = new HttpParams().set('language', 'en');

    return this.http
      .get('https://quotes.rest/qod?language=en', {
        params,
      })
      .pipe(
        map((data) => {
          return data['contents'].quotes[0];
        })
      );
  }
}
