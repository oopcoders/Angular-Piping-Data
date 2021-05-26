import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as ExampleFourActions from './example-four.actions';
import { LettersService } from '../resources/letters.service';

@Injectable()
export class ExampleFourEffects {
  loadExampleFours$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ExampleFourActions.loadLetters),
      concatMap(() =>
        this.lettersService.getLetters().pipe(
          map((letters) => ExampleFourActions.loadLettersSuccess({ letters })),
          catchError((error) =>
            of(ExampleFourActions.loadLettersFailure({ error }))
          )
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private lettersService: LettersService
  ) {}
}
