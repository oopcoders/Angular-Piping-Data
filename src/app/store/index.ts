import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromExampleFour from '../examples/state/example-four.reducer';


export interface AppState {

  [fromExampleFour.exampleFourFeatureKey]: fromExampleFour.State;
}

export const reducers: ActionReducerMap<AppState> = {

  [fromExampleFour.exampleFourFeatureKey]: fromExampleFour.reducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
