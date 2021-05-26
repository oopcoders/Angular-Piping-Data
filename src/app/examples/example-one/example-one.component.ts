import { Component, OnInit } from '@angular/core';
import { AlertService } from 'ngx-alerts';
import { ILetter } from '../resources/letters.interfaces';
import { LettersService } from '../resources/letters.service';

@Component({
  selector: 'app-example-one',
  templateUrl: './example-one.component.html',
  styleUrls: ['./example-one.component.scss'],
})
export class ExampleOneComponent implements OnInit {
  // Bad example

  //The letters State
  letters?: ILetter[];

  constructor(
    private letterService: LettersService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.getLetters();
  }

  //Do we need to subscribe here?
  //Angular has a pre-built async pipe
  getLetters() {
    this.letterService.getLetters().subscribe((letters) => {
      this.letters = this.transformToUppercase(letters);

      this.alertService.warning('Example 1: Retrieved Letters ');
      this.alertService.danger('API was called');
    });
  }

  //Are we sure we want to transform the letters state here?
  // Are we sure nobody else is using this state?
  limitLetters(num: number) {
    this.letters = this.letters?.slice(0, num);
  }

  //Dont do this. Use Angular pipes for this.
  transformToUppercase(letters: ILetter[]): ILetter[] {
    let newLetters: ILetter[] = [];
    let letter: string = '';
    for (let index = 0; index < letters.length; index++) {
      const element = letters[index];
      letter = element.letter.toUpperCase();
      newLetters.push({ letter: letter });
    }
    return newLetters;
  }
}
