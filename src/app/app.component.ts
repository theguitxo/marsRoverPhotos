// ANGULAR
import { Component, OnInit } from '@angular/core';

// RXJS
import { Observable } from 'rxjs';

// STORE
import { Store } from '@ngrx/store';
import { StoreState } from './store/app/app.state';
import * as SELECTORS from './store/app/app.selectors';
import * as ACTIONS from './store/app/app.actions';

// MODELS
import * as ROVER_MODEL from './models/rovers';

// JSON Data files
import camerasList from '../assets/info/cameras.list.json';
import roversList from '../assets/info/rovers.list.json';
import { selectCurrentRoute } from './store/router/router.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  initialDataIsReady!: Observable<boolean>;

  constructor(
    private readonly store: Store<StoreState>
  ) {}

  ngOnInit(): void {
    this.initialDataIsReady = this.store.select(SELECTORS.getInitialDataIsReady);

    this.store.dispatch(ACTIONS.setInitialData({
      camerasList: camerasList as ROVER_MODEL.RoverCamera[],
      roversList: roversList as ROVER_MODEL.RoverListItem[]
    }));
  }
}
