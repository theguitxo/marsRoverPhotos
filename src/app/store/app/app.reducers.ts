import { Action, createReducer, on, Store } from "@ngrx/store";
import { ApiManifest, Manifest } from "src/app/models/manifest";
import { CodesNames, Rover, RoverCamera, RoverListItem } from "../../models/rovers";
import * as ACTIONS from "./app.actions";
import { initialState, StoreState } from "./app.state";

const _storeReducer = createReducer (
  initialState,
  on(ACTIONS.setInitialData, (state: StoreState, { camerasList, roversList }) => ({..._setInitialData({...state}, camerasList, roversList)})),
  on(ACTIONS.loadRoverManifest, (state: StoreState, { rover }) => ({ ..._loadRoverManifest({...state}, rover)})),
  on(ACTIONS.loadRoverManifestSuccess, (state: StoreState, { data, rover }) => ({ ..._loadRoverManifestSuccess({...state}, data, rover) })),
  on(ACTIONS.loadRoverManifestError, (state: StoreState, { rover }) => ({..._loadRoverManifestError({...state}, rover)}))
);

export function storeReducer(state: StoreState | undefined, action: Action): StoreState {
  return _storeReducer(state, action);
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
    roverCodesNamesList: rovers.map(item => ({
      code: item.code,
      name: item.name
    })),
    initialDataReady: true
  };
}

function _loadRoverManifest(state: StoreState, rover: string): StoreState {
  const rovers = state?.roversList?.map(item => {
    if (item.code === rover) {
      return {
        ...item,
        loadingManifest: true,
        loadedManifest: false,
        errorLoadingManifest: false
      }
    }
    return { ...item }
  });
  return {
    ...state,
    roversList: [...rovers]
  }
}

function _loadRoverManifestSuccess(state: StoreState, data: Manifest, rover: string): StoreState {
  const rovers = state?.roversList?.map(item => {
    if (item.code === rover) {
      return {
        ...item,
        ...data,
        haveManifest: true,
        loadingManifest: false,
        loadedManifest: true,
        errorLoadingManifest: false
      }
    }
    return { ...item }
  });
  return {
    ...state,
    roversList: [...rovers]
  }
}

function _loadRoverManifestError(state: StoreState, rover: string): StoreState {
  const rovers = state?.roversList?.map(item => {
    if (item.code === rover) {
      return {
        ...item,
        loadingManifest: false,
        loadedManifest: true,
        errorLoadingManifest: true
      }
    }
    return { ...item }
  });
  return {
    ...state,
    roversList: [...rovers]
  }
}
