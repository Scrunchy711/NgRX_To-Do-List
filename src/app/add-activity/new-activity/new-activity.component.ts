import { UiService } from './../../ui/ui.service';
import { take } from 'rxjs/operators';
import { Activity } from './../activity.model';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import * as fromRoot from '../../app-store/app.reducer'
import { AddNewActivity } from '../add-activity-store/add-activity.actions';

@Component({
  selector: 'app-new-activity',
  templateUrl: './new-activity.component.html',
  styleUrls: ['./new-activity.component.css']
})
export class NewActivityComponent implements OnInit {

  listOfActivities: Activity[]
  valid: boolean = true
  validTime:boolean

  constructor(
    private store: Store<fromRoot.State>,
    private uiService: UiService
  ) { }

  ngOnInit(): void {
    this.store.select(fromRoot.getListOfActivities)
      .subscribe((listOfActivities: Activity[]) =>{
        this.listOfActivities = listOfActivities
      })
  }

  addNewActivity(form:NgForm){
    console.log(this.listOfActivities === [])
    if (this.listOfActivities){
      this.checkClashing(form.value)
      this.checkTime(form.value.start_time, form.value.end_time)
    }
    if (this.valid && this.validTime){
      this.store.dispatch(new AddNewActivity({...form.value, date: new Date}))
      form.resetForm()
      const message = "Activity has successfully been added to To-Do-List"
      this.uiService.showSnackbar(message, null, 3000)
    }else{

    }
  }

  checkClashing(formValue){
    console.log(this.valid)
    console.log(this.listOfActivities)
    const activities = this.listOfActivities
    console.log(activities)
    for (var i=0; i<activities.length; i++){
      if (activities[i].priority === formValue.priority ||
        activities[i].activity === formValue.activity ||
        activities[i].start_time === formValue.start_time ||
        activities[i].end_time === formValue.end_time){
          
        this.valid = false
        this.showClashingError()
      }else{
        this.valid = true
      }
    }
  }  

  showClashingError(){
    const message = "You have clashing inputs. Please check against your To-Do-List."
    this.uiService.showSnackbar(message, null, 3000)
  }

  checkTime(start_time, end_time){
    if(start_time <= end_time){
      this.validTime = true
    }else{
      this.validTime = false
      const message = "Your time inputs are incorrect."
      this.uiService.showSnackbar(message, null, 3000)
    }
  }

  resetButton(form:NgForm){
    this.valid = true
    form.resetForm()
  }



}
