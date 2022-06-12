// ANGULAR
import { Component, OnInit } from '@angular/core';

// RXJS
import { Observable, take, combineLatest } from 'rxjs';

// STORE
import { Store } from '@ngrx/store';
import { StoreState } from './store/app/app.state';
import * as SELECTORS from './store/app/app.selectors';
import * as ACTIONS from './store/app/app.actions';
import { ajax } from 'rxjs/ajax';

// MODELS
import * as ROVER_MODEL from './models/rovers';

/**
 * Root component for the app
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  /**
   * To check if initial data of rovers is ready
   */
  initialDataIsReady!: Observable<boolean>;

  /**
   * Constructor for root component
   * @param {Store<StoreState>} store Store for app data
   */
  constructor(
    private readonly store: Store<StoreState>
  ) {}

  /**
   * Loads initial data of rovers for the app
   */
  ngOnInit(): void {
    this.initialDataIsReady = this.store.select(SELECTORS.getInitialDataIsReady);

    combineLatest([
      ajax.getJSON('assets/info/cameras.list.json'),
      ajax.getJSON('assets/info/rovers.list.json')
    ]).pipe(take(1)).subscribe(([camerasList, roversList]) => {
      this.store.dispatch(ACTIONS.setInitialData({
        camerasList: camerasList as ROVER_MODEL.RoverCamera[],
        roversList: roversList as ROVER_MODEL.RoverListItem[]
      }));
    });
  }
}
