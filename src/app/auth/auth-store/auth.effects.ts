import { Router } from '@angular/router';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import { AuthService } from './../auth.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Login, LOGIN, LoginSuccess, REGISTER, Register, RegisterSuccess, SetAuthenticated, StartUid, SetUnauthenticated, StopUid, LOGIN_SUCCESS, REGISTER_SUCCESS, LOGOUT, Logout, LogoutSuccess } from './auth.action';


@Injectable()
export class AuthEffects {

    constructor(
        private actions$ : Actions,
        private authService : AuthService,
        private router: Router
        ){}
    
    @Effect() login$ = this.actions$
        .pipe(
            ofType<Login>(LOGIN),
            map(data=>{
                console.log(data)
                this.authService.login(data.payload)
                return new LoginSuccess
            })
    )

    @Effect() loginSuccess$ = this.actions$
        .pipe(
            ofType<LoginSuccess>(LOGIN_SUCCESS),
            mergeMap(
                () => this.authService.initAuthListener()
                .pipe(
                    switchMap(user => {
                        if (user) {
                            console.log(user)
                            this.router.navigate(['/addActivity'])
                            return [
                                new SetAuthenticated,
                                new StartUid(user.uid)
                            ]
                        }else{
                            this.router.navigate([''])
                            return [
                                new SetUnauthenticated,
                                new StopUid
                            ]  
                        }
                    })
                )
            )
            
    )

    @Effect() register$ = this.actions$
        .pipe(
            ofType<Register>(REGISTER),
            map(data =>{
                this.authService.registerUser(data.payload)
                this.authService.initAuthListener()
                return new RegisterSuccess
                })
    )

    @Effect() registerSuccess$ = this.actions$
        .pipe(
            ofType<RegisterSuccess>(REGISTER_SUCCESS),
            mergeMap(
                () => this.authService.initAuthListener()
                .pipe(
                    switchMap(user => {
                        if (user) {
                            console.log(user)
                            this.router.navigate(['/addActivity'])
                            return [
                                new SetAuthenticated,
                                new StartUid(user.uid)
                            ]
                        }else{
                            this.router.navigate([''])
                            return [
                                new SetUnauthenticated,
                                new StopUid
                            ]  
                        }
                    })
                )
            )
            
    )

    @Effect() logout$ = this.actions$
        .pipe(
            ofType<Logout>(LOGOUT),
            map(() =>{
                this.authService.logout()
                return new LogoutSuccess
            })
        )


}