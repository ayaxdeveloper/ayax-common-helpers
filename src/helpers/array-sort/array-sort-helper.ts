export const ArraySortHelper = {
    byOrder(a: any, b: any) {
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
    },
    byOrderDesc(a: any, b: any) {
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
    },
}