import { Injectable } from '@angular/core';
import { QuoteService } from './quote.service';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(private quoteService: QuoteService) {}

  setQuotes() {
    if (!this.checkExpiration()) {
      this.quoteService.getQuote().subscribe((data) => {
        localStorage.setItem('quote', data.quote);
        localStorage.setItem('author', data.author);
        localStorage.setItem('expiresIn', JSON.stringify(new Date().getDate()));
      });
    }
  }

  checkExpiration = () => {
    const date = new Date();
    const expiresIn = JSON.parse(localStorage.getItem('expiresIn'));
    if (expiresIn && date.getDate() !== expiresIn) {
      return true;
    } else if (localStorage.getItem('quote')) {
      return true;
    }
    localStorage.removeItem('quote');
    localStorage.removeItem('author');
    localStorage.removeItem('expiresIn');
    return false;
  };

  public get quote(): string {
    return localStorage.getItem('quote');
  }

  public get author(): string {
    return localStorage.getItem('author');
  }
}
