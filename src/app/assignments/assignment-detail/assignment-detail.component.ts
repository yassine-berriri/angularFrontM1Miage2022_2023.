import { Component, OnInit,Input ,EventEmitter,Output } from '@angular/core';
import {Assignment} from "../assignment.model";
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { ActivatedRoute,Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {
  @Output() deleteAssignment = new EventEmitter <Assignment>();
/* @Input()*/ assignementTransmis:Assignment | undefined;
 
  constructor(private assignmentService:AssignmentsService
    ,private route :ActivatedRoute, private router:Router,
    private authService:AuthService
    ) { }

  ngOnInit(): void {
    this.getAssignment();
  }



  onAssignmentRendu() {
    if( this.assignementTransmis !=undefined ){
      if(this.assignementTransmis.note === undefined){
        alert("vous ne pouvez pas marquer rendu un Assignment qui n'a pas été noté. ")
      }
      else{
        this.assignementTransmis.rendu =true;
        //console.log("assignementTransmis",this.assignementTransmis?.rendu);
        this.assignmentService.updateAssignment(this.assignementTransmis)
        .subscribe(message => {
        
          this.router.navigate(["/assignments"]);
        });
      }
     
      
    }
    //this.router.navigate(["/assignments"]);
 
   }
  onDeleteAssignment(){
   // console.log("JE SUIS ICI")
    if( this.assignementTransmis !=undefined){
    this.assignmentService.deleteAssignment(this.assignementTransmis)
      .subscribe(message => console.log(message))
      this.assignementTransmis= undefined;
      this.router.navigate(["/assignments"]); 
  }


}

getAssignment(){
  const id =+this.route.snapshot.params['id'];
  this.assignmentService.getAssignment(id)
  .subscribe(assignment =>this.assignementTransmis = assignment)
}

onClickEdit(){
  this.router.navigate(["assignment",this.assignementTransmis.id,'edit'],
  {queryParams:{nom:this.assignementTransmis.nom},fragment:'edition'});
}

isAdmin():boolean {
  //console.log("i'm here"+this.authService.loggedIn);
  return this.authService.loggedIn && this.authService.admin;
}
isUser():boolean {
  return this.authService.loggedIn;
}
isEvaluated():boolean {
  return this.assignementTransmis.note !==undefined 
}
}
