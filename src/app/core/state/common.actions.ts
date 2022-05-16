import { createAction, props } from '@ngrx/store';
import { Language, Name, Source, Theme, VoteType } from '../interfaces/common.interfaces';

export const setTheme = createAction(
  '[Common] Set Theme',
  props<{ theme: Theme }>(),
);

export const setLanguage = createAction(
  '[Common] Set Language',
  props<{ language: Language }>(),
);

export const vote = createAction(
  '[Common] Vote',
  props<{ voteType: VoteType, ruling: Name, source: Source }>(),
);