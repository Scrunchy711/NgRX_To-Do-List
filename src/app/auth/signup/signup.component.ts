import { Register } from './../auth-store/auth.action';
import { Store } from '@ngrx/store';
import { NgForm } from '@angular/forms';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import * as fromRoot from '../../app-store/app.reducer'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private store: Store<fromRoot.State>
    ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this.store.dispatch(new Register({
      email: form.value.email,
      password: form.value.password
    }))
  }

  

}
