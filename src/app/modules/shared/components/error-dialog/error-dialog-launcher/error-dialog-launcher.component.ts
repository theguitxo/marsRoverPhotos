import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ErrorDialogPopupComponent } from "../error-dialog-popup/error-dialog-popup.component";
import { take } from 'rxjs/operators';
import { ErrorDialogData } from "../../../../../models/error";

@Component({
  selector: 'app-error-dialog-launcher',
  template: ''
})
export class ErrorDialogLauncherComponent implements OnInit {
  @Input() errorData!: ErrorDialogData;
  @Output() onClose = new EventEmitter<void>();

  constructor(
    public dialog: MatDialog
  ){}

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
