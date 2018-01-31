import * as moment from 'moment';
export class DateHelper {
    public static formatDate (date: any, format?: string) {
        if(!format) {
            format = "DD.MM.YYYY";
        }
        if (!date || !moment(date).isValid) {
          return null
        }
        let formatted = moment(date);
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
}