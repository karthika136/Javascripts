import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService, private router:Router) { 
    
  }

  ngOnInit() {
  }

  loginUser(e)
  {
    e.preventDefault();
    const target = e.target;
    const userName = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;
    this.auth.getUserDetails(userName,password).subscribe(data => {

      if(userName == 'admin' && password =='admin')
      {
        this.router.navigate(['data'])
        this.auth.setLoggedIn(true)
      }else{
       window.alert("Invalid");
      }
      // if(data.success){

      // }else{
      //   window.alert("Invalid");
      // }
    })
  }
}
