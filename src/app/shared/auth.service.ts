import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../assignments/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;
  admin = false
  private HttpOptions = {
    headers: new HttpHeaders({
      'content-type' : 'application/json'
    })
  }

  constructor(private http:HttpClient ) { }
  url = "https://nodejsbackend-miage2022-2023test8.onrender.com/api/user";
  users=[
    {
      id:1,
    email:"admin",
    password:"admin",
    },
    {
      id:2,
    email:"yassine",
    password:"yassine"
    }
  ]
  /*
  getUsers():Observable<User[]>{
    return of(this.users);
    //return this.http.get<User[]>(this.url) 
  }
  */

  findUser(email:string,password:string,isAdmin:boolean) :Observable<User|undefined>{
    //console.log("getUser"+this.users.find(a=>a.email === email && a.password === password));
   // return of(this.users.find(a=>a.email === email && a.password === password))
   return this.http.post<User>(this.url,{email,password,isAdmin},this.HttpOptions);
  }





  userExist(email:string,password:string):boolean{
    if(this.users.find(a=>a.email === email && a.password === password) === undefined)
    {
      return false;
    }
    else{
      return true;
    }
  }

  logIn(){
    this.loggedIn = true;
  }
  logOut(){
    this.loggedIn = false;
  }
  
  isAdmin(){
    this.admin = true;
  }
  isNotAdmin(){
    this.admin = false;
  }


  checkIsAdmin(){
    const isUserAdmin = new Promise((resolve,reject) =>{
      resolve(this.admin && this.loggedIn);
    })
    return isUserAdmin;
  }

  checkIsLoggedIn(){
    const isUserLoggedIn = new Promise((resolve,reject) =>{
      resolve(this.loggedIn);
    })
    return isUserLoggedIn;
  }


}
