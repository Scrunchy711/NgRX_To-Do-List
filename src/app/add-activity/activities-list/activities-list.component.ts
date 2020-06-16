import { DeleteActivityComponent } from './delete-activity.component';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { Activity } from './../activity.model';
import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import * as fromRoot from '../../app-store/app.reducer'
import { DeleteActivity } from '../add-activity-store/add-activity.actions';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.css']
})
export class ActivitiesListComponent implements OnInit, OnDestroy, AfterViewInit {

  displayedColumns = ['status','priority', 'activity', 'start_time', 'end_time', 'date','actions']
  dataSource = new MatTableDataSource<Activity>()
  checkboxValue: boolean = false
  dbSubscription = new Subscription

  
  @ViewChild(MatSort, {static: false}) sort: MatSort

  constructor(
    private store: Store<fromRoot.State>,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.dbSubscription = this.store.select(fromRoot.getListOfActivities)
      .subscribe((activities: Activity[])=>{
      this.dataSource.data = activities
      })
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort
  }
  

  checkbox(event){
    console.log(event)
    this.checkboxValue = event.checked
    console.log(this.checkboxValue)
  }

  deleteRow(row:Activity){
    console.log(row)
    if (this.checkboxValue){
      this.store.dispatch(new DeleteActivity(row.id))
    }else{
      const dialogRef = this.dialog.open(DeleteActivityComponent)
      dialogRef.afterClosed().subscribe(result =>{
        if(result){
          this.store.dispatch(new DeleteActivity(row.id))
        }
      })
    }
  }

  ngOnDestroy() {
    this.dbSubscription.unsubscribe()
  }

}
