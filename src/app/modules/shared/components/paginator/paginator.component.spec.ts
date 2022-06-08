import { Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { goToFirstPhotosPage, goToLastPhotosPage, goToNextPhotosPage, goToPreviousPhotosPage } from "../../../../store/app/app.actions";
import { initialState } from "../../../../store/app/app.state";
import { PaginatorComponent } from "./paginator.component";
import * as MOCKS_CONSTANTS from '../../../../mocks/constants.mocks';
import { Action } from "@ngrx/store";
import { By } from "@angular/platform-browser";

@Component({
  template: `
    <app-paginator id="paginator"
      [store]="store"
      [actionFirst]="actionFirst"
      [actionPrevious]="actionPrevious"
      [actionNext]="actionNext"
      [actionLast]="actionLast"
      [currentPage]="currentPage"
      [totalPages]="totalPages"
      [enabledPrevious]="enabledPrevious"
      [enabledNext]="enabledNext">
    </app-paginator>`
})
class TestHostComponent {
  store!: MockStore;
  actionFirst!: Action;
  actionPrevious!: Action;
  actionNext!: Action;
  actionLast!: Action;
  currentPage!: number;
  totalPages!: number;
  enabledPrevious!: boolean;
  enabledNext!: boolean;
}

describe('PaginatorComponent', () => {
  let component: PaginatorComponent;
  let fixture: ComponentFixture<PaginatorComponent>;
  let store: MockStore;

  let hostComponent: TestHostComponent;
  let hostFixture: ComponentFixture<TestHostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        PaginatorComponent,
        TestHostComponent
      ],
      providers: [
        provideMockStore({ initialState }),
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    store = TestBed.inject(MockStore);

    hostFixture = TestBed.createComponent(TestHostComponent);
    hostComponent = hostFixture.componentInstance;

    hostComponent.store = store;
    hostComponent.actionFirst = goToFirstPhotosPage({ rover: MOCKS_CONSTANTS.ROVER_TEST });
    hostComponent.actionPrevious = goToPreviousPhotosPage({ rover: MOCKS_CONSTANTS.ROVER_TEST });
    hostComponent.actionNext = goToNextPhotosPage({ rover: MOCKS_CONSTANTS.ROVER_TEST });
    hostComponent.actionLast = goToLastPhotosPage({ rover: MOCKS_CONSTANTS.ROVER_TEST });
    hostComponent.currentPage = 1;
    hostComponent.totalPages = 80;
    hostComponent.enabledPrevious = true;
    hostComponent.enabledNext = true;

    hostFixture.detectChanges();

    fixture = TestBed.createComponent(PaginatorComponent);
    component = fixture.componentInstance;
    component.useButtons = true;
    component.store = store;
    fixture.detectChanges();
  });

  it('should create', () => {
    hostFixture.detectChanges();
    expect(hostFixture.debugElement.query(By.css('#paginator')).componentInstance).toBeTruthy();
  });

  it('button first should call method', () => {
    const spyButtonFirst = jest.spyOn(component, 'photosFirstPage').mockImplementation(jest.fn());
    const buttonFirst = fixture.debugElement.query(By.css('.js-button-first'));
    buttonFirst.triggerEventHandler('click', null);
    expect(spyButtonFirst).toHaveBeenCalled();
  });

  it('button previous sould call method', () => {
    const spyButtonPrevious = jest.spyOn(component, 'photosPreviousPage').mockImplementation(jest.fn());
    const buttonPrevious = fixture.debugElement.query(By.css('.js-button-previous'));
    buttonPrevious.triggerEventHandler('click', null);
    expect(spyButtonPrevious).toHaveBeenCalled();
  });

  it('button next should call method', () => {
    const spyButtonNext = jest.spyOn(component, 'photosNextPage').mockImplementation(jest.fn());
    const buttonNext = fixture.debugElement.query(By.css('.js-button-next'));
    buttonNext.triggerEventHandler('click', null);
    expect(spyButtonNext).toHaveBeenCalled();
  });

  it('button last should call method', () => {
    const spyButtonLast = jest.spyOn(component, 'photosLastPage').mockImplementation(jest.fn());
    const buttonLast = fixture.debugElement.query(By.css('.js-button-last'));
    buttonLast.triggerEventHandler('click', null);
    expect(spyButtonLast).toHaveBeenCalled();
  });

  it('buttons should dispatch actions', () => {
    const spyDispatch = jest.spyOn(store, 'dispatch').mockImplementation(jest.fn());
    const buttonFirst = fixture.debugElement.query(By.css('.js-button-first'));
    buttonFirst.triggerEventHandler('click', null);
    const buttonPrevious = fixture.debugElement.query(By.css('.js-button-previous'));
    buttonPrevious.triggerEventHandler('click', null);
    const buttonNext = fixture.debugElement.query(By.css('.js-button-next'));
    buttonNext.triggerEventHandler('click', null);
    const buttonLast = fixture.debugElement.query(By.css('.js-button-last'));
    buttonLast.triggerEventHandler('click', null);
    expect(spyDispatch).toHaveBeenCalledTimes(4);
  });
});
