import { AngularFirestore } from '@angular/fire/firestore';
import { AddActivityService } from './add-activity.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import * as fromRoot from '../app-store/app.reducer'
import { Store } from '@ngrx/store';
import { LoadActivities } from './add-activity-store/add-activity.actions';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.css']
})
export class AddActivityComponent implements OnInit, OnDestroy {

  constructor(
    private store: Store<fromRoot.State>
    ) { }

  ngOnInit(): void {
    this.store.dispatch(new LoadActivities)
  }

  ngOnDestroy(){
    // this.store.dispatch()
  }

}
