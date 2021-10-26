import { UserAuthService } from './../user-auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
// @ViewChild('emailLogin') emailLogin1: string ='';
// @ViewChild('password') passwordLogin1: string = '';
emailLogin: string;
passwordLogin: string ;
loginBoolean! : boolean;
  constructor(private userService: UserAuthService) {
    this.emailLogin = ''
    this.passwordLogin = ''
  }

  ngOnInit(): void {
    this.loginBoolean = this.userService.isThisUserLogged

  }
  logginToggle(){
    // if(this.userService.isUserLoggedIn){
    //   this.isLogged = false
    // }else{
    //   this.isLogged = true
    // }
  }
  login(){
    this.userService.login(this.emailLogin, this.passwordLogin)
    return this.loginBoolean = true
  }
  logout(){
    this.userService.logout()
  }

}
