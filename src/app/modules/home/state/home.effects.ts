import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { switchMap, mergeMap } from 'rxjs/operators';
import * as HomeActions from './home.actions';
import { HomeService } from '../services/home.service';

@Injectable()
export class HomeEffects {
  constructor(
    private actions$: Actions,
    private service: HomeService,
  ) {}

  public fetchNames$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(HomeActions.requestNames),
      switchMap(() => this.service.fetchNames()),
      mergeMap((names) => [HomeActions.responseNames({ names })]),
    ),
  );
}
