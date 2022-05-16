import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { CodesNames } from "src/app/models/rovers";
import { StoreState } from "src/app/store/app/app.state";
import * as SELECTORS from '../../../../store/app/app.selectors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

  codesNames!: Observable<CodesNames[]>;
  
  constructor(
    private readonly store: Store<StoreState>
  ) {}

  ngOnInit(): void {
    this.codesNames = this.store.select(SELECTORS.getCodesNamesList);
  }
}
