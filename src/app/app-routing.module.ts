import { AddActivityComponent } from './add-activity/add-activity.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeLoginComponent } from './auth/home-login/home-login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'', component: HomeLoginComponent},
  {path:'signup', component:SignupComponent },
  {path:'addActivity', component: AddActivityComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
