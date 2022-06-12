import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ErrorDialogPopupComponent } from "../error-dialog-popup/error-dialog-popup.component";
import { take } from 'rxjs/operators';
import { ErrorDialogData } from "../../../../../models/error";

/**
 * Component to show a modal with an error message
 */
@Component({
  selector: 'app-error-dialog-launcher',
  template: ''
})
export class ErrorDialogLauncherComponent implements OnInit {
  /**
   * An object with the code and message of the error
   */
  @Input() errorData!: ErrorDialogData;
  /**
   * Action to emit when the modal is closed
   */
  @Output() onClose = new EventEmitter<void>();

  /**
   * Constructor of the component
   * @param {MatDialog} dialog Service to open dialog modals
   */
  constructor(
    public dialog: MatDialog
  ){}

  /**
   * Angular life cycle onInit: opens the modal
   */
  ngOnInit(): void {
    const dialogRef = this.dialog.open(ErrorDialogPopupComponent, {
      data: this.errorData,
      disableClose: true
    });

    dialogRef.afterClosed().pipe(take(1)).subscribe(_r => {
      this.onClose.emit();
    });
  }
}
