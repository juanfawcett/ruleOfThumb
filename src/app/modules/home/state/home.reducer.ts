import { createReducer, on, Action } from '@ngrx/store';

import * as homeActions from './home.actions';
import { HomeState } from './home.state';

export const homeFeatureName = 'home';

export const initialState: HomeState = {
  names: [],
  lastVotedId: null
};

const homeReducer = createReducer(
  initialState,
  on(homeActions.responseNames, (state, { names }) => {
    return {
      ...state,
      names,
    };
  }),
  on(homeActions.setLastVoted, (state, { lastVotedId }) => {
    return {
      ...state,
      lastVotedId,
    };
  }),
);

export function reducer(state: HomeState | undefined, action: Action) {
  return homeReducer(state, action);
}
