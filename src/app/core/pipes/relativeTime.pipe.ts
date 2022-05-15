import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'relativeTime',
})
export class RelativetimePipe implements PipeTransform {
  public transform(value: string = new Date().toISOString()): string {
    const relative = moment(value).fromNow();
    return relative[0] === 'a' ? relative.replace("a", "1") : relative;
  }
}
