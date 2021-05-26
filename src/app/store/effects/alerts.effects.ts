import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AlertService } from 'ngx-alerts';
import { tap } from 'rxjs/operators';
import {
  loadLetters,
  loadLettersSuccess,
} from 'src/app/examples/state/example-four.actions';

@Injectable()
export class AlertsEffects {
  checkingYourInformation$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loadLettersSuccess),
        tap(() => this.alertService.success('Example 4: Retrieved Letters '))
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private alertService: AlertService) {}
}
