import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { initialState } from "../../../../store/app/app.state";
import { DetailsComponent } from "./details.component";
import { getDetailsRover } from '../../../../store/app/app.selectors';
import { ROVER_CURIOSITY } from "../../../../mocks/constants.mocks";
import { goToPhotosPage } from "../../../../store/app/app.actions";

const routerMock = {
  navigate() {
    return null;
  }
};

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let store: MockStore;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        provideMockStore({
          initialState,
          selectors: [
            {
              selector: getDetailsRover,
              value: ROVER_CURIOSITY
            }
          ]
        }),
        {
          provide: Router,
          useValue: routerMock
        }
      ],
      declarations: [
        DetailsComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    router = TestBed.inject(Router);
    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to dashboard on execute goToDashboard', () => {
    const spyNavigate = jest.spyOn(router, 'navigate');
    component.goToDashboard();

    expect(spyNavigate).toHaveBeenCalled();
    expect(spyNavigate).toHaveBeenCalledWith(['dashboard']);
  });

  it('on change page must dispatch an action', () => {
    const spyDispatch = jest.spyOn(store, 'dispatch').mockImplementation(jest.fn());
    const expectedAction = goToPhotosPage({
      rover: ROVER_CURIOSITY,
      page: 2
    });

    component.handlePageChange(2);

    expect(spyDispatch).toHaveBeenCalled();
    expect(spyDispatch).toHaveBeenCalledWith(expectedAction);
  });
});
