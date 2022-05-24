import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import * as ROVER_ACTIONS from '../../../../store/app/app.actions';
import * as ROVER_SELECTORS from '../../../../store/app/app.selectors';
import { StoreState } from 'src/app/store/app/app.state';
import { ManifestPhoto } from 'src/app/models/manifest';
import { STATUS } from 'src/app/models/constants';
import { RoverCamera } from 'src/app/models/rovers';

@Component({
  selector: 'app-rover-panel',
  templateUrl: './rover-panel.component.html',
  styleUrls: ['./rover-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoverPanelComponent implements OnInit {
  @Input() code!: string;

  logo!: string;

  selectedIndex!: Observable<number>;
  isExpanded!: Observable<boolean>;
  hasManifest!: Observable<boolean>;
  isLoadingManifest!: Observable<boolean>;
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
    this.setLogo();
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

  private setLogo(): void {
    this.logo = `assets/avatar/${this.code}.png`;
  }

  private setSubscriptions(): void {
    this.noManifestLoading = this.store.select(ROVER_SELECTORS.getNoManifestLoading);
    this.selectedIndex = this.getRoverValueFromStore(ROVER_SELECTORS.getSelectedIndex);
    this.isExpanded = this.getRoverValueFromStore(ROVER_SELECTORS.getExpandedPanelStatus);
    this.hasManifest = this.getRoverValueFromStore(ROVER_SELECTORS.getHasManifest);
    this.isLoadingManifest = this.getRoverValueFromStore(ROVER_SELECTORS.getIsLoadingManifest);
    this.launchDate = this.getRoverValueFromStore(ROVER_SELECTORS.getLaunchDates);
    this.landingDate = this.getRoverValueFromStore(ROVER_SELECTORS.getLandingDates);
    this.maxDate = this.getRoverValueFromStore(ROVER_SELECTORS.getMaxDate);
    this.maxSol = this.getRoverValueFromStore(ROVER_SELECTORS.getMaxSol);
    this.totalPhotos = this.getRoverValueFromStore(ROVER_SELECTORS.getTotalPhotos);
    this.photosList = this.getRoverValueFromStore(ROVER_SELECTORS.getPhotosList);
    this.status = this.getRoverValueFromStore(ROVER_SELECTORS.getStatus);
    this.camerasList = this.getRoverValueFromStore(ROVER_SELECTORS.getCamerasList);

    this.currentPage = this.getRoverValueFromStore(ROVER_SELECTORS.getCurrentPhotosPage).pipe(map(value => value ?? 1));
    this.previousButtonEnabled = this.getRoverValueFromStore(ROVER_SELECTORS.getEnablePreviousButton).pipe(map(value => value ?? false));
    this.nextButtonEnabled = this.getRoverValueFromStore(ROVER_SELECTORS.getEnableNextButton).pipe(map(value => value ?? false));
    this.lastPage = this.getRoverValueFromStore(ROVER_SELECTORS.getPhotosPages).pipe(map(value => value ?? 1));
  }

  private setActions(): void {
    this.loadAction = ROVER_ACTIONS.loadRoverManifest({ rover: this.code });
    this.firstPageAction = ROVER_ACTIONS.goToFirstPhotosPage({ rover: this.code });
    this.previousPageAction = ROVER_ACTIONS.goToPreviousPhotosPage({ rover: this.code });
    this.nextPageAction = ROVER_ACTIONS.goToNextPhotosPage({ rover: this.code });
    this.lastPageAction = ROVER_ACTIONS.goToLastPhotosPage({ rover: this.code });
  }

  private getRoverValueFromStore(selector:any): Observable<any> {
    return this.store.select(selector).pipe(map((data) => data.get(this.code))); 
  }
}
