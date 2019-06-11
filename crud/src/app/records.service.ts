import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor(private http:HttpClient) { }

  Url:string = 'https://jsonplaceholder.typicode.com/todos';
  todoslimit = '?_limit=5';

  getData()
  {
    return this.http.get('https://jsonplaceholder.typicode.com/todos?_limit=5');
    // return [
    //   {
    //     name: 'Karthi',
    //     online:true
    //   },
    //   {
    //    name: 'Karthik',
    //    online:true
    //  },
    //  {
    //    name: 'Karthika',
    //    online:true
    //  },
    //  {
    //    name: 'Karthikeyan',
    //    online:true
    //  },
    // ]
  }
}
