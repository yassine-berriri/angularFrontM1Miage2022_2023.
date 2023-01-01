import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { forkJoin, Observable,of, pipe } from 'rxjs';
import { LoggingService } from './logging.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import {bdInitialAssignments} from './data';
import {bdInitialSubjects} from './subject';
import { Subject } from '../assignments/subject.model';
@Injectable({
  providedIn: 'root'
})



export class AssignmentsService {
  private HttpOptions = {
    headers: new HttpHeaders({
      'content-type' : 'application/json'
    })
  }
  subjectList :Subject[];
  assignments=[
    {
      id:1,
    nom:"tp1",
    dateDeRendu: new Date('2022-10-22'),
    rendu:true
    },
    {
      id:2,
    nom:"tp2",
    dateDeRendu: new Date('2022-10-22'),
    rendu:true
    },
    {
      id:3,
    nom:"tp3",
    dateDeRendu: new Date('2022-10-22'),
    rendu:false
    },
    {
      id:4,
    nom:"tp4",
    dateDeRendu: new Date('2022-10-22'),
    rendu:true
    }
  ]

  constructor( private LoggingService:LoggingService,private http:HttpClient ) { }
  url = "https://nodejsbackend-miage2022-2023test8.onrender.com/api/assignments";
  getAssignments():Observable<Assignment[]>{
    //return of(this.assignments);
    return this.http.get<Assignment[]>(this.url) 
  }

  addAssignment(assignment:Assignment): Observable<any> {
    // this.assignments.push(assignment);
    //return of('Assignment ajouté');
    return this.http.post<Assignment>(this.url,assignment,this.HttpOptions);
  }

  updateAssignment(assignment:Assignment): Observable<any>{
  //  return of("assignment service : assignment modifié")
    return this.http.put<Assignment>(this.url,assignment);
}
  
  deleteAssignment(assignment:Assignment): Observable<any>{
   // let pos = this.assignments.indexOf(assignment);
    //this.assignments.splice(pos,1);
    //return of("assignment service: assignment supprimé");
    let deleteURI = this.url + '/' + assignment._id;
    return this.http.delete(deleteURI);
  }

  getAssignment(id: number) : Observable<Assignment|undefined>{
    //return of(this.assignments.find(a=>a.id === id))
    return this.http.get<Assignment>(this.url + "/" + id)
      .pipe(
        /*map(a => {
       // a.nom +=" transformé avec un pipe";  
        return a;
      }),*/
      tap(_ =>{
        console.log("tap: assignment avec id = "+id+" requete GET envoyé sur mongoDB cloud ");  
      }),
      catchError(this.handleError<Assignment>(`getAssignment(id=${id})`))
      );
  }
  private handleError<T>(operation,result?:T){
    return (error:any) : Observable<T> =>{
      console.error(error);
      console.log(operation+' a échoué ' + error.message);
      return of(result as T);
    }
  }

  getNewId() :number { 
  return(this.assignments.length+1);
  }
 
  getAssignmentPagine(page: number,limit:number):Observable<any>{
    return this.http.get<any>(this.url+"?page=" + page + "&limit="+limit); 
  }

// version naive
 peuplerBD(){
    bdInitialAssignments.forEach(a =>{
      let nouvelAssignment = new Assignment();
      nouvelAssignment.nom = a.nom;
      nouvelAssignment.id = a.id;
      nouvelAssignment.dateDeRendu = new Date(Date.parse(a.dateDeRendu));
      nouvelAssignment.rendu = a.rendu;
      nouvelAssignment.auteur = a.auteur;
      nouvelAssignment.note = a.note;
      nouvelAssignment.remarque = a.remarque;
      nouvelAssignment.matiere = a.matiere;
      nouvelAssignment.urlSubjectImage = a.urlSubjectImage;
      nouvelAssignment.urlTeacherImage = a.urlTeacherImage;
      this.addAssignment(nouvelAssignment)
      .subscribe(reponse =>{
        console.log(reponse.message);
      })
    })
  }

  // version 2 
  peuplerBDAvecForkJoin(): Observable<any> {
    const appelsVersAddAssignment:any = [];
   
      bdInitialAssignments.forEach((a) => {
        const nouvelAssignment:any = new Assignment();
        nouvelAssignment.id = a.id;
        nouvelAssignment.nom = a.nom;
        nouvelAssignment.dateDeRendu = new Date(Date.parse(a.dateDeRendu));
        nouvelAssignment.rendu = a.rendu;
        nouvelAssignment.auteur = a.auteur;
        nouvelAssignment.note = a.note;
        nouvelAssignment.remarque = a.remarque;
        nouvelAssignment.matiere = a.matiere;
        nouvelAssignment.urlSubjectImage = a.urlSubjectImage;
        nouvelAssignment.urlTeacherImage = a.urlTeacherImage;
        appelsVersAddAssignment.push(this.addAssignment(nouvelAssignment));
      });
    
    return forkJoin(appelsVersAddAssignment); // renvoie un seul Observable pour dire que c'est fini
  }

  getSubjects():Observable<Subject[]>{
    //return of(this.assignments);
   this.subjectList = bdInitialSubjects
    return of(bdInitialSubjects)
  }

  getSubjectById(id:number):Observable<Subject|undefined>{
    return of(this.subjectList.find(a=>a.id === id));
  }
  getSubjectByName(name:string):Observable<Subject|undefined>{

    return of(this.subjectList.find((a)=>{a.subjectName == name}));
  }

 

}
