import { Component, OnInit } from '@angular/core';
// import { RecordsService } from '../records.service'

@Component({
  selector: 'app-forelement',
  templateUrl: './forelement.component.html',
  styleUrls: ['./forelement.component.css']
})
export class ForelementComponent {
    records={}
    constructor (){

    }
    ngOnInit()
    {
      // this.FirstService.getData().subscribe(data1=>{
      //   this.records = data1
      //})
    }

  // Its done in services
  //  records = [
  //    {
  //      name: 'Karthi',
  //      online:true
  //    },
  //    {
  //     name: 'Karthik',
  //     online:true
  //   },
  //   {
  //     name: 'Karthika',
  //     online:true
  //   },
  //   {
  //     name: 'Karthikeyan',
  //     online:true
  //   },
  //  ]

}
