import * as moment from 'moment';
export class DateHelper {
    public static formatDate (date: any, format?: string) {
        if(!format) {
            format = "DD.MM.YYYY";
        }
        if (!date || !moment(date).isValid) {
          return null
        }
        return moment(date).format(format);
    };
    public static parseDate (date: any, format?: string) {
        if(!format) {
            format = "DD.MM.YYYY";
        }
        if (!date || !moment(date, format).isValid) {
            return null
        }
        return moment(date, format).toISOString();
    };

    public static ToString(date: Date, format?: string): string {
        if(!format) {
            format = "DD.MM.YYYY";
        }
        if (!date || !moment(date).isValid) {
            throw new Error(`Неверный формат даты ${JSON.stringify(date)}`)
        }
        let formatted = moment(date);
        return moment(date).format(format);
    };

    public static ToStringISO(date: Date, format?: string): string {
        if(!format) {
            format = "DD.MM.YYYY";
        }
        if (!date || !moment(date).isValid) {
            throw new Error(`Неверный формат даты ${JSON.stringify(date)}`)
        }
        return moment(date, format).toISOString();
    };

    public static ToDate(date: any, format?: string): Date {
        if(!format) {
            format = "DD.MM.YYYY";
        }
        if (!date || !moment(date, format).isValid) {
            throw new Error(`Неверный формат даты ${JSON.stringify(date)}`)
        }
        return moment(date, format).toDate();
    };
}