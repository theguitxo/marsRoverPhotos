import { createAction, props } from "@ngrx/store";
import { Manifest } from "src/app/models/manifest";
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
  EXPANDED_PANEL = '[NASA MARS ROVER PHOTOS] Expanded panel',
  COLLAPSED_PANEL = '[NASA MARS ROVER PHOTOS] Collapsed panel',
  SELECTED_TAB_CHANGED = '[NASA MARS ROVER PHOTOS] Selected tab change',
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
