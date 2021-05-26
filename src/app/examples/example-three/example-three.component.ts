import { Component, OnInit } from '@angular/core';
import { AlertService } from 'ngx-alerts';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ILetter } from '../resources/letters.interfaces';
import { LettersService } from '../resources/letters.service';

@Component({
  selector: 'app-example-three',
  templateUrl: './example-three.component.html',
  styleUrls: ['./example-three.component.scss'],
})
export class ExampleThreeComponent implements OnInit {
  // Example 3 (Like a pro)

  letters$?: Observable<ILetter[]>;
  letterLimit: number = 26;

  constructor(
    private letterService: LettersService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.letters$ = this.letterService.getLetters().pipe(
      tap(() => this.alertService.info('Example 3: Retrieved Letters ')),
      map((letters) => {
        this.letterService.updatelettersState(letters);
        return letters;
      })
    );
  }

  limitLetters(num: number) {
    this.letterLimit = num;
  }
}
