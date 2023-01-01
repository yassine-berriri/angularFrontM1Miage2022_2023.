

export class Assignment {
    _id ?:number;
    id !:number;
    nom !:string;
    auteur !:string;
    note !:number;
    remarque !:string;
    dateDeRendu !:Date;
    rendu !:boolean;
    matiere !:string;
    urlSubjectImage !:string;
    urlTeacherImage !:string;
}