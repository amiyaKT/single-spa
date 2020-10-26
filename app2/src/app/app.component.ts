import { Component, OnInit } from '@angular/core';

import { DataStorageService } from './data-storage.service';

@Component({
  selector: 'app2-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  quote = '';
  author = '';

  constructor(private dataService: DataStorageService) {}

  ngOnInit() {
    this.dataService.setQuotes();
    this.quote = this.dataService.quote;
    this.author = this.dataService.author;
  }
}
