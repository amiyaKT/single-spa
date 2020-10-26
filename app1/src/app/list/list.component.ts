import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../data-storage.service';
import { Todo } from '../models/Todo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  todo: Todo[] = [];

  constructor(private dataService: DataStorageService) {}

  ngOnInit(): void {
    this.todo = this.dataService.getTodo();
    this.dataService.todoChange.subscribe((todo) => {
      this.todo = todo;
    });
  }
}
