import { Action, createReducer, on } from "@ngrx/store";
import { APIPhotoResponse, Manifest } from "src/app/models/manifest";
import { Rover, RoverCamera, RoverListItem, RoverPhoto } from "../../models/rovers";
import * as ACTIONS from "./app.actions";
import { initialState, StoreState } from "./app.state";
import * as ROVER_CONSTANTS from '../../models/constants';

const _storeReducer = createReducer (
  initialState,
  on(ACTIONS.setInitialData, (state: StoreState, { camerasList, roversList }) => ({..._setInitialData({...state}, camerasList, roversList)})),
  on(ACTIONS.loadRoverManifest, (state: StoreState, { rover }) => ({ ..._loadRoverManifest({...state}, rover)})),
  on(ACTIONS.loadRoverManifestSuccess, (state: StoreState, { data, rover }) => ({ ..._loadRoverManifestSuccess({...state}, data, rover) })),
  on(ACTIONS.loadRoverManifestError, (state: StoreState, { rover, errorCode, errorMessage }) => ({..._loadRoverManifestError({...state}, rover, errorCode, errorMessage)})),
  on(ACTIONS.resetRoverManifestLoad, (state: StoreState, { rover }) => ({ ..._resetRoverManifestLoad({...state}, rover)})),
  on(ACTIONS.resetErrorRover, (state: StoreState, { rover }) => ({ ..._resetErrorRover({...state}, rover)})),
  on(ACTIONS.goToFirstPhotosPage, (state: StoreState, { rover }) => ({..._goToFirstPhotosPage({...state}, rover)})),
  on(ACTIONS.goToPreviousPhotosPage, (state: StoreState, { rover }) => ({..._goToPreviousPhotosPage({...state}, rover)})),
  on(ACTIONS.goToNextPhotosPage, (state: StoreState, { rover }) => ({..._goToNextPhotosPage({...state}, rover)})),
  on(ACTIONS.goToLastPhotosPage, (state: StoreState, { rover }) => ({..._goToLastPhotosPage({...state}, rover)})),
  on(ACTIONS.goToPhotosPage, (state: StoreState, { rover, page }) => ({..._goToPhotosPage({...state}, rover, page)})),
  on(ACTIONS.expandedPanel, (state: StoreState, { rover }) => ({..._expandPanel({...state}, rover)})),
  on(ACTIONS.collapsedPanel, (state: StoreState, { rover }) => ({..._collapsedPanel({...state}, rover)})),
  on(ACTIONS.selectedTabChanged, (state: StoreState, { rover, tab }) => ({..._selectedTabChanged({...state}, rover, tab)})),
  on(ACTIONS.resetLoadStatus, (state: StoreState) => ({..._resetLoadStatus({...state})})),
  on(ACTIONS.loadCamPhotos, (state: StoreState) => ({..._loadCamPhotos({...state})})),
  on(ACTIONS.loadCamPhotosSuccess, (state: StoreState, { rover, data, camera }) => ({..._loadCamPhotosSuccess({...state}, data, rover, camera)})),
  on(ACTIONS.loadCamPhotosError, (state: StoreState, { errorCode, errorMessage }) => ({..._loadCamPhotosError({...state}, errorCode, errorMessage)}))
);

export function storeReducer(state: StoreState | undefined, action: Action): StoreState {
  return _storeReducer(state, action);
}

function _setInitialData(state: StoreState, camerasList: RoverCamera[], roversList: RoverListItem[]): StoreState {
  const rovers: Rover[] = roversList.map(item => ({
    id: Math.floor((1 + Math.random() * 0x10000)).toString(16),
    selectedIndex: 0,
    code: item.code,
    name: item.name,
    cameras: item.camera.map(cam => {
      return camerasList.filter(it => it.camera === cam);
    }).flat(),
    haveManifest: false,
    loadingManifest: false,
    loadedManifest: false,
    errorLoadingManifest: false,
    roverPhotos: []
  }));

  return {
    ...state,
    camerasList,
    roversList: rovers,
    roverCodesList: rovers.map(item => item.code),
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
        errorLoadingManifest: false,
        errorCode: '',
        errorMessage: ''
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
        photos: data.photos?.map(photo => ({
            ...photo,
            camerasInfo: photo.cameras?.map(cam => ({
              camera: cam,
              description: state.camerasList.find(i => i.camera === cam)?.description
            }))
        })),
        haveManifest: true,
        loadingManifest: false,
        loadedManifest: true,
        errorLoadingManifest: false,
        currentPhotosPage: 1,
        photosPages: Math.ceil(data.photos?.length as number / ROVER_CONSTANTS.PHOTOS_PER_PAGE)
      }
    }
    return { ...item }
  });
  return {
    ...state,
    roversList: [...rovers]
  }
}

