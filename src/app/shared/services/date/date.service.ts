import { Injectable } from '@angular/core';

import * as moment from 'moment';

import { SharedModule } from '../../shared.module';

@Injectable({
  providedIn: SharedModule
})
export class DateService {
    private static readonly DAY = 'day';
    private static readonly DAYS = 'days';
    private static readonly YEARS = 'years';
    private static readonly dateFormat = 'YYYY-MM-DD';

    constructor(
    ) { }

    convertTimestampToDate(timestamp: number): Date {
        return new Date(timestamp);
    }

    getAge(birthDate: Date): number {
        return moment().diff(moment(birthDate).format(DateService.dateFormat), DateService.YEARS);
    }

    getNextBirthday(birthDate: Date): Date {
        const birthday = moment(birthDate),
            today = moment(),
            thisYearBirthday = moment(birthday).year(today.year());

        let nextBirthday = moment(thisYearBirthday);

        if (moment(thisYearBirthday).isBefore(today, DateService.DAY)) {
            nextBirthday = moment(nextBirthday).add(1, DateService.YEARS);
        }

        return nextBirthday.toDate();
    }

    getDaysUntil(date: Date): number {
        return moment(date).diff(moment().format(DateService.dateFormat), DateService.DAYS);
    }
}
