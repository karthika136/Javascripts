import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/Todo'
import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  
  todosurl = 'https://jsonplaceholder.typicode.com/todos'; 
  todoslimit = '?_limit=5';
  constructor(private http:HttpClient) { }


  // Get Todos
  getTodos():Observable<Todo[]>
  {
    return this.http.get<Todo[]>(`${this.todosurl}${this.todoslimit}`);
    // return [
    //   {
    //     id:1,
    //     title:'Todo one',
    //     completed:false
    //   },{
    //     id:2,
    //     title:'Todo two',
    //     completed:true
    //   },{
    //     id:3,
    //     title:'Todo three',
    //     completed:false
    //   }
    // ]
  }

  //Toggle completed

  toggleCompleted(todo):Observable<any>
  {
    //updating in server
    const url =`${this.todosurl}/${todo.id}`;
    return this.http.put(url,todo,httpOptions);

  }


  //Delete Todo from UI
  deleteTodo(todo:Todo):Observable<Todo>{
    const url =`${this.todosurl}/${todo.id}`;
    return this.http.delete<Todo>(url,httpOptions);
  }

  //Add todo to server
  addTodo(todo:Todo):Observable<Todo>
  {
    return this.http.post<Todo>(this.todosurl,todo,httpOptions);
  }

}
