import { Component, Input, OnInit } from '@angular/core';

import { DataStorageService } from '../../data-storage.service';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
})
export class ListItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor(private dataStorage: DataStorageService) {}

  ngOnInit(): void {}

  doneTodo() {
    this.dataStorage.doneTodo(this.todo.id);
  }

  removeTodo(e: Event) {
    e.preventDefault();
    this.dataStorage.removeTodo(this.todo.id);
  }
}
