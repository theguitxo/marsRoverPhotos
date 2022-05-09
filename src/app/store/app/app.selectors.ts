import { createFeatureSelector, createSelector, Store } from "@ngrx/store";
import { Rover } from "src/app/models/rovers";
import { StoreState } from "./app.state";

export const selectState = createFeatureSelector<StoreState>('store');

export const getInitialDataIsReady = createSelector(
  selectState,
  (state: StoreState): boolean => state?.initialDataReady
);

export const getRoversList = createSelector (
  selectState,
  (state: StoreState): Rover[] => state?.roversList
);

export const getExpandedPanel = createSelector (
  selectState,
  (state: StoreState): string  => state?.panelExpanded
);

export const getExpandedPanelInfo = createSelector (
  selectState,
  getExpandedPanel,
  (state: StoreState, expandedPanel: string): Rover => state?.roversList?.filter(item => item.id === expandedPanel)[0]
);

export const getPanelIsLoading = createSelector (
  getExpandedPanelInfo,
  (panel: Rover): boolean => panel?.loadingManifest
);

export const getPanelIsLoaded = createSelector (
  getExpandedPanelInfo,
  (panel: Rover): boolean => panel?.loadedManifest
);

export const getPanelErrorLoading = createSelector (
  getExpandedPanelInfo,
  (panel: Rover): boolean => panel?.errorLoadingManifest
);

export const getPanelHasManifest = createSelector (
  getExpandedPanelInfo,
  (panel: Rover): boolean => panel?.haveManifest
);

export const getLoadManifest = createSelector (
  getPanelHasManifest,
  getPanelIsLoading,
  getPanelIsLoaded,
  getPanelErrorLoading,
  (
    hasManifest: boolean, isLoading: boolean,
    isLoaded: boolean, errorLoading: boolean
  ) => (!hasManifest && !isLoading && !isLoaded && !errorLoading)
);

export const getLoadManifestInfo = createSelector (
  getLoadManifest,
  getExpandedPanel,
  (loadManifest: boolean, expandedPanel: string) => ({
    loadManifest, expandedPanel
  })
);
