import { AuthService } from './../auth/auth.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromRoot from '../app-store/app.reducer'



@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {

  
  @Output() close = new EventEmitter

  isAuth$: Observable<boolean>

  constructor(
    private authService: AuthService,
    private store: Store<fromRoot.State>
    ) { }

  ngOnInit(): void {
    this.isAuth$ = this.store.select(fromRoot.getIsAuth)
  }

  closeSidenav() {
    this.close.emit()
  }

  onLogout() {
    this.closeSidenav()
    this.authService.logout()
    
  }
}
