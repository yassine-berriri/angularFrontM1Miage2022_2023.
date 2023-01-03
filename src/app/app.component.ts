import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssignmentsService } from './shared/assignments.service';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Application de gestion de devoirs à rendre (Assignments)';
   constructor(private authService:AuthService,private router:Router, private assignmentService : AssignmentsService){}
  ngOnInit(): void {
    //this.router.navigate(['/assignments'])
  }
   
   isAdmin(){
    //console.log("i'm here"+this.authService.loggedIn);
    if(!this.authService.loggedIn){
      this.authService.logIn();
    }else{
      this.authService.logOut();
      this.router.navigate(['/assignments'])
    }
   }
  login(){
      this.router.navigate(['/assignments'])
  }
  initialiserLaBase(){
    this.assignmentService.peuplerBDAvecForkJoin()
    .subscribe(() =>{
      this.router.navigate(["/assignments"])
    }); 
    console.log("BD inisialisé");
  }

}
