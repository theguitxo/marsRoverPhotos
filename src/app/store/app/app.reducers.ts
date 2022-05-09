import { Action, createReducer, on, Store } from "@ngrx/store";
import { ApiManifest, Manifest } from "src/app/models/manifest";
import { Rover, RoverCamera, RoverListItem } from "../../models/rovers";
import * as ACTIONS from "./app.actions";
import { initialState, StoreState } from "./app.state";

const _storeReducer = createReducer (
  initialState,
  on(ACTIONS.expandingPanel, (state: StoreState, { panelId }) => ({..._expandingPanel(state, panelId)})),
  on(ACTIONS.expandedPanel, (state: StoreState, { panelId }) => ({..._expandedPanel(state, panelId)})),
  on(ACTIONS.collapsedPanel, (state: StoreState) => ({..._collapsedPanel(state)})),
  on(ACTIONS.setInitialData, (state: StoreState, { camerasList, roversList }) => ({..._setInitialData({...state}, camerasList, roversList)})),
  on(ACTIONS.loadRoverManifest, (state: StoreState, { panelId }) => ({ ..._loadRoverManifest({...state}, panelId)})),
  on(ACTIONS.loadRoverManifestSuccess, (state: StoreState, { panelId, data }) => ({ ..._loadRoverManifestSuccess({...state}, panelId, data) })),
  on(ACTIONS.loadRoverManifestError, (state: StoreState, { panelId }) => ({..._loadRoverManifestError({...state}, panelId)}))
);

export function storeReducer(state: StoreState | undefined, action: Action): StoreState {
  return _storeReducer(state, action);
}

function _expandingPanel(state: StoreState, panelId: string): StoreState {
  return {
    ...state,
    panelExpanded: '',
    panelExpanding: panelId,
  };
}

function _expandedPanel(state: StoreState, panelId: string): StoreState {
  return {
    ...state,
    panelExpanded: panelId,
    panelExpanding: ''
  };
}

function _collapsedPanel(state: StoreState): StoreState {
  return {
    ...state,
    panelExpanded: '',
    panelExpanding: ''
  };
}

function _setInitialData(state: StoreState, camerasList: RoverCamera[], roversList: RoverListItem[]): StoreState {
  const rovers: Rover[] = roversList.map(item => ({
    id: Math.floor((1 + Math.random() * 0x10000)).toString(16),
    code: item.code,
    name: item.name,
    cameras: item.camera.map(cam => {
      return camerasList.filter(it => it.camera === cam);
    }).flat(),
    haveManifest: false,
    loadingManifest: false,
    loadedManifest: false,
    errorLoadingManifest: false
  }));

  return {
    ...state,
    camerasList,
    roversList: rovers,
    initialDataReady: true
  };
}

function _loadRoverManifest(state: StoreState, panelId: string): StoreState {
  const roversList = state?.roversList?.map(item => {
    if (item.id === panelId) {
      return {
        ...item,
        haveManifest: false,
        loadingManifest: true,
        loadedManifest: false,
        errorLoadingManifest: false
      }
    }
    return {
      ...item
    }
  });

  return {
    ...state,
    roversList
  }
}

function _loadRoverManifestSuccess(state: StoreState, panelId: string, data: Manifest): StoreState {
  const roversList = state?.roversList?.map(item => {
    if (item.id === panelId) {
      return {
        ...item,
        ...data,
        haveManifest: true,
        loadingManifest: false,
        loadedManifest: true,
        errorLoadingManifest: false
      }
    }
    return {
      ...item
    }
  });

  return {
    ...state,
    roversList
  };
}

function _loadRoverManifestError(state: StoreState, panelId: string): StoreState {
  const roversList = state?.roversList?.map(item => {
    if (item.id === panelId) {
      return {
        ...item,
        haveManifest: false,
        loadingManifest: false,
        loadedManifest: true,
        errorLoadingManifest: true
      }
    }
    return {
      ...item
    }
  });

  return {
    ...state,
    roversList
  };
}
