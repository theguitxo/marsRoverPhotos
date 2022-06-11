import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { TypedAction } from "@ngrx/store/src/models";

/**
 * Shows a spinner during a data loading operation
 */
@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderComponent implements OnInit {
  /**
   * Store that contains the action for load the data
   */
  @Input() store!: Store<any>;
  /**
   * Action for load the data
   */
  @Input() action!: TypedAction<string>;

  /**
   * Angular life cycle init: dispatch the action to load the data
   */
  ngOnInit(): void {
      this.store.dispatch(this.action);
  }
}