import { RouterModule, Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { UserAuthGuard } from './user-auth.guard';
import { FormsModule } from '@angular/forms';

const routes : Routes = [
  {path:'profile', component: ViewProfileComponent, canActivate: [UserAuthGuard]},
  {path:'editProfile', component: EditProfileComponent, canActivate: [UserAuthGuard]},
  {path:'login', component: LoginComponent},
  {path:'', redirectTo:'/User/profile', pathMatch:'full'},
  {path:'**', component: NotFoundComponent},
]

@NgModule({
  declarations: [
    ViewProfileComponent,
    EditProfileComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class UserModule { }
