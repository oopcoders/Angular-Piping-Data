import { Pipe, PipeTransform } from '@angular/core';
import { ILetter } from './letters.interfaces';

@Pipe({
  name: 'limitLetters',
})
export class LimitLettersPipe implements PipeTransform {
  transform(value: ILetter[], num: number): ILetter[] {
    return value.slice(0, num);
  }
}
