import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MatDialog } from "@angular/material/dialog";
import { of } from "rxjs";
import { ErrorDialogLauncherComponent } from "./error-dialog-launcher.component";

class MatDialogMock {
  open() {
    return {
      afterClosed: () => of(true)
    }
  }
}

describe('ErrorDialogLauncherComponent', () => {

  let component: ErrorDialogLauncherComponent;
  let fixture: ComponentFixture<ErrorDialogLauncherComponent>;
  let dialog: MatDialog;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ErrorDialogLauncherComponent
      ],
      providers: [
        {
          provide: MatDialog,
          useClass: MatDialogMock
        }
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    dialog = TestBed.inject(MatDialog);
    fixture = TestBed.createComponent(ErrorDialogLauncherComponent);
    component = fixture.componentInstance;

    component.errorData = {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage'
    }

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
