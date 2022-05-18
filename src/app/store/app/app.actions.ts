import { createAction, props } from "@ngrx/store";
import { Manifest } from "src/app/models/manifest";
import { RoverCamera, RoverListItem } from "../../models/rovers";

export enum ACTIONS {
  SET_INITIAL_DATA = '[NASA MARS ROVER PHOTOS] Set initial data',
  LOAD_ROVER_MANIFEST = '[NASA MARS ROVER PHOTOS] Load rover manifest',
  LOAD_ROVER_MANIFEST_SUCCESS = '[NASA MARS ROVER PHOTOS] Load rover manifest success',
  LOAD_ROVER_MANIFEST_ERROR = '[NASA MARS ROVER PHOTOS] Load rover manifest error',
  GO_TO_FIRST_PHOTOS_PAGE = '[NASA MARS ROVER PHOTOS] Go to first photos page',
  GO_TO_PREVIOUS_PHOTOS_PAGE = '[NASA MARS ROVER PHOTOS] Go to previous photos page',
  GO_TO_NEXT_PHOTOS_PAGE = '[NASA MARS ROVER PHOTOS] Go to next photos page',
  GO_TO_LAST_PHOTOS_PAGE = '[NASA MARS ROVER PHOTOS] Go to last photos page'
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
