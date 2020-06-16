import { DeleteActivityComponent } from './activities-list/delete-activity.component';
import { AddActivityEffects } from './add-activity-store/add-activity.effects';
import { EffectsModule } from '@ngrx/effects';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './../material/material.module';
import { NewActivityComponent } from './new-activity/new-activity.component';
import { AddActivityComponent } from './add-activity.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivitiesListComponent } from './activities-list/activities-list.component';




@NgModule({
  declarations: [
    AddActivityComponent,
    NewActivityComponent,
    ActivitiesListComponent,
    ActivitiesListComponent,
    DeleteActivityComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,

    
  ]
})
export class AddActivityModule { }
