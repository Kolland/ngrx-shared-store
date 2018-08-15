import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetUser } from '../state/user/user.actions';
import * as fromUserStore from '../state/user/user.reducer';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private store: Store<fromUserStore.State>) { }

  ngOnInit() {
    this.store.dispatch(new GetUser());
  }

}
