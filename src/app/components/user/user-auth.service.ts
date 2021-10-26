import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  constructor() {}
  public isUserLoggedIn: boolean = false;
  public isThisUserLogged: boolean = false; //
   
  login(userEmail: string, password: string) {
    let userToken: string = '';
    if (userEmail && password) {
      userToken = 'this user is logged in';
      localStorage.setItem('userToken', userToken);
      this.isUserLoggedIn = true;
      console.log("isUserLoggedIn " + this.isUserLoggedIn)
    } else {
      console.log('please math the requirements');
    }
  }
  logout() {
    localStorage.removeItem('userToken');
    this.isUserLoggedIn = false;
    console.log("isUserLoggedIn " + this.isUserLoggedIn)
  }
  isLogged(): boolean {
    return this.isUserLoggedIn;
  }
}
