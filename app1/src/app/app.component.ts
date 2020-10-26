import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { DataStorageService } from './data-storage.service';

@Component({
  selector: 'app1-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  todoForm: FormGroup = new FormGroup({
    todo: new FormControl(''),
  });

  constructor(private dataService: DataStorageService) {}

  ngOnInit() {}

  addTodo() {
    const todo: string = this.todoForm.get('todo').value;
    this.dataService.addTodo(todo.trim());
    this.todoForm.reset();
  }
}
