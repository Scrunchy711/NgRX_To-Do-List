import { AuthData } from './../auth.data.model';
import { AuthActions, SET_AUTHENTICATED, SET_UNAUTHENTICATED, START_UID, STOP_UID, LOGIN, LOGIN_SUCCESS, REGISTER, REGISTER_SUCCESS, UID_RECIEVED } from './auth.action'



export interface State {
    loginData: AuthData,
    registerData: AuthData,
    isAuthenticated: boolean,
    uid: string
}

const initialState: State =  {
    loginData: null,
    registerData: null,
    isAuthenticated: false,
    uid: null
}

export function authReducer(state = initialState, action: AuthActions){
    switch (action.type){
        case LOGIN:
            return{
                ...state,
                loginData: action.payload,
              
        }

        case LOGIN_SUCCESS:
            return{
                ...state,
        }

        case REGISTER:
            return{
                ...state,
                registerData: action.payload
                
        }

        case REGISTER_SUCCESS:
            return{
                ...state,
        }

        case SET_AUTHENTICATED:
            return{
                ...state,
                isAuthenticated: true,
              
        }

        case SET_AUTHENTICATED:
            return{
                ...state,
                isAuthenticated: true,
              
        }

        case SET_UNAUTHENTICATED:
            return {
                ...state,
                loginData: null,
                registerData: null,
                isAuthenticated: false,
                
        }

        case START_UID:
            return {
                ...state,
                uid: action.payload

        }

        case UID_RECIEVED:
            return {
                ...state
        }

        case STOP_UID:
            return {
                ...state,
                uid: null
    
        }

        default:{
            return state
        }
    }
}

export const getIsAuth = (state: State)=>state.isAuthenticated
export const getUid = (state: State)=>state.uid