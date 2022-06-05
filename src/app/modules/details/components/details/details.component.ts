import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Action, Store } from "@ngrx/store";
import { Observable, take } from "rxjs";
import { ErrorDialogData } from "../../../../models/error";
import { StoreState } from "../../../../store/app/app.state";
import * as ROVER_ACTIONS from '../../../../store/app/app.actions';
import * as ROVER_SELECTORS from "../../../../store/app/app.selectors";
import { RoverPhoto } from "src/app/models/rovers";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['details.component.scss']
})
export class DetailsComponent implements OnInit {
  loadCamPhotosAction!: Action;

  loading!: Observable<boolean>;
  loaded!: Observable<boolean>;
  errorLoading!: Observable<boolean>;
  errorData!: Observable<ErrorDialogData>;

  hasDetailsData!: Observable<boolean>;
  detailsData!: Observable<RoverPhoto[]>;

  totalPages!: Observable<number>;
  currentPage!: Observable<number>;

  get storeRef(): Store<StoreState> {
    return this.store;
  }

  constructor(
    private readonly router: Router,
    private readonly store: Store<StoreState>
  ){}

  ngOnInit(): void {
    this.setActions();
    this.initSubscriptions();
  }

  goToDashboard(): void {
    this.router.navigate(['dashboard']);
  }

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

  private setActions(): void {
    this.loadCamPhotosAction = ROVER_ACTIONS.loadCamPhotos();
  }
}
