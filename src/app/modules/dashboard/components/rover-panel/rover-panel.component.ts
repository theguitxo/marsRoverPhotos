import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import * as ROVER_ACTIONS from '../../../../store/app/app.actions';
import * as ROVER_SELECTORS from '../../../../store/app/app.selectors';
import { StoreState } from '../../../../store/app/app.state';
import { ManifestPhoto } from '../../../../models/manifest';
import { STATUS } from '../../../../models/constants';
import { RoverCamera } from '../../../../models/rovers';
import { ErrorDialogData } from '../../../../models/error';
import { Utils } from '../../../../modules/shared/utils.class';

/**
 * Component that shows a panel with information about a rover
 */
@Component({
  selector: 'app-rover-panel',
  templateUrl: './rover-panel.component.html',
  styleUrls: ['./rover-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoverPanelComponent implements OnInit {
  /**
   * Code of the rover that contains the panel
   */
  @Input() code!: string;

  /**
   * Index of the selected tab into the panel
   */
  selectedIndex!: Observable<number>;
  /**
   * Indicator that the panel is expanded or not
   */
  isExpanded!: Observable<boolean>;
  /**
   * Indicator if panel has the manifest information loaded
   */
  hasManifest!: Observable<boolean>;
  /**
   * Indicator that the manifest is loading
   */
  isLoadingManifest!: Observable<boolean>;
  /**
   * Indicator that the manifest is loaded
   */  
  isLoadedManifest!: Observable<boolean>;
  /**
   * Indicator that an error was occurred loading the manifest
   */
  isErrorLoadingManifest!: Observable<boolean>;
  /**
   * Information about the error occurred loading the manifest
   */
  errorLoadingManifestData!: Observable<ErrorDialogData>;
  /**
   * Indicator if the manifest isn't loaded
   */
  noManifestLoading!: Observable<boolean>;
  /**
   * Action to dispatch for load the manifest
   */
  loadAction!: Action;

  /**
   * Launch date of the rover
   */
  launchDate!: Observable<string>;
  /**
   * Landing date of the rover
   */
  landingDate!: Observable<string>;
  /**
   * Last earth date with photo
   */
  maxDate!: Observable<string>;
  /**
   * Last martian sol with photo
   */
  maxSol!: Observable<string | number>;
  /**
   * Total photos taken by the rover
   */
  totalPhotos!: Observable<number>;
  /**
   * List of days that the rover took a photo
   */
  photosList!: Observable<ManifestPhoto[]>;
  /**
   * Status of the rover
   */
  status!: Observable<STATUS>;
  /**
   * List of cameras availables for the rover
   */
  camerasList!: Observable<RoverCamera[]>;

  /**
   * Action to dispatch on press 'First' button
   */
  firstPageAction!: Action;
  /**
   * Action to dispatch on press 'Previous' button
   */  
  previousPageAction!: Action;
  /**
   * Action to dispatch on press 'Next' button
   */
  nextPageAction!: Action;
  /**
   * Action to dispatch on press 'Last' button
   */  
  lastPageAction!: Action;
  /**
   * Current page to show the list
   */
  currentPage!: Observable<number>;
  /**
   * If the 'previous' and 'first' buttons can be enabled
   */
  previousButtonEnabled!: Observable<boolean>;
  /**
   * If the 'next' and 'last' buttons can be enabled
   */  
  nextButtonEnabled!: Observable<boolean>;
  /**
   * Total pages of the information photos list 
   */
  totalPages!: Observable<number>;

  /**
   * Returns a reference to the store
   */
  get storeRef(): Store<StoreState> {
    return this.store;
  }

  /**
   * Constructor for the component
   * @param {Store<StoreState>} store Store for app data
   */
  constructor(
    private readonly store: Store<StoreState>
  ) {}

  /**
   * Angular life cycle: sets the actions needed in the component and inits the subscriptions
   */
  ngOnInit(): void {
    this.setActions();
    this.setSubscriptions();
  }

  /**
   * Dispatchs an action after a rover panel is expanded
   */
  afterExpand(): void {
    this.store.dispatch(ROVER_ACTIONS.expandedPanel({ rover: this.code }));
  }

  /**
   * Dispatchs an action after a rover panel is collapsed
   */
  afterCollapse(): void {
    this.store.dispatch(ROVER_ACTIONS.collapsedPanel({ rover: this.code }));
  }

  /**
   * Changes the selected tab of a rover panel
   * @param {number} tab number of the selected tab
   */
  changeSelectedTab(tab: number): void {
    this.store.dispatch(ROVER_ACTIONS.selectedTabChanged({
      rover: this.code,
      tab,
    }));
  }

  /**
   * Closes the modal that shows information about an error
   */
  closeErrorModal(): void {
    this.store.dispatch(ROVER_ACTIONS.collapsedPanel({ rover: this.code }));
    this.store.dispatch(ROVER_ACTIONS.resetErrorRover({ rover: this.code }));
    this.store.dispatch(ROVER_ACTIONS.resetRoverManifestLoad({ rover: this.code }));
  }

  /**
   * Sets the subscritpions for the component
   */
  private setSubscriptions(): void {
    this.noManifestLoading = this.store.select(ROVER_SELECTORS.getNoManifestLoading);
    this.selectedIndex = Utils.getRoverValueFromStore(this.store, ROVER_SELECTORS.getSelectedIndex, this.code);
    this.isExpanded = Utils.getRoverValueFromStore(this.store, ROVER_SELECTORS.getExpandedPanelStatus, this.code);
    this.hasManifest = Utils.getRoverValueFromStore(this.store, ROVER_SELECTORS.getHasManifest, this.code);
    this.isLoadingManifest = Utils.getRoverValueFromStore(this.store, ROVER_SELECTORS.getIsLoadingManifest, this.code);
    this.isLoadedManifest = Utils.getRoverValueFromStore(this.store, ROVER_SELECTORS.getIsLoadedManifest, this.code);
    this.isErrorLoadingManifest = Utils.getRoverValueFromStore(this.store, ROVER_SELECTORS.getIsErrorLoadingManifest, this.code);
    this.errorLoadingManifestData = Utils.getRoverValueFromStore(this.store, ROVER_SELECTORS.getErrorLoadingManifestData, this.code);
    this.launchDate = Utils.getRoverValueFromStore(this.store, ROVER_SELECTORS.getLaunchDates, this.code);
    this.landingDate = Utils.getRoverValueFromStore(this.store, ROVER_SELECTORS.getLandingDates, this.code);
    this.maxDate = Utils.getRoverValueFromStore(this.store, ROVER_SELECTORS.getMaxDate, this.code);
    this.maxSol = Utils.getRoverValueFromStore(this.store, ROVER_SELECTORS.getMaxSol, this.code);
    this.totalPhotos = Utils.getRoverValueFromStore(this.store, ROVER_SELECTORS.getTotalPhotos, this.code);
    this.photosList = Utils.getRoverValueFromStore(this.store, ROVER_SELECTORS.getPhotosList, this.code);
    this.status = Utils.getRoverValueFromStore(this.store, ROVER_SELECTORS.getStatus, this.code);
    this.camerasList = Utils.getRoverValueFromStore(this.store, ROVER_SELECTORS.getCamerasList, this.code);

    this.currentPage = Utils.getRoverValueFromStore(this.store, ROVER_SELECTORS.getCurrentPhotosPage, this.code).pipe(map(value => value ?? 1));
    this.previousButtonEnabled = Utils.getRoverValueFromStore(this.store, ROVER_SELECTORS.getEnablePreviousButton, this.code).pipe(map(value => value ?? false));
    this.nextButtonEnabled = Utils.getRoverValueFromStore(this.store, ROVER_SELECTORS.getEnableNextButton, this.code).pipe(map(value => value ?? false));
    this.totalPages = Utils.getRoverValueFromStore(this.store, ROVER_SELECTORS.getPhotosPages, this.code).pipe(map(value => value ?? 1));
  }

  /**
   * Sets the actions for the component
   */
  private setActions(): void {
    this.loadAction = ROVER_ACTIONS.loadRoverManifest({ rover: this.code });
    this.firstPageAction = ROVER_ACTIONS.goToFirstPhotosPage({ rover: this.code });
    this.previousPageAction = ROVER_ACTIONS.goToPreviousPhotosPage({ rover: this.code });
    this.nextPageAction = ROVER_ACTIONS.goToNextPhotosPage({ rover: this.code });
    this.lastPageAction = ROVER_ACTIONS.goToLastPhotosPage({ rover: this.code });
  }
}
