import { Component } from '@angular/core';

function log(ClassName)
{
  console.log(ClassName);
}

@log // Decorator

class ClassName
{
  constructor(a,b)
  {
    console.log("constructor working");
  }
}
const newclass = new ClassName(1,2);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud';

  constructor()
  {
    console.log("Constructor value is ", this.SimpleMethod(2,3));
  }
  
  SimpleMethod(a,b)
  {
    return a*b;
  }
}


