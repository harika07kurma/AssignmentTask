import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'starsCount'
})
export class StarsCountPipe implements PipeTransform {

  transform(value: number): string {
    if (value > 1000) {
      value = value / 1000;
      return value + 'k';
    }
    return value.toString();
  }
}
