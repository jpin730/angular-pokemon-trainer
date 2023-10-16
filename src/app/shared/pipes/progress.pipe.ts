import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'progress',
})
export class ProgressPipe implements PipeTransform {
  transform(value: number, max: number, min = 0): number {
    return ((value - min) / (max - min)) * 100;
  }
}
