import { Injectable } from '@angular/core';
//import {HttpClient} from '@angular/common/http';
import {UserModel} from "../models/user";
import { HttpClient } from '@angular/common/http'; 
// import { pureObjectDef } from '@angular/core/src/view';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {
projects: UserModel[];
  //projects = PROJECTS;//projects mockfile
  
  firstClick() {
    return console.log('clicked');
  }



  

  constructor(private http: HttpClient) { }
  baseUrl = environment.userUrl;
  update = environment.userUpdate;
  delete = environment.userDelete;
   
  getUsers(){
   //return  this.http.get('api/');
    return this.http.get(this.baseUrl);
   }
   
   
   getUserById(id: number) {
    return this.http.get<UserModel>(this.baseUrl + '/' + id);
  }

  createUser(user: UserModel) {
    return this.http.post(this.baseUrl, user);
  }

  updateUser(user: UserModel) {
    return this.http.put(this.update + '/' + user.id, user);
  }

  deleteUser(id: number) {
    return this.http.delete(this.delete + '/' + id);
  }






//that works in an api that takes arguments

// getProjectById(id: number) {
//   return this.http.get(this.basegUrl + '?projectId=' + id);
//}

//that works on my current static array



  }
