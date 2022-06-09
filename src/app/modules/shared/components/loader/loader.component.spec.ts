import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { LoaderComponent } from './loader.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { loadRoverManifest } from '../../../../store/app/app.actions';
import * as MOCKS_CONSTANTS from '../../../../mocks/constants.mocks';

describe('Loader Component', () => {  
  let component: LoaderComponent;
  let fixture: ComponentFixture<LoaderComponent>;
  let store: MockStore;

  const initialState = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [
        LoaderComponent,
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
    fixture = TestBed.createComponent(LoaderComponent);
    component = fixture.componentInstance;
    component.store = store;
    component.action = loadRoverManifest({ rover: MOCKS_CONSTANTS.ROVER_TEST });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch action on init', () => {
    const spyDispatch = jest.spyOn(store, 'dispatch').mockImplementation(jest.fn());
    fixture = TestBed.createComponent(LoaderComponent);
    component = fixture.componentInstance;
    component.store = store;
    fixture.detectChanges();
    expect(spyDispatch).toHaveBeenCalled();
  });
});