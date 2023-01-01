import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { HomeComponent } from './home/home.component';
import {AssignmentsComponent} from './assignments/assignments.component';
import { AddAssignmentComponent } from './assignments/add-assignment/add-assignment.component';
import { AssignmentDetailComponent } from './assignments/assignment-detail/assignment-detail.component';
import { EditAssignmentComponent } from './assignments/edit-assignment/edit-assignment.component';
import { AuthGuard } from './shared/auth.guard';
const routes: Routes = [
 /* {
    path:"home",component:HomeComponent
    
  },*/
  {
    path:"assignments", component:AssignmentsComponent
  },
  {
    path:"add", component:AddAssignmentComponent
  },
  {
    path:"assignment/:id", component:AssignmentDetailComponent,

  },
  {
    path:"assignment/:id/edit", component:EditAssignmentComponent,
    canActivate: [AuthGuard]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
