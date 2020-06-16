import { Activity } from './../activity.model';
import { Action } from '@ngrx/store';

export const LOAD_ACTIVITIES = '[Activities] Load Activities'
export const LOAD_ACTIVITIES_SUCCESS = '[Activities] Load Activities Success'
export const ADD_NEW_ACTIVITY = '[Activities] Add New Activity'
export const ADD_NEW_ACTIVITY_SUCCESS = '[Activities] Add New Activity Success'
export const DELETE_ACTIVITY = '[Activities] Delete Activity'
export const DELETE_ACTIVITY_SUCCESS = '[Activities] Delete Activity Success'


export class LoadActivities implements Action {
    readonly type = LOAD_ACTIVITIES
}

export class LoadActivitiesSuccess implements Action {
    readonly type = LOAD_ACTIVITIES_SUCCESS

    constructor(public payload: Activity[]){}
}

export class AddNewActivity implements Action {
    readonly type = ADD_NEW_ACTIVITY

    constructor(public payload: Activity){}
}

export class AddNewActivitySuccess implements Action {
    readonly type = ADD_NEW_ACTIVITY_SUCCESS
}

export class DeleteActivity implements Action {
    readonly type = DELETE_ACTIVITY

    constructor(public payload: string){}
}

export class DeleteActivitySuccess implements Action {
    readonly type = DELETE_ACTIVITY_SUCCESS
}

export type AddActivityAction = LoadActivities |
            LoadActivitiesSuccess |
            AddNewActivity |
            AddNewActivitySuccess |
            DeleteActivity |
            DeleteActivitySuccess