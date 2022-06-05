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

@Component({
  selector: 'app-rover-panel',
  templateUrl: './rover-panel.component.html',
  styleUrls: ['./rover-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoverPanelComponent implements OnInit {
  @Input() code!: string;

  selectedIndex!: Observable<number>;
  isExpanded!: Observable<boolean>;
  hasManifest!: Observable<boolean>;
  isLoadingManifest!: Observable<boolean>;
  isLoadedManifest!: Observable<boolean>;
  isErrorLoadingManifest!: Observable<boolean>;
  errorLoadingManifestData!: Observable<ErrorDialogData>;
  noManifestLoading!: Observable<boolean>;
  loadAction!: Action;

  launchDate!: Observable<string>;
  landingDate!: Observable<string>;
  maxDate!: Observable<string>;
  maxSol!: Observable<string | number>;
  totalPhotos!: Observable<number>;
  photosList!: Observable<ManifestPhoto[]>;
  status!: Observable<STATUS>;
  camerasList!: Observable<RoverCamera[]>;

  firstPageAction!: Action;
  previousPageAction!: Action;
  nextPageAction!: Action;
  lastPageAction!: Action;
  currentPage!: Observable<number>;
  previousButtonEnabled!: Observable<boolean>;
  nextButtonEnabled!: Observable<boolean>;
  lastPage!: Observable<number>;

  get storeRef(): Store<StoreState> {
    return this.store;
  }

  constructor(
    private readonly store: Store<StoreState>
  ) {}

  ngOnInit(): void {
    this.setActions();
    this.setSubscriptions();
  }

  afterExpand(): void {
    this.store.dispatch(ROVER_ACTIONS.expandedPanel({ rover: this.code }));
  }

  afterCollapse(): void {
    this.store.dispatch(ROVER_ACTIONS.collapsedPanel({ rover: this.code }));
  }

  changeSelectedTab(tab: number): void {
    this.store.dispatch(ROVER_ACTIONS.selectedTabChanged({
      rover: this.code,
      tab,
    }));
  }

  closeErrorModal(): void {
    this.store.dispatch(ROVER_ACTIONS.collapsedPanel({ rover: this.code }));
    this.store.dispatch(ROVER_ACTIONS.resetErrorRover({ rover: this.code }));
    this.store.dispatch(ROVER_ACTIONS.resetRoverManifestLoad({ rover: this.code }));
  }

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
    this.lastPage = Utils.getRoverValueFromStore(this.store, ROVER_SELECTORS.getPhotosPages, this.code).pipe(map(value => value ?? 1));
  }

  private setActions(): void {
    this.loadAction = ROVER_ACTIONS.loadRoverManifest({ rover: this.code });
    this.firstPageAction = ROVER_ACTIONS.goToFirstPhotosPage({ rover: this.code });
    this.previousPageAction = ROVER_ACTIONS.goToPreviousPhotosPage({ rover: this.code });
    this.nextPageAction = ROVER_ACTIONS.goToNextPhotosPage({ rover: this.code });
    this.lastPageAction = ROVER_ACTIONS.goToLastPhotosPage({ rover: this.code });
  }
}
