import { Component, OnInit } from '@angular/core';
import { AlertService } from 'ngx-alerts';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ILetter } from '../resources/letters.interfaces';
import { LettersService } from '../resources/letters.service';

@Component({
  selector: 'app-example-two',
  templateUrl: './example-two.component.html',
  styleUrls: ['./example-two.component.scss'],
})
export class ExampleTwoComponent implements OnInit {
  // Example 2 (Getting Better)

  letters$?: Observable<ILetter[]>;
  letterLimit: number = 26;

  constructor(
    private letterService: LettersService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.getLetters();
  }

  //Using the Angular pre built pipe  "async" to subcribe to letters
  getLetters() {
    this.letters$ = this.letterService.getLetters().pipe(
      tap(() => {
        this.alertService.info('Example 2: Retrieved Letters ');
      })
    );
  }

  limitLetters(num: number) {
    this.letterLimit = num;
  }
}
