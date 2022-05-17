import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { map, Observable, of, take, takeUntil, takeWhile } from 'rxjs';
import { CodesNames } from 'src/app/models/rovers';
import * as ROVER_ACTIONS from '../../../../store/app/app.actions';
import * as ROVER_SELECTORS from '../../../../store/app/app.selectors';
import { StoreState } from 'src/app/store/app/app.state';
import { ManifestPhoto } from 'src/app/models/manifest';
import { STATUS } from 'src/app/models/constants';

@Component({
  selector: 'app-rover-panel',
  templateUrl: './rover-panel.component.html',
  styleUrls: ['./rover-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoverPanelComponent implements OnInit {
  @Input() codeName!: CodesNames;
  
  hasManifest!: Observable<boolean | undefined>;
  isLoadingManifest!: Observable<boolean | undefined>;
  noManifestLoading!: Observable<boolean | undefined>;

  loadAction!: Action;

  logo!: string;
  isOpened!: boolean;

  launchDate!: Observable<string | undefined>;
  landingDate!: Observable<string | undefined>;
  maxDate!: Observable<string | undefined>;
  maxSol!: Observable<string | number>;
  totalPhotos!: Observable<number | undefined>;
  photosList!: Observable<ManifestPhoto[] | undefined>;
  status!: Observable<STATUS | undefined>;

  currentPage!: Observable<number | undefined>;
  previousButtonEnabled!: Observable<boolean | undefined>;
  nextButtonEnabled!: Observable<boolean | undefined>;

  lastPage!: number | undefined;

  get storeRef(): Store<StoreState> {
    return this.store;
  }

  constructor(
    private readonly store: Store<StoreState>
  ) {}

  ngOnInit(): void {
    this.setLoadAction();
    this.setSubscriptions();
    this.setLogo();
  }

  afterExpand(): void {
    this.isOpened = true;
  }

  afterCollapse(): void {
    this.isOpened = false;
  }

  photosPreviousPage(): void {
    this.store.select(ROVER_SELECTORS.getCurrentPhotosPage)
      .pipe(
        take(1),
        map((data) =>{
          return data.get(this.codeName.code)
        })
      ).subscribe(currentPage => {
        if (currentPage) {
          this.store.dispatch(ROVER_ACTIONS.updateCurrentPhotosPage({
            page: (currentPage - 1),
            rover: this.codeName.code
          }));
        }
      });
  }
  
  photosNextPage(): void {
    this.store.select(ROVER_SELECTORS.getCurrentPhotosPage)
      .pipe(
        take(1),
        map((data) =>{
          return data.get(this.codeName.code)
        })
      ).subscribe(currentPage => {
        if (currentPage) {
          this.store.dispatch(ROVER_ACTIONS.updateCurrentPhotosPage({
            page: (currentPage + 1),
            rover: this.codeName.code
          }));
        }
      });
  }

  photosFirstPage(): void {
    this.store.dispatch(ROVER_ACTIONS.updateCurrentPhotosPage({
      page: 1,
      rover: this.codeName.code
    }));
  }

  photosLastPage(): void {
    if (this.lastPage !== undefined) {
      this.store.dispatch(ROVER_ACTIONS.updateCurrentPhotosPage({
        page: this.lastPage,
        rover: this.codeName.code
      }));
    }
  }

  private setLogo(): void {
    this.logo = `../../../../../../../assets/avatar/${this.codeName.code}.png`;
  }

  private setSubscriptions(): void {
    this.noManifestLoading = this.store.select(ROVER_SELECTORS.getNoManifestLoading);
    this.hasManifest = this.getRoverValueFromStore(ROVER_SELECTORS.getHasManifest);
    this.isLoadingManifest = this.getRoverValueFromStore(ROVER_SELECTORS.getIsLoadingManifest);
    this.launchDate = this.getRoverValueFromStore(ROVER_SELECTORS.getLaunchDates);
    this.landingDate = this.getRoverValueFromStore(ROVER_SELECTORS.getLandingDates);
    this.maxDate = this.getRoverValueFromStore(ROVER_SELECTORS.getMaxDate);
    this.maxSol = this.getRoverValueFromStore(ROVER_SELECTORS.getMaxSol);
    this.totalPhotos = this.getRoverValueFromStore(ROVER_SELECTORS.getTotalPhotos);
    this.photosList = this.getRoverValueFromStore(ROVER_SELECTORS.getPhotosList);
    this.status = this.getRoverValueFromStore(ROVER_SELECTORS.getStatus);

    this.currentPage = this.getRoverValueFromStore(ROVER_SELECTORS.getCurrentPhotosPage);
    this.previousButtonEnabled = this.getRoverValueFromStore(ROVER_SELECTORS.getEnablePreviousButton);
    this.nextButtonEnabled = this.getRoverValueFromStore(ROVER_SELECTORS.getEnableNextButton);

    this.store.select(ROVER_SELECTORS.getPhotosPages)
      .pipe(
        takeWhile(() => this.lastPage === undefined),
        map((data) => data.get(this.codeName.code))
      ).subscribe(lastPage => this.lastPage = lastPage);
  }

  private setLoadAction(): void {
    this.loadAction = ROVER_ACTIONS.loadRoverManifest({
      rover: this.codeName.code
    });
  }

  private getRoverValueFromStore(selector:any): Observable<any> {
    return this.store.select(selector).pipe(map((data) =>{
      return data.get(this.codeName.code)
    })); 
  }
}
