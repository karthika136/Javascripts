import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  //It doesnt have id s using <any>
  @Output() addTodo : EventEmitter<any> = new EventEmitter();
  //Property 
  title:string;
  constructor() { }

  ngOnInit() {
  }

  onSubmit()
  {
    const todo={
      title: this.title,
      completed: false
    }

    this.addTodo.emit(todo);
  }
}
