import { createAction, props } from '@ngrx/store';
import { Name, Source, Theme, VoteType } from '../interfaces/common.interfaces';

export const setTheme = createAction(
  '[Common] Set Theme',
  props<{ theme: Theme }>(),
);

export const vote = createAction(
  '[Home] Vote',
  props<{ voteType: VoteType, ruling: Name, source: Source }>(),
);