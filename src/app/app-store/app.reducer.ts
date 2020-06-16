// import { Activity } from './add-activity/activity.model';
import * as fromAuth from '../auth/auth-store/auth.reducer'
import * as fromActivities from '../add-activity/add-activity-store/add-activity.reducer'
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store'

export interface State {
    auth: fromAuth.State
    activities: fromActivities.State

}

export const reducers: ActionReducerMap<State> = {
    auth: fromAuth.authReducer,
    activities: fromActivities.addActivityReducer
}

export const getAuthState = createFeatureSelector<fromAuth.State>('auth')
export const getIsAuth = createSelector(getAuthState,fromAuth.getIsAuth)
export const getUid = createSelector(getAuthState,fromAuth.getUid)

export const getListOfActivitiesState = createFeatureSelector<fromActivities.State>('activities')
export const getListOfActivities = createSelector(getListOfActivitiesState,fromActivities.getListOfActivities)