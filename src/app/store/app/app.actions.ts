import { createAction, props } from "@ngrx/store";
import { Manifest } from "src/app/models/manifest";
import { RoverCamera, RoverListItem } from "../../models/rovers";

export enum ACTIONS {
  EXPANDING_PANEL = '[NASA MARS ROVER PHOTOS] Expanding panel',
  EXPANDED_PANEL = '[NASA MARS ROVER PHOTOS] Expanded panel',
  COLLAPED_PANEL = '[NASA MARS ROVER PHOTOS] Collapsed panel',
  SET_INITIAL_DATA = '[NASA MARS ROVER PHOTOS] Set initial data',
  LOAD_ROVER_MANIFEST = '[NASA MARS ROVER PHOTOS] Load rover manifest',
  LOAD_ROVER_MANIFEST_SUCCESS = '[NASA MARS ROVER PHOTOS] Load rover manifest success',
  LOAD_ROVER_MANIFEST_ERROR = '[NASA MARS ROVER PHOTOS] Load rover manifest error'
}

export const expandingPanel = createAction (
  ACTIONS.EXPANDING_PANEL,
  props<{ panelId: string }>()
);

export const expandedPanel = createAction (
  ACTIONS.EXPANDED_PANEL,
  props<{ panelId: string }>()
);

export const collapsedPanel = createAction (
  ACTIONS.COLLAPED_PANEL
);

export const setInitialData = createAction (
  ACTIONS.SET_INITIAL_DATA,
  props<{
    camerasList: RoverCamera[],
    roversList: RoverListItem[]
  }>()
);

export const loadRoverManifest = createAction (
  ACTIONS.LOAD_ROVER_MANIFEST,
  props<{ panelId: string, rover: string }>()
);

export const loadRoverManifestSuccess = createAction (
  ACTIONS.LOAD_ROVER_MANIFEST_SUCCESS,
  props<{ panelId: string, data: Manifest }>()
);

export const loadRoverManifestError = createAction (
  ACTIONS.LOAD_ROVER_MANIFEST_ERROR,
  props<{ panelId: string }>()
);
