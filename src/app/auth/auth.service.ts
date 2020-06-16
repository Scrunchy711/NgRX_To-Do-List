import { map } from 'rxjs/operators';
import { Activity } from './../add-activity/activity.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { UiService } from './../ui/ui.service';
import { User } from './user.model';
import { AuthData } from './auth.data.model';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRoot from '../app-store/app.reducer'
import * as Auth from '../auth/auth-store/auth.action'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afauth: AngularFireAuth,
    private router: Router,
    private store: Store<fromRoot.State>,
    private uiService: UiService,
    private db: AngularFirestore
  ) { }

  private user: User
  public userId: string = "user"

  initAuthListener(){
    return this.afauth.authState
      // if(user){
      //   console.log(user)
      //   // Can consider how to use this to make mutiple users to access their own seperate data in firestore
      //   console.log(user.uid)
      //   this.store.dispatch(new Auth.SetAuthenticated())
      //   this.store.dispatch(new Auth.StartUid(user.uid))
      //   this.router.navigate(['/addActivity'])
      // }else{
      //   this.store.dispatch(new Auth.SetUnauthenticated())
      //   this.store.dispatch(new Auth.StopUid())
      //   this.router.navigate([''])
      // }
    }
  

  registerUser(authData: AuthData){
    this.afauth.createUserWithEmailAndPassword(
      authData.email,
      authData.password
    ).then(cred =>{
        this.userId = cred.user.uid //pass cred user id and set it as collection 
        this.uiService.showSnackbar("Successfully registered!",null,3000)
        this.db.collection("User").doc(cred.user.uid).collection("Activities").add({exists: true})
    }).catch(error=>{
      this.uiService.showSnackbar(error.message,null,3000)
    })
  }

  login(authData:AuthData){
    this.afauth.signInWithEmailAndPassword(
      authData.email,
      authData.password
    ).then(result =>{
      console.log(result)
      this.uiService.showSnackbar("Successfully Logged In!",null,3000)
    }).catch(error=>{
      this.uiService.showSnackbar(error.message,null,3000)
    })
  }

  logout() {
    this.afauth.signOut()
  }
  
}




