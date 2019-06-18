import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import {Router} from "@angular/router";
import {UserModel} from "../../models/user";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user: UserModel;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private UserService: UserService, private router: Router) { }

  ngOnInit() {


    let userId = window.localStorage.getItem("userDetails");
    console.log("user id is " + userId);
   
    this.editForm = this.formBuilder.group({
      id: [],
      fullName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.UserService.getUserById(+userId)
      .subscribe( data => {
        this.editForm.setValue(data);
      });


  }

  onSubmit() {
    this.UserService.updateUser(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['users']);
        },
        error => {
          alert(error);
        });
  }


  backToUsers(){


    this.router.navigate(['users']);
  }

}
