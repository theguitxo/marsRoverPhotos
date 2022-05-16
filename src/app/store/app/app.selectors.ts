import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CodesNames } from "src/app/models/rovers";
import { PanelLoadStatus } from "src/app/models/store";
import { StoreState } from "./app.state";
import * as ROVER_CONSTANTS from '../../models/constants';
import { ManifestPhoto } from "src/app/models/manifest";

export const selectState = createFeatureSelector<StoreState>('store');

export const getInitialDataIsReady = createSelector(
  selectState,
  (state: StoreState): boolean => state?.initialDataReady
);

export const getCodesNamesList = createSelector (
  selectState,
  (state: StoreState): CodesNames[] => state?.roverCodesNamesList
);

export const getLoadManifestStatus = createSelector (
  selectState,
  (state: StoreState): Map<string, PanelLoadStatus> => {
    const data = new Map();
    state?.roversList?.forEach(rover => {
      data.set(rover.code, {
        loading: rover.loadingManifest,
        loaded: rover.loadedManifest,
        error: rover.errorLoadingManifest
      });
    });
    return data;
  }
);

export const getIsLoadingManifest = createSelector (
  selectState,
  (state: StoreState): Map<string, boolean> => createValueMap(state, ROVER_CONSTANTS.ROVER_FIELDS.LOADING_MANIFEST)
);

export const getHasManifest = createSelector (
  selectState,
  (state: StoreState): Map<string, boolean> =>  createValueMap(state, ROVER_CONSTANTS.ROVER_FIELDS.HAVE_MANIFEST)
);

export const getNoManifestLoading = createSelector (
  selectState,
  (state: StoreState): boolean => state?.roversList?.every(item => !item.loadingManifest)
);

export const getLaunchDates = createSelector (
  selectState,
  (state: StoreState): Map<string, string> => createValueMap(state, ROVER_CONSTANTS.ROVER_FIELDS.LAUNCH_DATE)
);

export const getLandingDates = createSelector (
  selectState,
  (state: StoreState): Map<string, string> => createValueMap(state, ROVER_CONSTANTS.ROVER_FIELDS.LANDING_DATE)
);

export const getTotalPhotos = createSelector (
  selectState,
  (state: StoreState): Map<string, number> => createValueMap(state, ROVER_CONSTANTS.ROVER_FIELDS.TOTAL_PHOTOS)
);

export const getPhotosList = createSelector (
  selectState,
  (state: StoreState): Map<string, ManifestPhoto[]> => createValueMap(state, ROVER_CONSTANTS.ROVER_FIELDS.PHOTOS)
);

export const getMaxSol = createSelector (
  selectState,
  (state: StoreState): Map<string, number> => createValueMap(state, ROVER_CONSTANTS.ROVER_FIELDS.MAX_SOL)
);

export const getMaxDate = createSelector (
  selectState,
  (state: StoreState): Map<string, string> => createValueMap(state, ROVER_CONSTANTS.ROVER_FIELDS.MAX_DATE)
);

export const getStatus = createSelector (
  selectState,
  (state: StoreState): Map<string, ROVER_CONSTANTS.STATUS> => createValueMap(state, ROVER_CONSTANTS.ROVER_FIELDS.STATUS)
);

function createValueMap(state: StoreState, key: string): Map<string, any> {
  const data = new Map();
  state?.roversList?.forEach(rover => {
    const entries = Object.entries(rover);
    const value = entries.find(item => item[0] === key);
    const code = entries.find(item => item[0] === ROVER_CONSTANTS.ROVER_FIELDS.CODE);
    if (value && code) {
      data.set(code[1], value[1]);
    }
  });
  return data;
}
