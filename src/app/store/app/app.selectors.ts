import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PanelLoadStatus } from "../../models/store";
import { StoreState } from "./app.state";
import * as ROVER_CONSTANTS from '../../models/constants';
import { ManifestPhoto } from "../../models/manifest";
import { Rover, RoverCamera, RoverPhoto } from "../../models/rovers";
import { ErrorDialogData } from "../../models/error";
import { selectRouteParam, selectRouteParams } from "../router/router.selectors";
import { Params } from "@angular/router";

/**
 * Returns the state of the store
 */
export const selectState = createFeatureSelector<StoreState>('store');

/**
 * Returns the code of the rover from the route params
 */
export const getDetailsRover = createSelector (
  selectRouteParam(ROVER_CONSTANTS.DETAILS_PARAMS.CODE),
  (code: string | undefined): string => code!
);

/**
 * Returns a value that indicates that the route has the minimum parameters
 */
export const getHasDetailsMinimumParams = createSelector (
  selectRouteParams,
  (params: Params): boolean => (!!(params[ROVER_CONSTANTS.DETAILS_PARAMS.CODE]) && !!(params[ROVER_CONSTANTS.DETAILS_PARAMS.SOL]))
);

/**
 * Returns a value that indicates if any data is loading
 */
export const getIsLoading = createSelector (
  selectState,
  (state: StoreState): boolean => state?.loading
);

/**
 * Returns a value that indicates if any data is loaded
 */
export const getIsLoaded = createSelector (
  selectState,
  (state: StoreState): boolean => state?.loaded
);

/**
 * Returns a value that indicates if there was any error loading data
 */
export const getIsErrorLoading = createSelector (
  selectState,
  (state: StoreState): boolean => state?.errorLoading
);

/**
 * Returns the error information produced when an error has occurred
 */
export const getErrorData = createSelector (
  selectState,
  (state: StoreState): ErrorDialogData => ({
    errorCode: state?.errorCode,
    errorMessage: state?.errorMessage
  })
);

/**
 * Returns a value that indicates if the initial data is ready to use
 */
export const getInitialDataIsReady = createSelector (
  selectState,
  (state: StoreState): boolean => state?.initialDataReady
);

/**
 * Returns the list of rovers codes
 */
export const getCodesList = createSelector (
  selectState,
  (state: StoreState): string[] => state?.roverCodesList
);

/**
 * Returns a map with information about the panels, if there are expanded or not
 */
export const getExpandedPanelStatus = createSelector (
  selectState,
  getCodesList,
  (state: StoreState, list: string[]): Map<string, boolean> => {
    const data = new Map();
    list?.forEach(item => data.set(item, state?.expandedPanel?.indexOf(item) > - 1));
    return data;
  }
);

/**
 * Returns a map with the loading status for the manifest of each rover panel
 */
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

/**
 * Returns the error information loading the manifest for each rover panel
 */
export const getErrorLoadingManifestData = createSelector (
  selectState,
  (state: StoreState): Map<string, ErrorDialogData> => {
    const data = new Map();
    state?.roversList?.forEach(rover => {
      data.set(rover.code, {
        errorCode: rover.errorCode,
        errorMessage: rover.errorMessage
      });
    });
    return data;
  }
);

/**
 * Returns the index of the selected tab for each rover panel
 */
export const getSelectedIndex = createSelector (
  selectState,
  (state: StoreState): Map<string, number> => createValueMap(state, ROVER_CONSTANTS.ROVER_FIELDS.SELECTED_INDEX)
);

/**
 * Returns the indicator if is loading manifest for each rover panel
 */
export const getIsLoadingManifest = createSelector (
  selectState,
  (state: StoreState): Map<string, boolean> => createValueMap(state, ROVER_CONSTANTS.ROVER_FIELDS.LOADING_MANIFEST)
);

/**
 * Returns the indicator if manifest is loaded for each rover panel
 */
