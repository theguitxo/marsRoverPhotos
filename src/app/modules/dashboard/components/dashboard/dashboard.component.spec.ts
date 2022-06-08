import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { getCodesList } from '../../../../store/app/app.selectors';
import { initialState } from '../../../../store/app/app.state';
import { DashboardComponent } from './dashboard.component';
import * as CONSTANTS_MOCKS from '../../../../mocks/constants.mocks';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let store: MockStore;

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
              selector: getCodesList,
              value: [
                CONSTANTS_MOCKS.ROVER_CURIOSITY, CONSTANTS_MOCKS.ROVER_OPPORTUNITY,
                CONSTANTS_MOCKS.ROVER_SPIRIT, CONSTANTS_MOCKS.ROVER_PERSEVERNACE
              ]
            }
          ]
        })
      ],
      declarations: [
        DashboardComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('number of rover codes must be 4', () => {
    expect(component.codes.subscribe(res => {
      expect(res.length).toBe(4);
    }));
  });
});
