import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ILetter } from '../resources/letters.interfaces';
import * as fromExampleFour from './example-four.reducer';

export const selectExampleFourState =
  createFeatureSelector<fromExampleFour.State>(
    fromExampleFour.exampleFourFeatureKey
  );

export const selectLetters = createSelector(
  selectExampleFourState,
  (state: fromExampleFour.State) => state.letters
);

export const isLettersInStore = createSelector(
  selectLetters,
  (letters: ILetter[]): boolean => {
    return letters.length ? true : false;
  }
);
