export class ArraySortHelper {
    private _key: string;
    constructor(key: string) {
        this._key = key;
    }

    static Sort(key: string) {
        return new ArraySortHelper(key);
    }

    public Asc(a: any, b: any) {
        if (!this._key) {
            return 0;
        }
        if (!a[this._key] || !b[this._key]) {
            return 0;
        }
        if (a[this._key] > b[this._key]) {
            return 1;
        }
        if (a[this._key] < b[this._key]) {
            return -1;
        }
        return 0;
    }

    public Desc(a: any, b: any) {
        if (!this._key) {
            return 0;
        }
        if (!a[this._key] || !b[this._key]) {
            return 0;
        }
        if (a[this._key] < b[this._key]) {
            return 1;
        }
        if (a[this._key] > b[this._key]) {
            return -1;
        }
        return 0;
    }

    static byOrder(a: any, b: any) {
        this.Sort("order").Asc(a, b);
    }
    
    static byOrderDesc(a: any, b: any) {
        this.Sort("order").Desc(a, b);
    }
}