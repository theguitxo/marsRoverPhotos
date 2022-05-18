import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { Store } from "@ngrx/store";
import { TypedAction } from "@ngrx/store/src/models";

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginatorComponent {

  @Input() store!: Store<any>;
  @Input() actionFirst!: TypedAction<string>;
  @Input() actionPrevious!: TypedAction<string>;
  @Input() actionNext!: TypedAction<string>;
  @Input() actionLast!: TypedAction<string>;

  @Input() currentPage!: number;
  @Input() lastPage!: number;
  @Input() enabledPrevious!: boolean;
  @Input() enabledNext!: boolean;

  photosFirstPage(): void {
    this.store.dispatch(this.actionFirst);
  }

  photosPreviousPage(): void {
    this.store.dispatch(this.actionPrevious);
  }
  
  photosNextPage(): void {
    this.store.dispatch(this.actionNext);
  }

  photosLastPage(): void {
    this.store.dispatch(this.actionLast);
  }
}