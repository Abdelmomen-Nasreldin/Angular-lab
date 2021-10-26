import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../user/user-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 loginBoolean! : boolean ;
  constructor(private userService : UserAuthService) {

  }
  isThisUserLogged : boolean = false

  ngOnInit(): void {
     this.loginBoolean = this.userService.isThisUserLogged
    // if(this.userService.isUserLoggedIn){
    //   this.loginBoolean = true
    //  }else{
    //   this.loginBoolean = false
    //  }
  }
  logginToggle(): boolean{
    if(this.userService.isUserLoggedIn){
     return this.loginBoolean = true
    }else{
      return this.loginBoolean = false
    }
  }
  logout(){
    this.userService.logout()
    return this.loginBoolean = false
  }
}
