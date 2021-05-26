import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ILetter } from './letters.interfaces';
import { LETTERS } from './mock-letters';

@Injectable({
  providedIn: 'root',
})
export class LettersService {
  //Letters State - example 3
  private lettersState = new BehaviorSubject<ILetter[]>([]);
  letters$ = this.lettersState.asObservable();

  constructor() {}
  //Example 1-2
  getLetters(): Observable<ILetter[]> {
    return of(LETTERS);
  }

  //Example 3
  updatelettersState(letters: ILetter[]) {
    this.lettersState.next(letters);
  }
}
