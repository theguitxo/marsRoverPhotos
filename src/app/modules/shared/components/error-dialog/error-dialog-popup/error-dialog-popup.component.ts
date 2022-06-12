import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ErrorDialogData } from "../../../../../models/error";

/**
 * Component with the content of the modal for show error messages
 */
@Component({
  selector: 'app-error-dialog-popup',
  templateUrl: './error-dialog-popup.component.html',
  styleUrls: ['./error-dialog-popup.component.scss']
})
export class ErrorDialogPopupComponent {
  /**
   * Constructor of the component
   * @param {MatDialogRef} dialogRef Reference to the dialog opened
   * @param {ErrorDialogData} data data to show into the dialog
   */
  constructor (
    public dialogRef: MatDialogRef<ErrorDialogPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ErrorDialogData
  ) {}
}
