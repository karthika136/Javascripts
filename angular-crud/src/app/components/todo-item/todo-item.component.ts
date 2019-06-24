import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from '../../services/todo.service'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo:Todo;
  @Output() deleteTodo : EventEmitter<Todo> = new EventEmitter();
  constructor(private todoService:TodoService) { }

  ngOnInit() {
    
    
  }

  //Dynamic classes
  setClasses() {
    let classes ={
      todo:true,
      'is-complete':this.todo.completed
    }
    return classes;
  }

  ontoggle(todo)
  {
    //Toggle in UI
    todo.completed = !todo.completed

    return this.todoService.toggleCompleted(todo).subscribe(todos => console.log(todo));
  }

  onDelete(todo)
  {
    this.deleteTodo.emit(todo);
  }

}
