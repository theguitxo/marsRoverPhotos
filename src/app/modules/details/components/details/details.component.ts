import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Action, Store } from "@ngrx/store";
import { Observable, take } from "rxjs";
import { ErrorDialogData } from "../../../../models/error";
import { StoreState } from "../../../../store/app/app.state";
import * as ROVER_ACTIONS from '../../../../store/app/app.actions';
import * as ROVER_SELECTORS from "../../../../store/app/app.selectors";
import { RoverPhoto } from "src/app/models/rovers";

/**
 * Component for show a detailed rover photos list
 */
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['details.component.scss']
})
export class DetailsComponent implements OnInit {
  /**
   * Action for load de photos list
   */
  loadCamPhotosAction!: Action;

  /**
   * Indicator that data is loading
   */
  loading!: Observable<boolean>;
  /**
   * Indicator that data is loaded
   */
  loaded!: Observable<boolean>;
  /**
   * Indicator that an error was occurred during load data
   */
  errorLoading!: Observable<boolean>;
  /**
   * Information about an error to show in modal
   */
  errorData!: Observable<ErrorDialogData>;

  /**
   * Indicator that the detail data is available in the store
   */
  hasDetailsData!: Observable<boolean>;
  /**
   * List of detailed photo information
   */
  detailsData!: Observable<RoverPhoto[]>;
  /**
   * Total pages of the list
   */
  totalPages!: Observable<number>;
  /**
   * Page number that is shown currently
   */
  currentPage!: Observable<number>;

  /**
   * Returns a reference to the store
   */
  get storeRef(): Store<StoreState> {
    return this.store;
  }

  /**
   * Constructor for the component
   * @param {Router} router Angular service that provides tools for work with routes
   * @param {Store<StoreState>} store Store for app data
   */
  constructor(
    private readonly router: Router,
    private readonly store: Store<StoreState>
  ){}

  /**
   * Angular life cycle: sets the actions needed in the component and inits the subscriptions
   */
  ngOnInit(): void {
    this.setActions();
    this.initSubscriptions();
  }

  /**
   * Navigate to the dashboard page
   */
  goToDashboard(): void {
    this.router.navigate(['dashboard']);
  }

  /**
   * Changes the page of the list
   * @param {number} page new number of page for show the list
   */
  handlePageChange(page: number): void {
    this.store.select(ROVER_SELECTORS.getDetailsRover)
      .pipe(take(1))
      .subscribe((rover: string) => {
        this.store.dispatch(ROVER_ACTIONS.goToPhotosPage({
          rover,
          page
        }))
      });
  }

  /**
   * Sets the subscritpions for the component
   */
  private initSubscriptions(): void {
    this.loading = this.store.select(ROVER_SELECTORS.getIsLoading);
    this.loaded = this.store.select(ROVER_SELECTORS.getIsLoaded);
    this.errorLoading = this.store.select(ROVER_SELECTORS.getIsErrorLoading);
    this.errorData = this.store.select(ROVER_SELECTORS.getErrorData);

    this.hasDetailsData = this.store.select(ROVER_SELECTORS.getHasDetailRoverPhotosList);
    this.detailsData = this.store.select(ROVER_SELECTORS.getDetailRoverPhotosList);

    this.totalPages = this.store.select(ROVER_SELECTORS.getRoverPhotoListTotalPages);
    this.currentPage = this.store.select(ROVER_SELECTORS.getDetailsCurrentPage);
  }

  /**
   * Sets the actions for the component
   */
  private setActions(): void {
    this.loadCamPhotosAction = ROVER_ACTIONS.loadCamPhotos();
  }
}
