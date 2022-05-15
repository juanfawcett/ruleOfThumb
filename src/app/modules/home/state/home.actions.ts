import { createAction, props } from '@ngrx/store';
import { Name } from '@core/interfaces/common.interfaces';

export const requestNames = createAction('[Home] Request Names');

export const responseNames = createAction(
  '[Home] Response Names',
  props<{ names: Name[] }>(),
);

export const setLastVoted = createAction(
  '[Home] Set Last Voted',
  props<{ lastVotedId: number | null }>(),
);