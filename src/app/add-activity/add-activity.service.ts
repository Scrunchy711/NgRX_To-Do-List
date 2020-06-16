import { getUid } from './../auth/auth-store/auth.reducer';
import { Activity } from './activity.model';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subscription, of } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AddActivityService {
 
  listOfActivities: Activity[]
  userId: string

  constructor(
    private db: AngularFirestore,
    ) {}

  getUserId(uid){
      this.userId = uid
      console.log(this.userId)
  }

  fetchActivities() {
    return this.db.collection("User").doc(this.userId).collection('Activities')
      .snapshotChanges()
      .pipe(
        map(docArray => {
          return docArray.map((doc:any) =>{
            const data = doc.payload.doc.data()
            return {
              id: doc.payload.doc.id,
              priority: data.priority,
              activity: data.activity,
              start_time: data.start_time,
              end_time: data.end_time,
              date: data.date
            }
          })
        })
      )
  }

  addNewActivity(activity: Activity){
    this.db.collection("User").doc(this.userId).collection('Activities').add(activity)
  }

  deleteActivity(id:string){
    this.db.collection("User").doc(this.userId).collection('Activities').doc(id).delete()
  }
}