import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { AppState } from 'src/app/store';
import { ILetter } from '../resources/letters.interfaces';
import { loadLetters } from '../state/example-four.actions';
import {
  isLettersInStore,
  selectLetters,
} from '../state/example-four.selectors';

@Component({
  selector: 'app-example-four',
  templateUrl: './example-four.component.html',
  styleUrls: ['./example-four.component.scss'],
})
export class ExampleFourComponent implements OnInit {
  // Example 4 (now you are showing off -- you're a beast)

  letters$?: Observable<ILetter[]>;
  letterLimit: number = 26;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.letters$ = this.store.pipe(
      select(isLettersInStore),
      mergeMap((isLettersInStore) => {
        if (!isLettersInStore) {
          this.store.dispatch(loadLetters());
        }
        return this.store.pipe(select(selectLetters));
      })
    );
  }

  limitLetters(num: number) {
    this.letterLimit = num;
  }
}
