import { createReducer, on, Action } from '@ngrx/store';
import { Source } from '@src/app/core/interfaces/common.interfaces';

import * as homeActions from './home.actions';
import { HomeState } from './home.state';

export const homeFeatureName = 'home';

export const initialState: HomeState = {
  names: [],
  lastVoted: {
    id: null,
    source: Source.list
  }
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
);

export function reducer(state: HomeState | undefined, action: Action) {
  return homeReducer(state, action);
}