function _loadRoverManifestError(state: StoreState, rover: string, errorCode: string, errorMessage: string): StoreState {
  const rovers = state?.roversList?.map(item => {
    if (item.code === rover) {
      return {
        ...item,
        loadingManifest: false,
        loadedManifest: true,
        errorLoadingManifest: true,
        errorCode,
        errorMessage
      }
    }
    return { ...item }
  });
  return {
    ...state,
    roversList: [...rovers]
  }
}

function _resetRoverManifestLoad(state: StoreState, rover: string): StoreState {
  const rovers = state?.roversList?.map(item => {
    if (item.code === rover) {
      return {
        ...item,
        loadingManifest: false,
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

function _resetErrorRover(state: StoreState, rover: string): StoreState {
  const rovers = state?.roversList?.map(item => {
    if (item.code === rover) {
      return {
        ...item,
        errorCode: '',
        errorMessage: ''
      }
    }
    return { ...item }
  });
  return {
    ...state,
    roversList: [...rovers]
  }
}

function _goToFirstPhotosPage(state: StoreState, rover: string): StoreState {
  return _updateCurrentPhotosPage(state, 1, rover);
}

function _goToPreviousPhotosPage(state: StoreState, rover: string): StoreState {
  const roverData = state?.roversList?.find(item => item.code === rover)
  const page = roverData?.currentPhotosPage ?? 1;
  return _updateCurrentPhotosPage(state, (page - 1), rover);
}

function _goToNextPhotosPage(state: StoreState, rover: string): StoreState {
  const roverData = state?.roversList?.find(item => item.code === rover)
  const page = roverData?.currentPhotosPage ?? 1;
  return _updateCurrentPhotosPage(state, (page + 1), rover);
}

function _goToLastPhotosPage(state: StoreState, rover: string): StoreState {
  const roverData = state?.roversList?.find(item => item.code === rover)
  const page = roverData?.photosPages ?? 1;
  return _updateCurrentPhotosPage(state, page, rover);
}

function _goToPhotosPage(state: StoreState, rover: string, page: number): StoreState {
  return {
    ...state,
    roversList: state?.roversList?.map(roverItem => {
      if (roverItem.code === rover) {
        return {
          ...roverItem,
          roverPhotosCurrentPage: page
        }
      }
      return roverItem;
    })
  }
}

function _updateCurrentPhotosPage(state: StoreState, page: number, rover: string): StoreState {
  const roversList = state?.roversList?.map(item => {
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
    roversList
  }
}

function _expandPanel(state: StoreState, rover: string): StoreState {
  if (state?.expandedPanel?.indexOf(rover) === -1) {
    state.expandedPanel = [
      ...state.expandedPanel,
      rover
    ]
  }
  return {
    ...state
  }
}

function _collapsedPanel(state: StoreState, rover: string): StoreState {
  return {
    ...state,
    expandedPanel: state.expandedPanel.filter(item => item !== rover)
  }
}

function _selectedTabChanged(state: StoreState, rover: string, tab: number): StoreState {
  const roversList = state?.roversList?.map(item => {
    if (item.code === rover) {
      return {
        ...item,
        selectedIndex: tab
      }
    }
    return { ...item }
  });
  return {
    ...state,
    roversList
  }
}

function _resetLoadStatus(state: StoreState): StoreState {
  return {
    ...state,
    loaded: false,
    loading: false,
    errorLoading: false,
    errorCode: '',
    errorMessage: '',
    roversList: state?.roversList?.map(item => ({
      ...item,
      roverPhotosCurrentPage: 1
    }))
  }
}

function _loadCamPhotos(state: StoreState): StoreState {
  return {
    ...state,
    loading: true,
    loaded: false,
    errorLoading: false,
    errorCode: '',
    errorMessage: ''
  }
}

function _loadCamPhotosSuccess(state: StoreState, data: APIPhotoResponse, rover: string, camera: string): StoreState {
  const list: RoverPhoto[] = data.photos.map(item => ({
    camera: item.camera.name,
    cameraFullName: item.camera.full_name,
    earthDate: item.earth_date,
    id: item.id,
    imgSrc: item.img_src,
    sol: item.sol
  }));

  return {
    ...state,
    roversList: state.roversList.map(roverItem => {
      if (roverItem.code === rover) {
        const roverPhotos = !!(camera) ? [
          ...list
        ] : [
          ...roverItem.roverPhotos!.filter(f => f.camera !== camera),
          ...list
        ]
        return {
          ...roverItem,
          roverPhotos
        }
      }
      return roverItem;
    }),
    loading: false,
    loaded: true,
    errorLoading: false
  }
}

function _loadCamPhotosError(state: StoreState, errorCode: string, errorMessage: string): StoreState {
  return {
    ...state,
    loading: false,
    loaded: true,
    errorLoading: true,
    errorCode,
    errorMessage
  }
}