export const getIsLoadedManifest = createSelector (
  selectState,
  (state: StoreState): Map<string, boolean> => createValueMap(state, ROVER_CONSTANTS.ROVER_FIELDS.LOADED_MANIFEST)
);

/**
 * Returns the indicator if an error has occurred loading the manifest for each rover panel
 */
export const getIsErrorLoadingManifest = createSelector (
  selectState,
  (state: StoreState): Map<string, boolean> => createValueMap(state, ROVER_CONSTANTS.ROVER_FIELDS.ERROR_LOADING_MANIFEST)
);

/**
 * Returns the indicator if there are manifest for each rover panel
 */
export const getHasManifest = createSelector (
  selectState,
  (state: StoreState): Map<string, boolean> =>  createValueMap(state, ROVER_CONSTANTS.ROVER_FIELDS.HAVE_MANIFEST)
);

/**
 * Returns the indicator that neither panel is loading their manifest
 */
export const getNoManifestLoading = createSelector (
  selectState,
  (state: StoreState): boolean => state?.roversList?.every(item => !item.loadingManifest)
);

/**
 * Returns the launch date for each rover
 */
export const getLaunchDates = createSelector (
  selectState,
  (state: StoreState): Map<string, string> => createValueMap(state, ROVER_CONSTANTS.ROVER_FIELDS.LAUNCH_DATE)
);

/**
 * Returns the landing date for each rover
 */
export const getLandingDates = createSelector (
  selectState,
  (state: StoreState): Map<string, string> => createValueMap(state, ROVER_CONSTANTS.ROVER_FIELDS.LANDING_DATE)
);

/**
 * Returns the total days with photos for each rover
 */
export const getTotalPhotos = createSelector (
  selectState,
  (state: StoreState): Map<string, number> => createValueMap(state, ROVER_CONSTANTS.ROVER_FIELDS.TOTAL_PHOTOS)
);

/**
 * Returns the last martian sol with photo for each rover
 */
export const getMaxSol = createSelector (
  selectState,
  (state: StoreState): Map<string, number> => createValueMap(state, ROVER_CONSTANTS.ROVER_FIELDS.MAX_SOL)
);

/**
 * Returns the last earth date with photo for each rover
 */
export const getMaxDate = createSelector (
  selectState,
  (state: StoreState): Map<string, string> => createValueMap(state, ROVER_CONSTANTS.ROVER_FIELDS.MAX_DATE)
);

/**
 * Returns the status for each rover
 */
export const getStatus = createSelector (
  selectState,
  (state: StoreState): Map<string, ROVER_CONSTANTS.STATUS> => createValueMap(state, ROVER_CONSTANTS.ROVER_FIELDS.STATUS)
);

/**
 * Returns the cameras list for each rover
 */
export const getCamerasList = createSelector (
  selectState,
  (state: StoreState): Map<string, RoverCamera[]> => createValueMap(state, ROVER_CONSTANTS.ROVER_FIELDS.CAMERAS)
);

/**
 * Returns a paged list of photos information for a rover
 */
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

/**
 * Returns the current page for the list of rovers photo information for each rover
 */
export const getCurrentPhotosPage = createSelector (
  selectState,
  (state: StoreState): Map<string, number> => createValueMap(state, ROVER_CONSTANTS.ROVER_FIELDS.CURRENT_PHOTOS_PAGE)
);

/**
 * Returns the total pages for the list of rovers photo information for each rover
 */
export const getPhotosPages = createSelector (
  selectState,
  (state: StoreState): Map<string, number> => createValueMap(state, ROVER_CONSTANTS.ROVER_FIELDS.PHOTOS_PAGES)
)

/**
 * Returns a value that indicates if the "previous" button for the paginator can be enabled
 */
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

/**
 * Returns a value that indicates if the "next" button for the paginator can be enabled
 */
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

/**
 * Returns a paginated list of detail photos for a rover
 */
