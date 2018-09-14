export class ArraySortHelper {
    private _key: string[];
    constructor(key: string | string[]) {
        if (Array.isArray(key)) {
            this._key = key;
        } else {
            this._key = [key];
        }
    }

    static sortBy(key: string | string[]) {
        return new ArraySortHelper(key);
    }

    asc = (a: any, b: any) : number => {
        return this.Sort(a, b, true);
    }

    desc = (a: any, b: any) : number => {
        return this.Sort(a, b, false);
    }

    static byOrder(a: any, b: any) {
        return this.sortBy("order").asc(a, b);
    }
    
    static byOrderDesc(a: any, b: any) {
        return this.sortBy("order").desc(a, b);
    }

    private FormatValue(val: any): any {
        if (typeof val === "string") {
            return val.toLocaleLowerCase();
        }
        return val;
    }

    private SortByKey(a: any, b: any, key: string, asc?: boolean) : number {
        asc = asc ? asc : true;
        if (!a[key] || !b[key]) {
            return 0;
        }

        const aFormatted = this.FormatValue(a[key]);
        const bFormatted = this.FormatValue(b[key]);
        if (asc) {
            if (aFormatted > bFormatted) {
                return 1;
            }
            if (aFormatted < bFormatted) {
                return -1;
            }
        } else {
            if (aFormatted < bFormatted) {
                return 1;
            }
            if (aFormatted > bFormatted) {
                return -1;
            }
        }
        return 0;
    }

    private Sort(a: any, b: any, asc?: boolean) : number {
        let sort = 0;
        this._key.some(key => {
            const currentSort = this.SortByKey(a, b, key, asc);
            if (currentSort !== 0) {
                sort = currentSort;
                return true;
            } else {
                return false;
            }
        });
        return sort;
    }
}