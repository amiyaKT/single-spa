export interface Todo {
  todo: string;
  done: boolean;
  id: string;
}

export interface TodoList {
  date: Date;
  todoList: Todo[];
}
