import { createReducer, Action, on } from '@ngrx/store';
import { Language, Theme } from '../interfaces/common.interfaces';
import * as commonActions from './common.actions';
import { CommonState } from './common.state';

export const commonFeatureName = 'common';

export const initialState: CommonState = {
  theme: Theme.light,
  language: Language.en
};

const commonReducer = createReducer(
  initialState,
  on(commonActions.setTheme, (state, { theme }) => {
    return {
      ...state,
      theme,
    };
  }),
  on(commonActions.setLanguage, (state, { language }) => {
    return {
      ...state,
      language,
    };
  }),
);

function reducer(state: CommonState | undefined, action: Action) {
  return commonReducer(state, action);
}

export const rootReducer = {
  common: reducer,
};
