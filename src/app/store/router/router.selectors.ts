import { getSelectors } from '@ngrx/router-store';

/**
 * Selectors for get information like route params, query string, ...
 */
export const {
  selectCurrentRoute,
  selectFragment,
  selectQueryParam,
  selectQueryParams,
  selectRouteData,
  selectRouteParam,
  selectRouteParams,
  selectUrl
} = getSelectors();
