import { Action, createReducer, on } from "@ngrx/store";
import { APIPhotoResponse, Manifest } from "src/app/models/manifest";
import { Rover, RoverCamera, RoverListItem, RoverPhoto } from "../../models/rovers";
import * as ACTIONS from "./app.actions";
import { initialState, StoreState } from "./app.state";
import * as ROVER_CONSTANTS from '../../models/constants';

/**
 * Creates a reducer to manage the state changes in the store
 */
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

/**
 * Store reducer to manage the state
 * @param {StoreState} state state before execute the action
 * @param {Action} action action to apply with the reducer to modify the state
 * @returns {StoreState} state after execute the action
 */
export function storeReducer(state: StoreState | undefined, action: Action): StoreState {
  return _storeReducer(state, action);
}

/**
 * Sets the initial data for rovers and cameras into the state
 * @param {StoreState} state state before execute the action
 * @param {RoverCamera[]} camerasList list of cameras for add to the state
 * @param {RoverListItem[]} roversList list of rover for add to the state
 * @returns {StoreState} state after execute the action
 */
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

/**
 * Loads a manifest of a rover: start of the process
 * @param {StoreState} state state before execute the action
 * @param {string} rover code of the rover to apply the action
 * @returns {StoreState} state after execute the action
 */
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

/**
 * Loads a manifest of a rover: finished with success
 * @param {StoreState} state state before execute the action 
 * @param {Manifest} data data of the manifest received from the API
 * @param {string} rover code of the rover to apply the action
 * @returns {StoreState} state after execute the action
 */
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

/**
 * Loads a manifest of a rover: finished with error
 * @param {StoreState} state state before execute the action 
 * @param {string} rover code of the rover to apply the action
 * @param {string} errorCode code of error to show in the modal
 * @param {string} errorMessage message of error to show in the modal
 * @returns {StoreState} state after execute the action
 */
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

/**
 * Resets the indicators for load manifest data of a rover
 * @param {StoreState} state state before execute the action
 * @param {string} rover code of the rover to apply the action
 * @returns {StoreState} state after execute the action 
 */
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

/**
 * Resets the error values for modal of a rover
 * @param {StoreState} state state before execute the action 
 * @param {string} rover code of the rover to apply the action
 * @returns {StoreState} state after execute the action
 */
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

/**
 * Sets the current page as the first in the list of information photos for a rover
 * @param {StoreState} state state before execute the action
 * @param {string} rover code of the rover to apply the action
 * @returns {StoreState} state after execute the action 
 */
function _goToFirstPhotosPage(state: StoreState, rover: string): StoreState {
  return _updateCurrentPhotosPage(state, 1, rover);
}

/**
 * Sets the current page as the previous in the list of information photos for a rover
 * @param {StoreState} state state before execute the action
 * @param {string} rover code of the rover to apply the action
 * @returns {StoreState} state after execute the action
 */
function _goToPreviousPhotosPage(state: StoreState, rover: string): StoreState {
  const roverData = state?.roversList?.find(item => item.code === rover)
  const page = roverData?.currentPhotosPage ?? 1;
  return _updateCurrentPhotosPage(state, (page - 1), rover);
}

/**
 * Sets the current page as the next in the list of information photos for a rover
 * @param {StoreState} state state before execute the action
 * @param {string} rover code of the rover to apply the action
 * @returns {StoreState} state after execute the action 
 */
function _goToNextPhotosPage(state: StoreState, rover: string): StoreState {
  const roverData = state?.roversList?.find(item => item.code === rover)
  const page = roverData?.currentPhotosPage ?? 1;
  return _updateCurrentPhotosPage(state, (page + 1), rover);
}

/**
 * Sets the current page as the last in the list of information photos for a rover
 * @param {StoreState} state state before execute the action
 * @param {string} rover code of the rover to apply the action
 * @returns {StoreState} state after execute the action
 */
function _goToLastPhotosPage(state: StoreState, rover: string): StoreState {
  const roverData = state?.roversList?.find(item => item.code === rover)
  const page = roverData?.photosPages ?? 1;
  return _updateCurrentPhotosPage(state, page, rover);
}

/**
 * Sets the current page with an specific value in the list of information photos for a rover
 * @param {StoreState} state state before execute the action
 * @param {string} rover code of the rover to apply the action
 * @param {number} page new page to ser as the current
 * @returns {StoreState} state after execute the action
 */
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

/**
 * Update the current page in the photos list for a panel
 * @param {StoreState} state state before execute the action
 * @param {number} page new current page for the list
 * @param {string} rover code of the rover to apply the action
 * @returns {StoreState} state after execute the action 
 */
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

/**
 * Adds a panel that has expanded from the expanded panels list
 * @param {StoreState} state state before execute the action
 * @param {string} rover code of the rover who their panel has been expanded
 * @returns {StoreState} state after execute the action 
 */
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

/**
 * Removes a panel that has collapsed from the expanded panels list
 * @param {StoreState} state state before execute the action
 * @param {string} rover code of the rover who their panel has been collapsed
 * @returns {StoreState} state after execute the action
 */
function _collapsedPanel(state: StoreState, rover: string): StoreState {
  return {
    ...state,
    expandedPanel: state.expandedPanel.filter(item => item !== rover)
  }
}

/**
 * Sets the selected tab in a rover panel
 * @param {StoreState} state state before execute the action
 * @param {string} rover the rover who has changed the tab
 * @param {number} tab number of the selected tab
 * @returns {StoreState} state after execute the action
 */
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

/**
 * Reset the values for loading photos lists
 * @param {StoreState} state state before execute the action
 * @returns {StoreState} state after execute the action
 */
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

/**
 * Load photos for a rover: start the process
 * @param {StoreState} state state before execute the action
 * @returns {StoreState} state after execute the action 
 */
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

/**
 * Load photos for a rover: finished with success
 * @param {StoreState} state state before execute the action
 * @param {APIPhotoReponse} data data with the list of photos received from the API
 * @param {string} rover code of the rover that it loaded the photos list
 * @param {string} camera code of the camera that it loaded the photos list
 * @returns {StoreState} state after execute the action 
 */
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

/**
 * Load photos for a rover: finished with error
 * @param {StoreState} state state before execute the action
 * @param {string} errorCode error code for the dialog modal
 * @param {string} errorMessage error message for the dialog modal
 * @returns {StoreState} state after execute the action
 */
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
