import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProjectService } from './services/project.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { EditProjectComponent } from './components/edit-project/edit-project.component';
import { ListProjectComponent } from './components/list-project/list-project.component';

import {FilterPipe} from './pipes/filter.pipe';

import { CustomPipesModule } from 'ngx-custom-pipes';
import {ReactiveFormsModule} from "@angular/forms";
import { ProjectDetailsComponent } from './components/project-details/project-details.component';


import { JwtInterceptor, } from './helpers/jw.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { fakeBackendProvider } from './helpers/fake-backend';
import { UsersComponent } from './components/users/users.component';
import { RegisterComponent } from './components/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddProjectComponent,
    EditProjectComponent,
    ListProjectComponent,
    FilterPipe,
    ProjectDetailsComponent,
    UsersComponent,
    RegisterComponent
    
    
    
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  HttpClientModule,
  CustomPipesModule,
  ReactiveFormsModule 
  
    
  ],
  providers: [
    ProjectService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
