import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { StoreState } from "../../../../store/app/app.state";
import * as SELECTORS from '../../../../store/app/app.selectors';

/**
 * Component for the dashboard
 */
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {
  /**
   * List of rover codes
   */
  codes!: Observable<string[]>;
  
  /**
   * Constructor for the component
   *@param {Store<StoreState>} store Store for app data
   */
  constructor(
    private readonly store: Store<StoreState>
  ) {}

  /**
   * Angular life cycle: set the list of rover codes
   */
  ngOnInit(): void {
    this.codes = this.store.select(SELECTORS.getCodesList);
  }
}
