import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import * as ACTIONS from "../../../../store/app/app.actions";
import { initialState } from "../../../../store/app/app.state";
import { RoverPanelComponent } from "./rover-panel.component";
import * as MOCKS_CONSTANTS from '../../../../mocks/constants.mocks';

describe('RoverPanelComponent', () =>{
  let component: RoverPanelComponent;
  let fixture: ComponentFixture<RoverPanelComponent>;
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        provideMockStore({ initialState })
      ],
      declarations: [
        RoverPanelComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(RoverPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('on execute method after expand panel should dispatch action', () => {
    component.code = MOCKS_CONSTANTS.ROVER_CURIOSITY;
    fixture.detectChanges();

    const action = ACTIONS.expandedPanel({ rover: MOCKS_CONSTANTS.ROVER_CURIOSITY });
    const spyDispatch = jest.spyOn(store, 'dispatch');

    component.afterExpand();
    expect(spyDispatch).toHaveBeenCalledWith(action);
  });

  it('on execute method after collapse panel should dispatch action', () => {
    component.code = MOCKS_CONSTANTS.ROVER_CURIOSITY;
    fixture.detectChanges();

    const action = ACTIONS.collapsedPanel({ rover: MOCKS_CONSTANTS.ROVER_CURIOSITY });
    const spyDispatch = jest.spyOn(store, 'dispatch');

    component.afterCollapse();
    expect(spyDispatch).toHaveBeenCalledWith(action);
  });

  it('on execute method to change tab should dispatch action', () => {
    component.code = MOCKS_CONSTANTS.ROVER_CURIOSITY;
    fixture.detectChanges();

    const action = ACTIONS.selectedTabChanged({
      rover: MOCKS_CONSTANTS.ROVER_CURIOSITY,
      tab: 1
    });
    const spyDispatch = jest.spyOn(store, 'dispatch');

    component.changeSelectedTab(1);
    expect(spyDispatch).toHaveBeenCalledWith(action);
  });

  it('on close error modal should dispatch 3 actions', () => {
    component.code = MOCKS_CONSTANTS.ROVER_CURIOSITY;
    fixture.detectChanges();

    const action1 = ACTIONS.collapsedPanel({ rover: MOCKS_CONSTANTS.ROVER_CURIOSITY });
    const action2 = ACTIONS.resetErrorRover({ rover: MOCKS_CONSTANTS.ROVER_CURIOSITY });
    const action3 = ACTIONS.resetRoverManifestLoad({ rover: MOCKS_CONSTANTS.ROVER_CURIOSITY });

    const spyDispatch = jest.spyOn(store, 'dispatch');

    component.closeErrorModal();
    expect(spyDispatch).toHaveBeenCalledWith(action1);
    expect(spyDispatch).toHaveBeenCalledWith(action2);
    expect(spyDispatch).toHaveBeenCalledWith(action3);
    expect(spyDispatch).toHaveBeenCalledTimes(3);
  });
});
