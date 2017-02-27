import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'modifyPopular'
})
export class ModifyPopularPipe implements PipeTransform {
  transform(value: boolean, args?: any): string {

    if (value == true) {
      return "Модель популярна"
    } else {
      return "Модель не популярна"
    }
  }
}
