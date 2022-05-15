import { createFeatureSelector, createSelector } from '@ngrx/store';

import { HomeState } from './home.state';
import { homeFeatureName } from './home.reducer';

export const homeRootSelector = createFeatureSelector<HomeState>(
  homeFeatureName,
);

export const namesSelector = createSelector(
  homeRootSelector,
  (data) => data?.names,
);

export const lastVotedSelector = createSelector(
  homeRootSelector,
  (data) => data?.lastVoted,
);