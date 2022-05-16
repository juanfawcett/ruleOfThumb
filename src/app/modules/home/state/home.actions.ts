import { createAction, props } from '@ngrx/store';
import { Display, Name, Source } from '@core/interfaces/common.interfaces';

export const requestNames = createAction('[Home] Request Names');

export const responseNames = createAction(
  '[Home] Response Names',
  props<{ names: Name[] }>(),
);

export const setLastVoted = createAction(
  '[Home] Set Last Voted',
  props<{ lastVotedId: number | null, source: Source }>(),
);

export const setDisplay = createAction(
  '[Home] Set Display',
  props<{ display: Display }>(),
);