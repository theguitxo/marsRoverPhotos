import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { StoreState } from "../../../../store/app/app.state";
import * as SELECTORS from '../../../../store/app/app.selectors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {
  codes!: Observable<string[]>;
  
  constructor(
    private readonly store: Store<StoreState>
  ) {}

  ngOnInit(): void {
    this.codes = this.store.select(SELECTORS.getCodesList);
  }
}
