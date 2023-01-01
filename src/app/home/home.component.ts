import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';
import { User } from '../assignments/user.model';
import { AuthService } from '../shared/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  email !:string;
  password !:string;
  users?:User[];
  userTransmis?:User ;
  isUserAdmin:boolean=false;

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {  
   
  }

  
  /*
  getUsers(){
     this.authService.getUsers().subscribe(users => this.users = users);
  }
  */

  connection(){
    console.log("this.authService.admin",this.authService.admin);
    console.log("this.isUserAdmin",this.isUserAdmin);
    this.authService.findUser(this.email,this.password,this.isUserAdmin) .subscribe((user) =>{
    this.userTransmis = user;
    if(/*this.email=="admin" && this.password =="admin"*/  this.userTransmis!==null){
      this.authService.logIn();
      //this.router.navigate(['/assignments'])
    }
    else{
      alert("email ou mot de passe Incorrect ")
    }
   });
   /*
   setTimeout(()=>{
   
    if(/*this.email=="admin" && this.password =="admin"  this.userTransmis!==undefined){
      this.authService.logIn();
      //this.router.navigate(['/assignments'])
    }
    else{
      alert("email ou mot de passe Incorrect ")
    }
   },700)*/
  }
  isAdmin(){
    //console.log("i'm here"+this.authService.loggedIn);
    if(!this.isUserAdmin ){
      this.authService.isAdmin();
      this.isUserAdmin = true;
    }else{
      this.authService.isNotAdmin();
     // this.router.navigate(['/assignments'])
     this.isUserAdmin=false;
    }
   }
  

    
}
