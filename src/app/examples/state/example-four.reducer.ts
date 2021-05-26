import { state } from '@angular/animations';
import { Action, createReducer, on } from '@ngrx/store';
import { ILetter } from '../resources/letters.interfaces';
import * as ExampleFourActions from './example-four.actions';

export const exampleFourFeatureKey = 'exampleFour';

export interface State {
  letters: ILetter[];
  error: any;
}

export const initialState: State = {
  letters: [],
  error: null,
};

export const reducer = createReducer(
  initialState,

  on(ExampleFourActions.loadLettersSuccess, (state, action) => {
    return {
      ...state,
      letters: action.letters,
    };
  }),
  on(ExampleFourActions.loadLettersFailure, (state, action) => {
    return {
      ...state,
      error: action.error,
    };
  })
);
