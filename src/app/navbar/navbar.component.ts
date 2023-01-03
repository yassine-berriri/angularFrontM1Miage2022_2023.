import { Component, OnInit } from '@angular/core';
import { AssignmentsService } from '../shared/assignments.service';
import { AuthService } from '../shared/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  router: any;
  url="assets/subjectImages/miage.jpg";

  constructor(private authService : AuthService,private assignmentService:AssignmentsService) { }

  ngOnInit(): void {
    
  }

  
  opened=false;

  isLoggedIn():boolean {
   // console.log("i'm here"+this.authService.admin);
    return this.authService.loggedIn;
  }

  disconnection(){
      this.authService.logOut();
      
     // this.router.navigate(['/assignments'])
   
  }

  initialiserLaBase(){
    this.assignmentService.peuplerBDAvecForkJoin()
    .subscribe(() =>{
      this.router.navigate(["/assignments"])
    }); 
    console.log("BD inisialisé");
  }
 
}
