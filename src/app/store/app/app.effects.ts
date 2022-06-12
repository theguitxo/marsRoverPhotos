import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType, concatLatestFrom } from "@ngrx/effects";
import { map, switchMap, catchError, of, delay } from "rxjs";
import { ApiService } from '../../services/app.services';
import { ApiManifest, APIPhotoResponse } from "../../models/manifest";
import { ROUTER_NAVIGATED } from "@ngrx/router-store";
import { StoreState } from "./app.state";
import { Store } from "@ngrx/store";
import { selectRouteParams } from "../router/router.selectors";
import { RoverPhotosRequest } from "../../models/rovers";
import { ACTIONS, loadCamPhotos, loadRoverManifest } from "./app.actions";
import * as SELECTORS from './app.selectors';
import { DETAILS_PARAMS } from "../../models/constants";

@Injectable()
export class StoreEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly apiService: ApiService,
    private readonly store: Store<StoreState>
  ) {}

  routerNavigated$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ROUTER_NAVIGATED),
      switchMap(() => {
        return of({ type: ACTIONS.RESET_LOAD_STATUS })
      })
    ),
    { useEffectsErrorHandler: false }
  );

  loadRoverManifest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadRoverManifest),
      switchMap(action =>
        this.apiService.loadRoverManifest(action.rover).pipe(
          map((data: ApiManifest) => ({
            type: ACTIONS.LOAD_ROVER_MANIFEST_SUCCESS,
            data: data.photo_manifest,
            rover: action.rover
          })),
          catchError((e) => {
            const errorCode = e?.error?.error?.code ?? e?.name;
            const errorMessage = e?.error?.error?.message ?? e?.message;
            return of({
              type: ACTIONS.LOAD_ROVER_MANIFEST_ERROR,
              rover: action.rover,
              errorCode,
              errorMessage
            })
          })
        )
      )
    )
  );

  loadCamPhotos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCamPhotos),
      concatLatestFrom(() => [
        this.store.select(selectRouteParams),
        this.store.select(SELECTORS.getHasManifest),
        this.store.select(SELECTORS.getHasDetailsMinimumParams)
      ]),
      switchMap(([_action, params, hasManifest, hasMinimumParams]) => {
        let errorCode!: string;
        let errorMessage!: string;

        if (hasMinimumParams && !!hasManifest.get(params[DETAILS_PARAMS.CODE])) {
          const requestParams: RoverPhotosRequest = {
            sol: params[DETAILS_PARAMS.SOL],
            camera: params[DETAILS_PARAMS.CAMERA]
          }
          return this.apiService.loadRoverPhotos(params[DETAILS_PARAMS.CODE], requestParams).pipe(
            map((data: APIPhotoResponse) => ({
              type: ACTIONS.LOAD_CAM_PHOTOS_SUCCESS,
              data: data,
              rover: params[DETAILS_PARAMS.CODE],
              camera: params[DETAILS_PARAMS.CAMERA]
            })),
            catchError((e) => {
              errorCode = e?.error?.error?.code ?? e?.name;
              errorMessage = e?.error?.error?.message ?? e?.message;
              return of({
                type: ACTIONS.LOAD_CAM_PHOTOS_ERROR,
                errorCode,
                errorMessage
              })
            })
          );
        }

        errorCode = hasMinimumParams ? 'NO MANIFEST': 'NO ROUTE PARAMS';
        errorMessage = hasMinimumParams ? `No manifest loaded for ${params[DETAILS_PARAMS.CODE]}` : 'Missing needed params to load data';

        return of({
          type: ACTIONS.LOAD_CAM_PHOTOS_ERROR,
          errorCode,
          errorMessage
        }).pipe(delay(0));
      })
    )
  );
}
