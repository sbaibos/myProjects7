import { Component, OnInit, Inject } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import {ProjectModel} from "../../models/project.model";
import {Router} from "@angular/router";



@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css']
})
export class ListProjectComponent implements OnInit {
   projects: any[];
 // projects: Object;
  //projects:ProjectModel[];

 

  constructor(private ProjectService: ProjectService, private router: Router) { }

  ngOnInit() {

    // this.ProjectService.getProjects().subscribe((data)=>{
      // //console.log(data);
      // this.projects = Object.values(data['records']);
      // console.log(this.projects);
	  
	  this.ProjectService.getProjects().subscribe((data)=>{
      console.log(data);
      this.projects = Object.values(data);
    })
    
    }

  

    ProjectDetails(myProject: ProjectModel){

     // window.localStorage.removeItem("editProjectId");
    //window.localStorage.setItem("editProjectId", myProject.projectId.toString());
	// window.localStorage.removeItem("projectDetails");
    window.localStorage.setItem("projectName", myProject.name.toString());
    window.localStorage.setItem("projectEmployer", myProject.employer.toString());
    window.localStorage.setItem("projectDate", myProject.dateStartEnd.toString());
    window.localStorage.setItem("projectDescription", myProject.description.toString());
    window.localStorage.setItem("projectAnalyticalDescription", myProject.analyticalDescription.toString());
    window.localStorage.setItem("projectSiteURL", myProject.siteUrl.toString());
    window.localStorage.setItem("projectPhoto", myProject.photo.toString());
    window.localStorage.setItem("projectTechnologiesUsed", myProject.technologiesUsed.toString());
      this.router.navigate(['project-details']);
    }

    // deleteProject(project: ProjectModel): void {
      // this.ProjectService.deleteProject(project.id)
        // .subscribe( data => {
         // let array = Object.values(data['records']);
          // array = array.filter(u => u !== project);
          
        // })
// this.router.navigate(['list-project']);
        
    // };
	
	 deleteProject(project: ProjectModel): void {
      this.ProjectService.deleteProject(project.id)
        .subscribe( data => {
           //let array = Object.values(data['records']);
          // array = array.filter(u => u !== project);

          this.projects = this.projects.filter(u => u !== project);
        })
		this.router.navigate(['list-project']);
    };

    addProject(): void {
      this.router.navigate(['add-project']);
    };
    
    EditProject(myProject: ProjectModel){
    
      window.localStorage.removeItem("projectDetails2");
      window.localStorage.setItem("projectDetails2", myProject.id.toString());
      this.router.navigate(['edit-project']);
     }
  

}