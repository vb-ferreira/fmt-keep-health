import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toMeters',
  standalone: true
})
export class ToMetersPipe implements PipeTransform {

  transform(value: number | undefined): unknown {
    return value ? value/100 : 0;
  }
}
