import { Component, EventEmitter, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Array<Todo> = [];

  constructor() { }

  ngOnInit(): void {

    let banco = localStorage.getItem('todos')
    if(banco != null){this.todos = JSON.parse(banco)};
        
  }

  addTodo(title: string ): void{
    const id = this.todos.length + 1;
    this.todos.push(new Todo(id,title,false))

    localStorage.setItem('todos', JSON.stringify(this.todos));

  }

  removeTodo(todo: Todo): void {

    let index = this.todos.indexOf(todo);
    this.todos.splice(index,1);

    localStorage.setItem('todos', JSON.stringify(this.todos));

  }

}
