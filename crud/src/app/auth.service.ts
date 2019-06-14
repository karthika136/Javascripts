import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

//localstorage is for keeping the session alive 
  loggedInstatus = JSON.parse(localStorage.getItem('loggedIn'));

  setLoggedIn(val)
  {
    this.loggedInstatus = val
    localStorage.setItem('loggedIn','true');
  }

  //Property not a function
  get loggedIn()
  {
    return JSON.parse(localStorage.getItem('loggedIn') || this.loggedInstatus);
  }
  constructor(private http: HttpClient) { }
  Url:string = '/assets/data.json';


  getUserDetails(username,password)
  {
    return this.http.get(this.Url)
  }
}
