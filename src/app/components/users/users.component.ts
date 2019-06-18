import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import {UserModel} from "../../models/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any[];
  constructor(private UserService: UserService, private router: Router) { }

  ngOnInit() {
    this.UserService.getUsers().subscribe((data)=>{
      console.log(data);
      this.users = Object.values(data);
    })

  }



  deleteUser(user: UserModel): void {
    this.UserService.deleteUser(user.id)
      .subscribe( data => {
         //let array = Object.values(data['records']);
        // array = array.filter(u => u !== project);

        this.users = this.users.filter(u => u !== user);
      })
  this.router.navigate(['users']);
  };


   
  EditUser(user: UserModel){
  
    window.localStorage.removeItem("userDetails");
    window.localStorage.setItem("userDetails", user.id.toString());
    this.router.navigate(['edit-user']);
   }




}
