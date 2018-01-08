import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'unixTimeDate'
})
export class UnixTimeDatePipe implements PipeTransform {
  private datePipe: DatePipe = new DatePipe('en-US');

  transform(value: any, pattern?: any): any {
    return this.datePipe.transform(new Date(value * 1000), pattern);
  }

}
