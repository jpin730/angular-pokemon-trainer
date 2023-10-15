import { Pipe, PipeTransform } from '@angular/core';
import { DateTime } from 'luxon';
import { getAge } from 'src/app/core/helpers/get-age';

@Pipe({
  name: 'age',
})
export class AgePipe implements PipeTransform {
  transform(value: string | DateTime): string {
    return getAge(value).toString();
  }
}
