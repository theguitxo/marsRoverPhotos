import { Action, createReducer, on } from "@ngrx/store";
import { Manifest } from "src/app/models/manifest";
import { Rover, RoverCamera, RoverListItem } from "../../models/rovers";
import * as ACTIONS from "./app.actions";
import { initialState, StoreState } from "./app.state";
import * as ROVER_CONSTANTS from '../../models/constants';

const _storeReducer = createReducer (
  initialState,
  on(ACTIONS.setInitialData, (state: StoreState, { camerasList, roversList }) => ({..._setInitialData({...state}, camerasList, roversList)})),
  on(ACTIONS.loadRoverManifest, (state: StoreState, { rover }) => ({ ..._loadRoverManifest({...state}, rover)})),
  on(ACTIONS.loadRoverManifestSuccess, (state: StoreState, { data, rover }) => ({ ..._loadRoverManifestSuccess({...state}, data, rover) })),
  on(ACTIONS.loadRoverManifestError, (state: StoreState, { rover }) => ({..._loadRoverManifestError({...state}, rover)})),
  on(ACTIONS.updateCurrentPhotosPage, (state: StoreState, { page, rover }) => ({..._updateCurrentPhotosPage({...state}, page, rover)}))
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
      const photosPages = Math.ceil(data.photos?.length as number / ROVER_CONSTANTS.PHOTOS_PER_PAGE);
      return {
        ...item,
        ...data,
        haveManifest: true,
        loadingManifest: false,
        loadedManifest: true,
        errorLoadingManifest: false,
        currentPhotosPage: 1,
        photosPages
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

function _updateCurrentPhotosPage(state: StoreState, page: number, rover: string): StoreState {
  const rovers = state?.roversList?.map(item => {
    if (item.code === rover) {
      return {
        ...item,
        currentPhotosPage: page
      }
    }
    return { ...item }
  });
  return {
    ...state,
    roversList: [...rovers]
  }
}
