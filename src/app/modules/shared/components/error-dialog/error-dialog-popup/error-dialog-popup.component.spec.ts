import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { ErrorDialogPopupComponent } from "./error-dialog-popup.component";

describe('ErrorDialogPopupComponent', () => {

  let component: ErrorDialogPopupComponent;
  let fixture: ComponentFixture<ErrorDialogPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MatIconModule,
        MatDialogModule
      ],
      declarations: [
        ErrorDialogPopupComponent
      ],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {}
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: {
            errorCode: 'errorCode',
            errorMessage: 'errorMessage'
          }
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorDialogPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
