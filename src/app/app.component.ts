// import { Component } from '@angular/core';

// import { Router } from '@angular/router';
// import { AuthenticationService } from './services/authentication.service';
// import { UserModel } from './models/user';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'myProjects';
//   currentUser: UserModel;

//   constructor(
//     private router: Router,
//     private authenticationService: AuthenticationService
// ) {
//     this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
// }

// logout() {
//     this.authenticationService.logout();
//     this.router.navigate(['/login']);
// }



// }
import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public auth: AuthService) {
    auth.handleAuthentication();
  }

  ngOnInit() {
    if (this.auth.isAuthenticated()) {
      this.auth.renewTokens();
    }
  }

}
