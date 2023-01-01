import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {Assignment} from './assignment.model';
import { AssignmentsService } from '../shared/assignments.service';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit,AfterViewInit {
  
  titre = "mon app sur les assignments !"
  formVisible=false;
  assignementSelectionne?:Assignment;
  page: number=1;
  limit: number=10;
  totalDocs: number;
  totalPages: number;
  hasPrevPage: boolean;
  prevPage: number;
  hasNextPage: boolean;
  nextPage: number;

 
 //Pour le tableau 
  displayedColumns: string[] = ['demo-id', 'demo-nom','demo-prof','demo-matiere', 'demo-eleve','demo-note','demo-dateDeRendu', 'demo-rendu'];
  ajoutActive = false;
  assignments?:Assignment[];
  dataSource = new MatTableDataSource(this.assignments);
  
 
  
  constructor (private assignmentService:AssignmentsService,private _liveAnnouncer: LiveAnnouncer) {

    
   }

   

  ngOnInit(): void {
    /*setTimeout(() =>{
      this.ajoutActive = true;
    },2000);*/
    //this.assignments = this.assignmentService.getAssignments();
   /* this.assignmentService.getAssignments()
    .subscribe(assignments => this.assignments = assignments);
    */
   this.getAssignments();
 
   
  }
 
  assignmentClique(assignment:Assignment) {
    this.assignementSelectionne = assignment;
   
  }
  onAddAssignmentBtnClick(){
   this.formVisible=!this.formVisible;

  }
/*
  onNouvelAssignment(event:Assignment){
    //this.assignments?.push(event);
   this.assignmentService.addAssignment(event)
    .subscribe(message => console.log(message));
    this.formVisible = true;
  }
  */
  onDeletedAssignment(event:Assignment){
 
    
/*for( const assignment of this.assignments){
  if(assignment.nom == event.nom){
   this.assignments?.splice(this.assignments.indexOf(assignment),1);
  }
  
}*/
   
    
  }

getAssignments(){
 /* this.assignmentService.getAssignments()
  .subscribe(assignments => this.assignments = assignments);*/
  this.assignmentService.getAssignmentPagine(this.page, this.limit)
  .subscribe(data => {
    this.assignments = data.docs;
    this.page = data.page;
    this.limit = data.limit;
    this.totalDocs = data.totalDocs;
    this.totalPages = data.totalPages;
    this.hasPrevPage = data.hasPrevPage;
    this.prevPage = data.prevPage;
    this.hasNextPage = data.hasNextPage;
    this.nextPage = data.nextPage;
   this.dataSource = new MatTableDataSource(this.assignments);
     
   this.dataSource.sort = this.sort;
    
  });

}

pageSuivante(){
  if(this.hasNextPage){
    this.page = this.nextPage;
    this.getAssignments();
  }
}

  pagePrecedente(){
    if(this.hasPrevPage){
      this.page = this.prevPage;
      this.getAssignments();
    }
  }

  premierePage(){
    this.page = 1;
    this.getAssignments(); 
  }

  dernierePage(){
    this.page = this.totalPages;
    this.getAssignments();

  }

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
  
  //  this.dataSource.sort = this.sort;

  }


  

 




}
