import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap, catchError, of } from "rxjs";
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
}
