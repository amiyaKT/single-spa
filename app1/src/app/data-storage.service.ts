import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Todo, TodoList } from './models/Todo';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  todoList: Todo[] = [];

  todoChange: Subject<Todo[]> = new Subject();

  constructor() {}

  getTodo() {
    const localTodoList: Array<Todo> = JSON.parse(
      localStorage.getItem('todoList')
    );

    if (localTodoList) {
      this.todoList = localTodoList;
    }

    return this.todoList.slice();
  }

  addTodo(todo) {
    this.todoList.push({
      todo: todo,
      done: false,
      id: this.todoList.length.toString(),
    });
    this.emitTodoChange();
  }

  doneTodo(todoId) {
    const index = this.todoList.findIndex((todo) => todo.id === todoId);
    this.todoList[index].done = !this.todoList[index].done;
    this.emitTodoChange();
  }

  removeTodo(todoId) {
    this.todoList = this.todoList.filter((todo) => todo.id !== todoId);
    this.emitTodoChange();
  }

  emitTodoChange() {
    this.todoChange.next(this.todoList.slice());
    if (this.todoList.length !== 0) {
      localStorage.setItem('todoList', JSON.stringify(this.todoList.slice()));
    } else {
      localStorage.removeItem('todoList');
    }
  }
}
