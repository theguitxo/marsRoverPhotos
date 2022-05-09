import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Action, Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { Rover } from "src/app/models/rovers";
import * as ROVER_ACTIONS from "../../../../store/app/app.actions";
import * as ROVER_SELECTORS from "../../../../store/app/app.selectors";
import { StoreState } from "src/app/store/app/app.state";

@Component({
  selector: 'app-rover-panel',
  templateUrl: './rover-panel.component.html',
  styleUrls: ['./rover-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoverPanelComponent implements OnInit, OnDestroy {
  @Input() rover!: Rover;

  subscription!: Subscription;
  loadManifest!: boolean;
  loadAction!: Action;

  get storeRef(): Store<StoreState> {
    return this.store;
  }

  constructor(
    private readonly store: Store<StoreState>
  ) {}

  ngOnInit(): void {
    this.setSubscriptions();
    this.setLoadAction();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  expandPanel(): void {
    this.store.dispatch(ROVER_ACTIONS.expandedPanel({ panelId: this.rover.id }));
  }

  openedPanel(): void {
    this.store.dispatch(ROVER_ACTIONS.expandingPanel({ panelId: this.rover.id }));
  }

  closedPanel(): void {
    this.store.dispatch(ROVER_ACTIONS.collapsedPanel());
  }

  private setSubscriptions(): void {
    this.subscription = this.store.select(ROVER_SELECTORS.getLoadManifestInfo)
      .subscribe((data) => {
        this.loadManifest = (data.loadManifest && data.expandedPanel === this.rover.id);
      });
  }

  private setLoadAction(): void {
    this.loadAction = ROVER_ACTIONS.loadRoverManifest({
      panelId: this.rover.id,
      rover: this.rover.code
    });
  }
}
