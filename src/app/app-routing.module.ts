import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {AddProjectComponent} from "./components/add-project/add-project.component";
import {ListProjectComponent} from "./components/list-project/list-project.component";
import {EditProjectComponent} from "./components/edit-project/edit-project.component";
import {ProjectDetailsComponent} from "./components/project-details/project-details.component";
import {UsersComponent} from "./components/users/users.component";
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [

  { path: '', component: ListProjectComponent, canActivate: [AuthGuard]},
 { path: 'login', component: LoginComponent },
 { path: 'list-project', component: ListProjectComponent },
  { path: 'add-project', component: AddProjectComponent },  
  { path: 'project-details', component: ProjectDetailsComponent },
  { path: 'edit-project', component: EditProjectComponent },
  { path: 'users', component: UsersComponent },
  {path : '', component : ListProjectComponent},
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
