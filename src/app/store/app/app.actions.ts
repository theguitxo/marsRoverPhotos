import { createAction, props } from "@ngrx/store";
import { APIPhotoResponse, Manifest } from "src/app/models/manifest";
import { RoverCamera, RoverListItem } from "../../models/rovers";

export enum ACTIONS {
  SET_INITIAL_DATA = '[NASA MARS ROVER PHOTOS] Set initial data',
  LOAD_ROVER_MANIFEST = '[NASA MARS ROVER PHOTOS] Load rover manifest',
  LOAD_ROVER_MANIFEST_SUCCESS = '[NASA MARS ROVER PHOTOS] Load rover manifest success',
  LOAD_ROVER_MANIFEST_ERROR = '[NASA MARS ROVER PHOTOS] Load rover manifest error',
  RESET_ROVER_MANIFEST_LOAD = '[NASA MARS ROVER PHOTOS] Reset rover manifest load',
  RESET_ERROR_ROVER = '[NASA MARS ROVER PHOTOS] Reset error rover',
  GO_TO_FIRST_PHOTOS_PAGE = '[NASA MARS ROVER PHOTOS] Go to first photos page',
  GO_TO_PREVIOUS_PHOTOS_PAGE = '[NASA MARS ROVER PHOTOS] Go to previous photos page',
  GO_TO_NEXT_PHOTOS_PAGE = '[NASA MARS ROVER PHOTOS] Go to next photos page',
  GO_TO_LAST_PHOTOS_PAGE = '[NASA MARS ROVER PHOTOS] Go to last photos page',
  GO_TO_PHOTOS_PAGE = '[NASA MARS ROVER PHOTOS] Go to photos page',
  EXPANDED_PANEL = '[NASA MARS ROVER PHOTOS] Expanded panel',
  COLLAPSED_PANEL = '[NASA MARS ROVER PHOTOS] Collapsed panel',
  SELECTED_TAB_CHANGED = '[NASA MARS ROVER PHOTOS] Selected tab change',
  RESET_LOAD_STATUS = '[NASA MARS ROVER PHOTOS] Reset load status',
  LOAD_CAM_PHOTOS = '[NASA MARS ROVER PHOTOS] Load cam photos',
  LOAD_CAM_PHOTOS_SUCCESS = '[NASA MARS ROVER PHOTOS] Load cam photos success',
  LOAD_CAM_PHOTOS_ERROR = '[NASA MARS ROVER PHOTOS] Load cam photos error',
}

/**
 * Sets the initial data needed for the app (cameras and rovers information)
 * @param {RoverCamera[]} camerasList list with the cameras information
 * @param {RoverListItem[]} roversList list with the rovers information
 */
export const setInitialData = createAction (
  ACTIONS.SET_INITIAL_DATA,
  props<{
    camerasList: RoverCamera[],
    roversList: RoverListItem[]
  }>()
);

/**
 * Loads the manifest information for a rover: start of the process
 * @param {string} rover name of the rover to load the information
 */
export const loadRoverManifest = createAction (
  ACTIONS.LOAD_ROVER_MANIFEST,
  props<{ rover: string }>()
);

/**
 * Loads the manifest information for a rover: finished with success
 * @param {string} rover name of the rover to load the information
 * @param {Manifest} data manifest data of the rover
 */
export const loadRoverManifestSuccess = createAction (
  ACTIONS.LOAD_ROVER_MANIFEST_SUCCESS,
  props<{ rover: string, data: Manifest }>()
);

/**
 * Loads the manifest information for a rover: finished with error
 * @param {string} rover name of the rover to load the information
 * @param {string} errorCode code for the error to show in the modal
 * @param {string} messageCode message for the error to show in the modal
 */
export const loadRoverManifestError = createAction (
  ACTIONS.LOAD_ROVER_MANIFEST_ERROR,
  props<{
    rover: string,
    errorCode: string,
    errorMessage: string
  }>()
);

/**
 * Resets the values used for load the rover manifest information
 * @param {string} rover name of the rover to reset the information
 */
export const resetRoverManifestLoad = createAction (
  ACTIONS.RESET_ROVER_MANIFEST_LOAD,
  props<{ rover: string }>()
);

/**
 * Resets the values used for show the error modal
 * @param {string} rover name of the rover to reset the information
 */
export const resetErrorRover = createAction (
  ACTIONS.RESET_ERROR_ROVER,
  props<{ rover: string }>()
);

/**
 * Moves the current page to the first
 * @param {string} rover name of the rover
 */
export const goToFirstPhotosPage = createAction (
  ACTIONS.GO_TO_FIRST_PHOTOS_PAGE,
  props<{ rover: string }>()
);

/**
 * Moves the current page to the previous
 * @param {string} rover name of the rover
 */
export const goToPreviousPhotosPage = createAction (
  ACTIONS.GO_TO_PREVIOUS_PHOTOS_PAGE,
  props<{ rover: string }>()
);

/**
 * Moves the current page to the next
 * @param {string} rover name of the rover
 */
export const goToNextPhotosPage = createAction (
  ACTIONS.GO_TO_NEXT_PHOTOS_PAGE,
  props<{ rover: string }>()
);

/**
 * Moves the current page to the last
 * @param {string} rover name of the rover
 */
export const goToLastPhotosPage = createAction (
  ACTIONS.GO_TO_LAST_PHOTOS_PAGE,
  props<{ rover: string }>()
);

/**
 * Moves the current page to the chosen in the selector
 * @param {string} rover name of the rover
 * @param {number} page number of the chosen page
 */
export const goToPhotosPage = createAction (
  ACTIONS.GO_TO_PHOTOS_PAGE,
  props<{
    rover: string,
    page: number
  }>()
);

/**
 * Action to execute when the information panel for a rover is expanded
 * @param {string} rover name of the rover
 */
export const expandedPanel = createAction (
  ACTIONS.EXPANDED_PANEL,
  props<{ rover: string }>()
);

/**
 * Action to execute when the information panel for a rover is collapsed
 * @param {string} rover name of the rover
 */
export const collapsedPanel = createAction (
  ACTIONS.COLLAPSED_PANEL,
  props<{ rover: string }>()
);

/**
 * Action to execute when the tab of a rover panel changes
 * @param {string} rover name of the rover
 * @param {number} tab number of the selected tab
 */
export const selectedTabChanged = createAction (
  ACTIONS.SELECTED_TAB_CHANGED,
  props<{ rover: string, tab: number }>()
);

/**
 * Reset the values for control the load status in the app
 */
export const resetLoadStatus = createAction (
  ACTIONS.RESET_LOAD_STATUS
);

/**
 * Loads the list of photos according the values for camera, martian sol and rover: start of the process
 */
export const loadCamPhotos = createAction (
  ACTIONS.LOAD_CAM_PHOTOS
);

/**
 * Loads the list of photos according the values for camera, martian sol and rover: finished with success
 * @param {string} camera code of the photos camera
 * @param {string} rover name of the rover
 * @param {APIPhotoResponse} data data received from the API with the list of photos
 */
export const loadCamPhotosSuccess = createAction (
  ACTIONS.LOAD_CAM_PHOTOS_SUCCESS,
  props<{
    camera: string,
    rover: string,
    data: APIPhotoResponse
  }>()
);

/**
 * Loads the list of photos according the values for camera, martian sol and rover: finished with error
 * @param {string} errorCode error code for use in the modal
 * @param {string} errorMessage error message for use in the modal
 */
export const loadCamPhotosError = createAction (
  ACTIONS.LOAD_CAM_PHOTOS_ERROR,
  props<{
    errorCode: string,
    errorMessage: string
  }>()
);
