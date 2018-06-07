import * as moment from 'moment';

export class DateUtil {
    private static readonly DAY = 'day';
    private static readonly DAYS = 'days';
    private static readonly YEARS = 'years';
    private static readonly dateFormat = 'YYYY-MM-DD';

    constructor(
    ) { }

    static getAge(birthDate: Date): number {
        return moment().diff(moment(birthDate).format(DateUtil.dateFormat), DateUtil.YEARS);
    }

    static getTurningAge(daysUntil: number, age: number): number {
        return daysUntil === 0 ? age : age + 1;
    }

    static getNextBirthday(birthDate: Date): Date {
        const birthday = moment(birthDate),
            today = moment(),
            thisYearBirthday = moment(birthday).year(today.year());

        let nextBirthday = moment(thisYearBirthday);

        if (moment(thisYearBirthday).isBefore(today, DateUtil.DAY)) {
            nextBirthday = moment(nextBirthday).add(1, DateUtil.YEARS);
        }

        return nextBirthday.toDate();
    }

    static getDaysUntil(date: Date): number {
        return moment(date).diff(moment().format(DateUtil.dateFormat), DateUtil.DAYS);
    }
}
