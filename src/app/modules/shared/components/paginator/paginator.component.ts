import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output } from "@angular/core";
import { FormControl } from "@angular/forms";
import { MatSelectChange } from "@angular/material/select";
import { Store } from "@ngrx/store";
import { TypedAction } from "@ngrx/store/src/models";

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginatorComponent implements OnChanges {
  @Input() store!: Store<any>;
  @Input() actionFirst!: TypedAction<string>;
  @Input() actionPrevious!: TypedAction<string>;
  @Input() actionNext!: TypedAction<string>;
  @Input() actionLast!: TypedAction<string>;

  @Input() currentPage!: number;
  @Input() totalPages!: number;
  @Input() enabledPrevious!: boolean;
  @Input() enabledNext!: boolean;

  @Input() useButtons!: boolean;
  @Input() usePageSelector!: boolean;

  @Output() pageChange: EventEmitter<number> = new EventEmitter();

  pageSelector!: FormControl;
  pagesList!: number[];

  ngOnChanges(): void {
    if (this.totalPages) {
      this.pagesList = new Array(this.totalPages).fill(0).map((_i, index) => (index + 1));
    }
  }

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

  changePage(page: MatSelectChange): void {
    this.pageChange.emit(page.value);
  }
}
