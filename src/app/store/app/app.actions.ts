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

export const setInitialData = createAction (
  ACTIONS.SET_INITIAL_DATA,
  props<{
    camerasList: RoverCamera[],
    roversList: RoverListItem[]
  }>()
);

export const loadRoverManifest = createAction (
  ACTIONS.LOAD_ROVER_MANIFEST,
  props<{ rover: string }>()
);

export const loadRoverManifestSuccess = createAction (
  ACTIONS.LOAD_ROVER_MANIFEST_SUCCESS,
  props<{ rover: string, data: Manifest }>()
);

export const loadRoverManifestError = createAction (
  ACTIONS.LOAD_ROVER_MANIFEST_ERROR,
  props<{
    rover: string,
    errorCode: string,
    errorMessage: string
  }>()
);

export const resetRoverManifestLoad = createAction (
  ACTIONS.RESET_ROVER_MANIFEST_LOAD,
  props<{ rover: string }>()
);

export const resetErrorRover = createAction (
  ACTIONS.RESET_ERROR_ROVER,
  props<{ rover: string }>()
);

export const goToFirstPhotosPage = createAction (
  ACTIONS.GO_TO_FIRST_PHOTOS_PAGE,
  props<{ rover: string }>()
);

export const goToPreviousPhotosPage = createAction (
  ACTIONS.GO_TO_PREVIOUS_PHOTOS_PAGE,
  props<{ rover: string }>()
);

export const goToNextPhotosPage = createAction (
  ACTIONS.GO_TO_NEXT_PHOTOS_PAGE,
  props<{ rover: string }>()
);

export const goToLastPhotosPage = createAction (
  ACTIONS.GO_TO_LAST_PHOTOS_PAGE,
  props<{ rover: string }>()
);

export const goToPhotosPage = createAction (
  ACTIONS.GO_TO_PHOTOS_PAGE,
  props<{
    rover: string,
    page: number
  }>()
);

export const expandedPanel = createAction (
  ACTIONS.EXPANDED_PANEL,
  props<{ rover: string }>()
);

export const collapsedPanel = createAction (
  ACTIONS.COLLAPSED_PANEL,
  props<{ rover: string }>()
);

export const selectedTabChanged = createAction (
  ACTIONS.SELECTED_TAB_CHANGED,
  props<{ rover: string, tab: number }>()
);

export const resetLoadStatus = createAction (
  ACTIONS.RESET_LOAD_STATUS
);

export const loadCamPhotos = createAction (
  ACTIONS.LOAD_CAM_PHOTOS
);

export const loadCamPhotosSuccess = createAction (
  ACTIONS.LOAD_CAM_PHOTOS_SUCCESS,
  props<{
    camera: string,
    rover: string,
    data: APIPhotoResponse
  }>()
);

export const loadCamPhotosError = createAction (
  ACTIONS.LOAD_CAM_PHOTOS_ERROR,
  props<{
    errorCode: string,
    errorMessage: string
  }>()
);
