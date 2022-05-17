import { createAction, props } from "@ngrx/store";
import { Manifest } from "src/app/models/manifest";
import { RoverCamera, RoverListItem } from "../../models/rovers";

export enum ACTIONS {
  SET_INITIAL_DATA = '[NASA MARS ROVER PHOTOS] Set initial data',
  LOAD_ROVER_MANIFEST = '[NASA MARS ROVER PHOTOS] Load rover manifest',
  LOAD_ROVER_MANIFEST_SUCCESS = '[NASA MARS ROVER PHOTOS] Load rover manifest success',
  LOAD_ROVER_MANIFEST_ERROR = '[NASA MARS ROVER PHOTOS] Load rover manifest error',
  UPDATE_CURRENT_PHOTOS_PAGE = '[NASA MARS ROVER PHOTOS] Update current photos page'
};

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

export const updateCurrentPhotosPage = createAction ( 
  ACTIONS.UPDATE_CURRENT_PHOTOS_PAGE,
  props<{ rover: string, page: number }>()
);
