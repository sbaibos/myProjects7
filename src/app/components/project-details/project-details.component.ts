import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import {Router} from "@angular/router";
import { CustomPipesModule } from 'ngx-custom-pipes'
import {ProjectModel} from "../../models/project.model";

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  projects: Object;
  constructor(private ProjectService: ProjectService, private router: Router) { }
  PROJECTNAME = window.localStorage.getItem("projectName");
  PROJECTEMPLOYER = window.localStorage.getItem("projectEmployer");
  PROJECTDATE = window.localStorage.getItem("projectDate");
  PROJECTDESCRIPTION = window.localStorage.getItem("projectDescription");
  PROJECTANALYTICAL = window.localStorage.getItem("projectAnalyticalDescription");
  PROJECTURL = window.localStorage.getItem("projectSiteURL");
  PROJECTPHOTO = window.localStorage.getItem("projectPhoto");
  PROJECTTECHNOLOGIES = window.localStorage.getItem("projectTechnologiesUsed");
  ngOnInit() {

    console.log("project name is " + this.PROJECTNAME);

   
    this.ProjectService.getProjects().subscribe((data)=>{
      console.log(data);
      this.projects = Object.values(data);
      console.log(this.projects);
    })

       




  }

  

  EditProject(myProject: ProjectModel){
    
   window.localStorage.removeItem("projectDetails2");
      window.localStorage.setItem("projectDetails2", myProject.id.toString());
      this.router.navigate(['edit-project']);
   }


  backToMain(){


    this.router.navigate(['list-project']);
  }

}
