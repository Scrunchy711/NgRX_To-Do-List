
import { AddActivityAction, LOAD_ACTIVITIES, LOAD_ACTIVITIES_SUCCESS, ADD_NEW_ACTIVITY, ADD_NEW_ACTIVITY_SUCCESS, DELETE_ACTIVITY, DELETE_ACTIVITY_SUCCESS } from './add-activity.actions';
import { Activity } from './../activity.model';

export interface State {
    listOfActivities: Activity[],
    newActivity: Activity,
    deleteActivityID: string

}

const initialState: State = {
    listOfActivities: [],
    newActivity: undefined,
    deleteActivityID: ""

}

export function addActivityReducer(state = initialState, action: AddActivityAction){
    switch (action.type){
        case LOAD_ACTIVITIES:
            return {
                ...state
        }

        case LOAD_ACTIVITIES_SUCCESS:
            return {
                ...state,
                listOfActivities: action.payload
        }

        case ADD_NEW_ACTIVITY:
            return {
                ...state,
                newActivity: action.payload
        }

        case ADD_NEW_ACTIVITY_SUCCESS:
            return {
                ...state
        }

        case    DELETE_ACTIVITY:
            return {
                ...state,
                deleteActivtyID: action.payload

        }

        case DELETE_ACTIVITY_SUCCESS:
            return {
                ...state
        }

        default:{
            return state
        }    
    }
}

export const getListOfActivities = (state: State)=>state.listOfActivities

