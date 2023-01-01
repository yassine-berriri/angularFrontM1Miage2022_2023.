import { Component, OnInit ,Output } from '@angular/core';
import { Assignment } from '../assignment.model';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { ActivatedRoute,Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { Subject } from '../subject.model';
import { MatSelectChange } from '@angular/material/select';
@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {
 // @Output() nouvelAssignment = new EventEmitter <Assignment>();
  nomDevoir= "";
  nomEleve = "";
  remarque = "";
  matiere="";
  urlSubjectImage="";
  urlTeacherImage="";
  
  subjects :Subject[];
  note:number;
  selectedOptionId:number;
  dateRendu=new Date(Date.now());
  constructor(private assignmentsService:AssignmentsService
    ,private route :ActivatedRoute, private router:Router, private authService:AuthService
    ) { }

  ngOnInit(): void {
    this.getSubjects();
  }




  getSubjects(){
    this.assignmentsService.getSubjects()
    .subscribe((subjects)=>{
       this.subjects = subjects;
      
    })
  }
  onSubmit(){
    if(this.nomDevoir ==="" || this.nomEleve ===""  ){
      alert("les champs nom de TD et nom de l'eleve sont obligatoires ")
    }
    else{
     
      const newAssignment = new Assignment();
      newAssignment.id= Math.floor(Math.random()*1000);
      newAssignment.nom = this.nomDevoir;
      newAssignment.dateDeRendu = this.dateRendu;
      newAssignment.rendu = false;
      newAssignment.auteur = this.nomEleve;
      newAssignment.note = this.note;
      newAssignment.remarque = this.remarque;
      newAssignment.matiere = this.matiere;
      newAssignment.urlSubjectImage = this.urlSubjectImage;
      newAssignment.urlTeacherImage = this.urlTeacherImage;
      

    
      //newAssignment.id;
       //this.nouvelAssignment.emit(newAssignment)
     
    // this.assignments.push(newAssignment);
  this.assignmentsService.addAssignment(newAssignment)
      .subscribe(message => console.log(message))
  
      this.router.navigate(["/assignments"]); 
    }
    
   }
   isLoggedIn():boolean {
    //console.log("i'm here"+this.authService.loggedIn);
    return this.authService.loggedIn;
  }
  
  subjectSelected(){
    this.assignmentsService.getSubjectById(this.selectedOptionId).subscribe((subject)=>{
     this.matiere= subject.subjectName;
     this.urlSubjectImage = subject.urlSubjectImage;
     this.urlTeacherImage =  subject.urlTeacherImage;
  
    })
    /*
   this.subjects.map((s)=>{
     if(this.selectedOptionId === s.id)
     this.matiere= s.subjectName;
     this.urlSubjectImage = s.urlSubjectImage;
     this.urlTeacherImage =  s.urlTeacherImage;
   })
   */
      
 }

  onOptionSelected(event: MatSelectChange) {
  
    this.selectedOptionId = event.value;
    this.subjectSelected();
  

  }
   
}
