import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateDiff'
})
export class DateDiffPipe implements PipeTransform {

  transform(value: string): number {
    const pushedDate: Date = new Date(value);
    const difference =  Math.abs(pushedDate.getTime() - new Date().getTime());
    return  Math.ceil(difference / (1000 * 3600 * 24)); 
  }

}
