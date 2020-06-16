import { AuthData } from './../auth.data.model';
import { Action } from '@ngrx/store'

export const LOGIN = '[Auth] Login'
export const LOGIN_SUCCESS = '[Auth] Login Success'
export const REGISTER = '[Auth] Register'
export const REGISTER_SUCCESS = '[Auth] Register Success'
export const SET_AUTHENTICATED = '[Auth] Set Authenticated'
export const SET_UNAUTHENTICATED =  '[Auth] Set Unauthenticated'
export const START_UID = '[Auth] Start Uid'
export const STOP_UID = '[Auth] Stop Uid'
export const UID_RECIEVED = '[Auth] Uid Received'
export const LOGOUT = '[Auth] Logout'
export const LOGOUT_SUCCESS = '[Auth] Logout Success'

export class Login implements Action {
    readonly type = LOGIN

    constructor(public payload: AuthData){}
}

export class LoginSuccess implements Action {
    readonly type = LOGIN_SUCCESS
}

export class Register implements Action {
    readonly type = REGISTER

    constructor(public payload: AuthData){}
}

export class RegisterSuccess implements Action {
    readonly type = REGISTER_SUCCESS
}

export class SetAuthenticated implements Action {
    readonly type = SET_AUTHENTICATED

}
export class SetUnauthenticated implements Action {
    readonly type = SET_UNAUTHENTICATED

}

export class StartUid implements Action {
    readonly type = START_UID

    constructor(public payload: string){}
}

export class UidReceived implements Action {
    readonly type = UID_RECIEVED
}

export class StopUid implements Action {
    readonly type = STOP_UID

}

export class Logout implements Action {
    readonly type = LOGOUT
}

export class LogoutSuccess implements Action {
    readonly type = LOGOUT_SUCCESS
}



export type AuthActions = SetAuthenticated |
            SetUnauthenticated |
            StartUid |
            StopUid |
            Login |
            LoginSuccess |
            Register |
            RegisterSuccess |
            UidReceived