import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'square'
})

export class SquarePipe implements PipeTransform {

  transform(value: number): number | null {
    return value ? value * value : null;
  }

}
