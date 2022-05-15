import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { mergeMap, Observable, switchMap } from 'rxjs';
import { CommonService } from '../services/common.service';
import * as CommonActions from './common.actions';
import * as HomeActions from '../../modules/home/state/home.actions';

@Injectable()
export class CommonEffects {
  constructor(
    private actions$: Actions,
    private service: CommonService,
  ) {}

  public vote$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(CommonActions.vote),
      switchMap(({voteType, ruling}) => {
        const data = this.service.vote(voteType, ruling);
        return data.pipe(mergeMap(() => [HomeActions.requestNames(), HomeActions.setLastVoted({lastVotedId: ruling.id})]),)
      }),
    ),
  );
}
