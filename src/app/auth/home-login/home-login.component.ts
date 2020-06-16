import { Store } from '@ngrx/store';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import * as fromRoot from '../../app-store/app.reducer'
import { Login } from '../auth-store/auth.action';

@Component({
  selector: 'app-home-login',
  templateUrl: './home-login.component.html',
  styleUrls: ['./home-login.component.css']
})
export class HomeLoginComponent implements OnInit {

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this.store.dispatch(new Login({
      email: form.value.email,
      password: form.value.password
    }))
  }

}
