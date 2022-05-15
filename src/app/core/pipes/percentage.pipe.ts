import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentage',
})
export class PercentagePipe implements PipeTransform {
  public transform(value: number): string {
    return `${value.toFixed(1)}%`;
  }
}
