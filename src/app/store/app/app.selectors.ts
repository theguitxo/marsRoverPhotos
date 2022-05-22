import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PanelLoadStatus } from "src/app/models/store";
import { StoreState } from "./app.state";
import * as ROVER_CONSTANTS from '../../models/constants';
import { ManifestPhoto } from "src/app/models/manifest";

export const selectState = createFeatureSelector<StoreState>('store');

export const getInitialDataIsReady = createSelector (
  selectState,
  (state: StoreState): boolean => state?.initialDataReady
);

export const getCodesList = createSelector (
  selectState,
  (state: StoreState): string[] => state?.roverCodesList
);

export const getExpandedPanelStatus = createSelector (
  selectState,
  getCodesList,
  (state: StoreState, list: string[]): Map<string, boolean> => {
    const data = new Map();
    list?.forEach(item => {
      data.set(item, state?.expandedPanel?.indexOf(item) > - 1)
    });
    return data;
  }
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

export const getSelectedIndex = createSelector (
  selectState,
  (state: StoreState): Map<string, number> => createValueMap(state, ROVER_CONSTANTS.ROVER_FIELDS.SELECTED_INDEX)
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

export const getPhotosList = createSelector (
  selectState,
  (state: StoreState): Map<string, ManifestPhoto[]> => {
    const data = new Map();
    state?.roversList?.forEach(rover => {
      const entries = Object.entries(rover);
      const code = entries.find(item => item[0] === ROVER_CONSTANTS.ROVER_FIELDS.CODE);
      const currentPage = entries.find(item => item[0] === ROVER_CONSTANTS.ROVER_FIELDS.CURRENT_PHOTOS_PAGE);
      const photosList = entries.find(item => item[0] === ROVER_CONSTANTS.ROVER_FIELDS.PHOTOS);

      if (code && currentPage && photosList) {
        const init = (currentPage[1] - 1) * ROVER_CONSTANTS.PHOTOS_PER_PAGE;
        const end = (init + ROVER_CONSTANTS.PHOTOS_PER_PAGE);
        data.set(code[1], photosList[1].slice(init, end));
      }
    });
    return data;
  }
);

export const getCurrentPhotosPage = createSelector (
  selectState,
  (state: StoreState): Map<string, number> => createValueMap(state, ROVER_CONSTANTS.ROVER_FIELDS.CURRENT_PHOTOS_PAGE)
);

export const getPhotosPages = createSelector (
  selectState,
  (state: StoreState): Map<string, number> => createValueMap(state, ROVER_CONSTANTS.ROVER_FIELDS.PHOTOS_PAGES)
)

export const getEnablePreviousButton = createSelector (
  selectState,
  (state: StoreState): Map<string, boolean[]> => {
    const data = new Map();
    state?.roversList?.forEach(rover => {
      const entries = Object.entries(rover);
      const code = entries.find(item => item[0] === ROVER_CONSTANTS.ROVER_FIELDS.CODE);
      const currentPage = entries.find(item => item[0] === ROVER_CONSTANTS.ROVER_FIELDS.CURRENT_PHOTOS_PAGE);
      if (code && currentPage) {
        data.set(code[1], currentPage[1] > 1);
      }
    });
    return data;
  }
);

export const getEnableNextButton = createSelector (
  selectState,
  (state: StoreState): Map<string, boolean[]> => {
    const data = new Map();
    state?.roversList?.forEach(rover => {
      const entries = Object.entries(rover);
      const code = entries.find(item => item[0] === ROVER_CONSTANTS.ROVER_FIELDS.CODE);
      const currentPage = entries.find(item => item[0] === ROVER_CONSTANTS.ROVER_FIELDS.CURRENT_PHOTOS_PAGE);
      const totalPages = entries.find(item => item[0] === ROVER_CONSTANTS.ROVER_FIELDS.PHOTOS_PAGES);
      if (code && currentPage && totalPages) {
        data.set(code[1], currentPage[1] < totalPages[1]);
      }
    });
    return data;
  }
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
