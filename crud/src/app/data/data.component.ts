import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service'


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  records = {}
  constructor (public FirstService : RecordsService)
    { }

  ngOnInit() {
    this.FirstService.getData().subscribe(data1=>{
      this.records = data1
      if(!data1)
      {
        localStorage.removeItem('loggedIn')
      }
    })
  }


}
