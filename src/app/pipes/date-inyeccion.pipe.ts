import { Pipe, PipeTransform } from '@angular/core';
import {addDays, format} from 'date-fns';
@Pipe({
  name: 'dateInyeccion'
})
export class DateInyeccionPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log( value, format(addDays(value, 2), 'DD/MM/YYYY'));
    return format(addDays(value, 1), 'DD/MM/YYYY');
  }

}
