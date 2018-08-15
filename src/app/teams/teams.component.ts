import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetUser } from '../state/user/user.actions';
import * as fromUserStore from '../state/user/user.reducer';
import { UserTeamsAction } from './teams.actions';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  constructor(private store: Store<fromUserStore.State>) { }

  ngOnInit() {
    this.store.dispatch(new GetUser(new UserTeamsAction()));
  }

}
