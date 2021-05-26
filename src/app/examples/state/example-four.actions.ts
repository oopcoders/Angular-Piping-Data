import { createAction, props } from '@ngrx/store';
import { ILetter } from '../resources/letters.interfaces';

export const loadLetters = createAction(
  '[Example Four Component] Load Letters'
);

export const loadLettersSuccess = createAction(
  '[Example Four Effect] Load Letters Success',
  props<{ letters: ILetter[] }>()
);

export const loadLettersFailure = createAction(
  '[Example Four Effect] Load Letters Failure',
  props<{ error: any }>()
);
