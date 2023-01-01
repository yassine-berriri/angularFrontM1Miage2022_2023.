import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { AuthService } from 'src/app/shared/auth.service';
import { Assignment } from '../assignment.model';
import { Subject } from '../subject.model';

@Component({
 selector: 'app-edit-assignment',
 templateUrl: './edit-assignment.component.html',
 styleUrls: ['./edit-assignment.component.css'],
})
export class EditAssignmentComponent implements OnInit {
 assignment!: Assignment | undefined;
 nomAssignment!: string;
 dateDeRendu!: Date;
 nomEleve!:string;
 note!:number;
 remarque!:string;
 subjects :Subject[];
 subjectId :number;
 
 
 matiere="";
 selectedOptionId:number;
 urlSubjectImage="";
 urlTeacherImage="";

 constructor(
   private assignmentsService: AssignmentsService,
   private route: ActivatedRoute,
   private router: Router,
   private authService:AuthService
 ) {}

 ngOnInit(): void {
   this.getAssignment();
   this.getSubjects();
 
 }

 getSubjects(){
  this.assignmentsService.getSubjects()
  .subscribe((subjects)=>{
     this.subjects = subjects;
  
  })
}
getSubject(name:string){
  this.subjects.map((s)=>{
    if(s.subjectName == name){
      this.subjectId = s.id;
      this.urlSubjectImage = s.urlSubjectImage;
      this.urlTeacherImage=s.urlTeacherImage ;
    }
  })
 // this.assignmentsService.getSubjectByName(name).subscribe((sub)=>{
 
  
  

}
 getAssignment() {
  // on récupère l'id dans le snapshot passé par le routeur
  // le "+" force l'id de type string en "number"
  const id = +this.route.snapshot.params['id'];
 
  this.assignmentsService.getAssignment(id).subscribe((assignment) => {
    if (!assignment) return;
    this.assignment = assignment;
    // Pour pré-remplir le formulaire
    this.nomAssignment = assignment.nom;
    this.dateDeRendu = assignment.dateDeRendu;
    this.nomEleve = assignment.auteur;
    this.note = assignment.note;
    this.remarque = assignment.remarque;
    this.matiere = assignment.matiere;
   
    this.getSubject(assignment.matiere);
    

  });
}
id = +this.route.snapshot.params['id'];
onSaveAssignment() {
  if (!this.assignment) return;
  
 // on récupère les valeurs dans le formulaire
 this.assignment.nom = this.nomAssignment;
 this.assignment.dateDeRendu = this.dateDeRendu;
 this.assignment.auteur = this.nomEleve;
 this.assignment.note = this.note;
 this.assignment.remarque = this.remarque;
 this.assignment.matiere = this.matiere;
 this.assignment.urlSubjectImage = this.urlSubjectImage;
 this.assignment.urlTeacherImage = this.urlTeacherImage;

 this.assignmentsService
   .updateAssignment(this.assignment)
   .subscribe((message) => {
 
     // navigation vers la home page
   });
    //this.router.navigate(['/assignments']);
}

isLoggedIn():boolean {
  //console.log("i'm here"+this.authService.loggedIn);
  return this.authService.loggedIn;
}
onValueChange(){
  if(this.note<0 || this.note>20){
    alert("la note doit etre entre 0 et 20")
  }
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
