import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private auth: AuthService , private router: Router) { }

  ngOnInit() {
  }

  registerUser(e){
    const target = e.target
    const errors=[]
    const username = target.querySelector('#username').value
    const password = target.querySelector('#password').value
    const cpassword = target.querySelector('#cpassword').value
    console.log(password)

    if(password != cpassword)
    {
      errors.push("Passwords does not match")
    }

    if(errors.length == 0)
    {
      this.auth.registerUser(username,password).subscribe(data => { 
        console.log(data)
        // if(data.success)
        // {
        //   this.router.navigate(['data'])
        // }
      })
    }


  }

}
