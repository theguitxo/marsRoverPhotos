import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ErrorDialogData } from "../../../../../models/error";

@Component({
  selector: 'app-error-dialog-popup',
  templateUrl: './error-dialog-popup.component.html',
  styleUrls: ['./error-dialog-popup.component.scss']
})
export class ErrorDialogPopupComponent {
  constructor (
    public dialogRef: MatDialogRef<ErrorDialogPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ErrorDialogData
  ) {}
}
