import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  myVar = "CRUD Operation!"
  Variable = "app";
  // constructor() {
  //   // this.Variable =""
  //   // setInterval(()=>{
  //   //   this.Variable = Math.random();
  //   // },500);
  //  }

  ngOnInit() {

  }


  // Its for two way binding old method 
  // updatedVal(e){
  //   this.Variable =e.target.value;
  // }
}
