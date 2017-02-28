import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'modifyDate'
})
export class ModifyDatePipe implements PipeTransform {
  transform(value: number, args?: any): number {
    let date = "" + value;
    if (date.length == 13) {
      return Number(date)
    } else {
      return Date.now()
    }
  }
}

