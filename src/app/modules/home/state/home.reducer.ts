import { createReducer, on, Action } from '@ngrx/store';
import { Display, Source } from '@src/app/core/interfaces/common.interfaces';

import * as homeActions from './home.actions';
import { HomeState } from './home.state';

export const homeFeatureName = 'home';

const initialDisplay: Display = localStorage.getItem('display') as Display || Display.list

export const initialState: HomeState = {
  names: [],
  lastVoted: {
    id: null,
    source: Source.list
  },
  display: initialDisplay
};

const homeReducer = createReducer(
  initialState,
  on(homeActions.responseNames, (state, { names }) => {
    return {
      ...state,
      names,
    };
  }),
  on(homeActions.setLastVoted, (state, { lastVotedId, source }) => {
    return {
      ...state,
      lastVoted: {
        id: lastVotedId,
        source
      },
    };
  }),
  on(homeActions.setDisplay, (state, { display }) => {
    return {
      ...state,
      display
    };
  }),
);

export function reducer(state: HomeState | undefined, action: Action) {
  return homeReducer(state, action);
}
