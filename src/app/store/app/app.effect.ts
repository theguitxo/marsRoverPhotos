import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { RouterNavigatedAction, ROUTER_NAVIGATED, ROUTER_NAVIGATION, ROUTER_REQUEST } from "@ngrx/router-store";
import { tap, map, switchMap, catchError, of } from "rxjs";
import { ACTIONS, loadRoverManifest } from "./app.actions";
import { ApiService } from '../../services/app.services';
import { ApiManifest } from "src/app/models/manifest";

@Injectable()
export class StoreEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly apiService: ApiService
  ) {}

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
          catchError((_e) => of({
            type: ACTIONS.LOAD_ROVER_MANIFEST_ERROR,
            rover: action.rover
          }))
        )
      )
    )
  );
}
