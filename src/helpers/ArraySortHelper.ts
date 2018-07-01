export class ArraySortHelper {
    static byOrder(a: any, b: any) {
        if(!a.order || !b.order) {
            return 0;
        }
        if (a.order > b.order) {
            return 1;
        }
        if (a.order < b.order) {
            return -1;
        }
        return 0;
    }
    static byOrderDesc(a: any, b: any) {
        if(!a.order || !b.order) {
            return 0;
        }
        if (a.order < b.order) {
            return 1;
        }
        if (a.order > b.order) {
            return -1;
        }
        return 0;
    }
}