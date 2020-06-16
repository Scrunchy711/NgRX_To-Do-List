import { START_UID, StartUid, UidReceived } from './../../auth/auth-store/auth.action';
import { Activity } from './../activity.model';
import { LOAD_ACTIVITIES, LoadActivitiesSuccess, AddNewActivity, DeleteActivity, DELETE_ACTIVITY } from '../add-activity-store/add-activity.actions'
import { AddActivityService } from './../add-activity.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { LoadActivities, ADD_NEW_ACTIVITY, AddNewActivitySuccess } from './add-activity.actions';

@Injectable()
export class AddActivityEffects {

    constructor(
        private actions$ : Actions,
        private addActivityService: AddActivityService
        ){}

    @Effect() loadActivities$ = this.actions$
        .pipe(
            ofType<LoadActivities>(LOAD_ACTIVITIES),
            mergeMap(
                () => this.addActivityService.fetchActivities()
                .pipe(
                    map((activities: Activity[])=>{
                        return new LoadActivitiesSuccess(activities)
                    })
                )
            )
    )

    @Effect() addNewActivity$ = this.actions$
        .pipe(
            ofType<AddNewActivity>(ADD_NEW_ACTIVITY),
            map((data) => {
                console.log(data.payload)
                this.addActivityService.addNewActivity(data.payload)
                return new AddNewActivitySuccess
                })             
    )

    @Effect() deleteActivity$ = this.actions$
        .pipe(
            ofType<DeleteActivity>(DELETE_ACTIVITY),
            map((data) => {
                console.log(data.payload)
                this.addActivityService.deleteActivity(data.payload)
                return new AddNewActivitySuccess
                })             
    )

    @Effect() getUserId$ = this.actions$
        .pipe(
            ofType<StartUid>(START_UID),
            map(data=>{
                this.addActivityService.getUserId(data.payload)
                return new UidReceived
            })
    )

    



}