import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'daysUntil'
})
export class DaysUntilPipe implements PipeTransform {
    transform(value: any, args?: any): any {
        switch (value) {
            case 0:
                return 'Happy birthday!';
            case 1:
                return 'tomorrow';
            default:
                return `${value} days left`;
        }
    }
}