export const getDetailRoverPhotosList = createSelector (
  selectState,
  selectRouteParams,
  (state: StoreState, params: Params): RoverPhoto[] => {
    const notPagined = getNotPaginatedPhotoList(state, params);

    const roverPage = state?.roversList?.find(roverPageItem => roverPageItem.code === params[ROVER_CONSTANTS.DETAILS_PARAMS.CODE]);
    if (roverPage) {
      const init = (roverPage.roverPhotosCurrentPage! - 1) * ROVER_CONSTANTS.DETAIL_PHOTOS_PER_PAGE;
      const end = (init + ROVER_CONSTANTS.DETAIL_PHOTOS_PER_PAGE);
      return notPagined.slice(init, end);
    }
    return [];
  }
);

/**
 * Returns a value that indicates if the details information about the photos for a rover is loaded
 */
export const getHasDetailRoverPhotosList = createSelector (
  selectState,
  selectRouteParams,
  (state: StoreState, params: Params): boolean => {
    const rover = state?.roversList?.find(roverItem => roverItem.code === params[ROVER_CONSTANTS.DETAILS_PARAMS.CODE]);
    const camsRover = rover?.photos?.find(photosRover => photosRover.sol === +params[ROVER_CONSTANTS.DETAILS_PARAMS.SOL])?.cameras;
    const camsRoverPhotos = Array.from(new Set(rover?.roverPhotos?.
      filter(roverSol => roverSol.sol === +params[ROVER_CONSTANTS.DETAILS_PARAMS.SOL]).
      map(roverPhoto => roverPhoto.camera)));

    if (!(!!params[ROVER_CONSTANTS.DETAILS_PARAMS.CAMERA])) {
      return (camsRover?.length === camsRoverPhotos?.length);
    }

    return (camsRoverPhotos?.indexOf(params[ROVER_CONSTANTS.DETAILS_PARAMS.CAMERA]) > -1);
  }
);

/**
 * Returns the total pages of detail photos for a rover
 */
export const getRoverPhotoListTotalPages = createSelector (
  selectState,
  selectRouteParams,
  (state: StoreState, params: Params): number => {
    return Math.ceil(getNotPaginatedPhotoList(state, params)?.length / ROVER_CONSTANTS.DETAIL_PHOTOS_PER_PAGE);
  }
);

/**
 * Returns the current page in the list of detail photos for a rover
 */
export const getDetailsCurrentPage = createSelector (
  selectState,
  selectRouteParams,
  (state: StoreState, params: Params): number => {
    return state?.roversList?.find(item => item.code === params[ROVER_CONSTANTS.DETAILS_PARAMS.CODE])?.roverPhotosCurrentPage!;
  }
);

/**
 * Creates a map with an individual value for all the rovers
 * @param {StoreState} state state with all the data
 * @param {string} key key with the value for add to the map
 * @returns {Map<string, any>} a map with a total of keys as rovers there are, with the value searched for each rover
 */
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

/**
 * Creates a list with all the detail photos for a rover
 * @param {StoreState} state state with all the data
 * @param {Params} params route params for filter the data
 * @returns {RoverPhoto[]} a list of all detail photos for a rover
 */
function getNotPaginatedPhotoList(state: StoreState, params: Params ): RoverPhoto[] {
  const allPhotos: RoverPhoto[] = <RoverPhoto[]>state?.roversList?.
  filter((filterRover: Rover) => filterRover.code === params[ROVER_CONSTANTS.DETAILS_PARAMS.CODE]).
  map((photosRover: Rover) => photosRover.roverPhotos)?.flat();
  
  return allPhotos.filter((photoRover: RoverPhoto) => {
    if (!!params[ROVER_CONSTANTS.DETAILS_PARAMS.CAMERA]) {
      return (photoRover.sol === +params[ROVER_CONSTANTS.DETAILS_PARAMS.SOL] && photoRover.camera === params[ROVER_CONSTANTS.DETAILS_PARAMS.CAMERA]);
    }
    return (photoRover.sol === +params[ROVER_CONSTANTS.DETAILS_PARAMS.SOL]);
  });
}
