import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output } from "@angular/core";
import { FormControl } from "@angular/forms";
import { MatSelectChange } from "@angular/material/select";
import { Store } from "@ngrx/store";
import { TypedAction } from "@ngrx/store/src/models";

/**
 * Shows buttons or a page selector, according a value, for navigate about the pages of a results list
 */
@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginatorComponent implements OnChanges {
  /**
   * Store as the origin of data to paginate
   */
  @Input() store!: Store<any>;
  /**
   * Store action for execute when user press the First button
   */
  @Input() actionFirst!: TypedAction<string>;
  /**
   * Store action for execute when user press the Previous button
   */  
  @Input() actionPrevious!: TypedAction<string>;
  /**
   * Store action for execute when user press the Next button
   */  
  @Input() actionNext!: TypedAction<string>;
  /**
   * Store action for execute when user press the Last button
   */  
  @Input() actionLast!: TypedAction<string>;

  /**
   * Current page to show in the component
   */
  @Input() currentPage!: number;
  /**
   * Total pages in the results list
   */
  @Input() totalPages!: number;
  /**
   * Indicator to enable / disable the Previous and First buttons
   */
  @Input() enabledPrevious!: boolean;
  /**
   * Indicator to enable / disable the Next and Last buttons
   */
  @Input() enabledNext!: boolean;

  /**
   * Indicator to use the navigation buttons in the paginator
   */
  @Input() useButtons!: boolean;
  /**
   * Indicator to use the pages selector in the paginator
   */
  @Input() usePageSelector!: boolean;

  /**
   * Event to emit when pages changes using the selector
   */
  @Output() pageChange: EventEmitter<number> = new EventEmitter();

  /**
   * Form control for the pages selector
   */
  pageSelector!: FormControl;
  /**
   * List of pages for the selector
   */
  pagesList!: number[];

  /**
   * Angular life cycle event to upate the pages list on change the total pages value
   */
  ngOnChanges(): void {
    if (this.totalPages) {
      this.pagesList = new Array(this.totalPages).fill(0).map((_i, index) => (index + 1));
    }
  }

  /**
   * Executes the action for the first page button
   */
  photosFirstPage(): void {
    this.store.dispatch(this.actionFirst);
  }

  /**
   * Executes the action for the previous page button
   */
  photosPreviousPage(): void {
    this.store.dispatch(this.actionPrevious);
  }

  /**
   * Executes the action for the next page button
   */  
  photosNextPage(): void {
    this.store.dispatch(this.actionNext);
  }

  /**
   * Executes the action for the last page button
   */
  photosLastPage(): void {
    this.store.dispatch(this.actionLast);
  }

  /**
   * Executes the action when the pages changes in the selector
   */
  changePage(page: MatSelectChange): void {
    this.pageChange.emit(page.value);
  }
}
