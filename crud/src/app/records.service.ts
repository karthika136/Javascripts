import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor(private http:HttpClient) { }

  Url:string = '/assets/data.json';

  getData()
  {
    return this.http.get(this.Url);
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
