import {perfStart, perfEnd} from '../common/performance';


export namespace ObjectKeysMetric {
    export const name = 'object.keys({a,b,c,d,e})';

    export function run() {
        const obj = {ad: 1, b: 2, c: 3, d: true, e: '4'};
        const start = perfStart();
        let ret;
        for (let i = 0; i < 1e6 / 5; i++) {
            ret = Object.keys(obj);
        }
        return perfEnd(start);
    }
}


export namespace ObjectKeyValuesMetric {
    export const name = 'object.keys + values({a,b,c,d,e})';

    function keyValues(obj: any) {
        const ret = Object.keys(obj);
        const count = ret.length;
        for (let i = 0; i < count; i++) {
            ret[ret.length] = obj[ret[i]];
        }
        return ret;
    }

    export function run() {
        const obj = {a: 1, bg: 2, c: 3, d: true, e: '4'};


        const start = perfStart();
        let ret;
        for (let i = 0; i < 1e6 / 5; i++) {
            ret = keyValues(obj)
        }
        return perfEnd(start);
    }
}


export namespace ForInOnlyKeysMetric {
    export const name = 'for in only keys {a,b,c,d,e}';

    function forIn(obj: {}) {
        let ret;
        for (const key in obj) {
            ret = key;
        }
        return ret;
    }

    export function run() {
        const obj = {a: 1, bw: 2, c: 3, d: true, e: '4'};


        const start = perfStart();
        let ret;

        for (let i = 0; i < 1e6 / 5; i++) {
            ret = forIn(obj);
        }
        return perfEnd(start);
    }
}


/**
 * ================================================
 *    Generic
 * ================================================
 */

export namespace ForInOnlyKeysGenericMetric {
    export const name = 'for in generic only keys {a,b,c,d,e}';

    function forIn(obj: {}) {
        let ret;
        for (const key in obj) {
            ret = key;
        }
        return ret;
    }

    export function run() {
        const obj = {a: 1, b: 2, ch: 3, d: true, e: '4'};


        forIn({a: 1});
        forIn({b: 1});
        forIn({c: 1});
        forIn({s: 1});
        forIn({f: 1});

        const start = perfStart();
        let ret;

        for (let i = 0; i < 1e6 / 5; i++) {
            ret = forIn(obj);
        }
        return perfEnd(start);
    }
}

export namespace ForInGenericMetric {
    export const name = 'for in generic {a,b,c,d,e}';

    function forIn(obj: any) {
        let ret;
        for (const key in obj) {
            ret = obj[key];
        }
        return ret;
    }

    export function run() {
        const obj = {xa: 1, xb: 2, xec: 3, xd: true, xe: '4'};


        forIn({a: 1});
        forIn({b: 1});
        forIn({c: 1});
        forIn({s: 1});
        forIn({f: 1});

        const start = perfStart();
        let ret;

        for (let i = 0; i < 1e6 / 5; i++) {
            ret = forIn(obj);
        }
        return perfEnd(start);
    }
}


export namespace ForInGenericWithHashTableMetric {
    export const name = 'for in generic(with hashtables) {a,b,c,d,e}';

    function forIn(obj: any) {
        let ret;
        for (const key in obj) {
            ret = obj[key];
        }
        return ret;
    }

    export function run() {
        const obj = {xa: 1, xby: 2, xc: 3, xd: true, xe: '4'};


        const dd = {mm: 1, bb: 1};
        delete dd.mm;
        forIn(dd);
        forIn({a: 1});
        forIn({b: 1});
        forIn({c: 1});
        forIn({s: 1});
        forIn({f: 1});

        const start = perfStart();
        let ret;

        for (let i = 0; i < 1e6 / 5; i++) {
            ret = forIn(obj);
        }
        return perfEnd(start);
    }
}


export namespace ForInGenericPreoptimizedMetric {
    export const name = 'for in generic preoptimized {a,b,c,d,e}';

    function forIn(obj: any) {
        for (const key in obj)break;
        let ret;
        for (const key in obj) {
            ret = obj[key];
        }
        return ret;
    }

    export function run() {
        const obj = {xa: 1, xub: 2, xc: 3, xd: true, xe: '4'};

        forIn({a: 1});
        forIn({b: 1});
        forIn({c: 1});
        forIn({s: 1});
        forIn({f: 1});

        const start = perfStart();
        let ret;

        for (let i = 0; i < 1e6 / 5; i++) {
            ret = forIn(obj);
        }
        return perfEnd(start);
    }
}

export namespace ForInGenericWithHashTablePreoptimizedMetric {
    export const name = 'for in generic(with hashtables) preoptimized {a,b,c,d,e}';

    function forIn(obj: any) {
        for (const key in obj)break;
        let ret;
        for (const key in obj) {
            ret = obj[key];
        }
        return ret;
    }

    export function run() {
        const obj = {xa: 1, xb: 2, wxc: 3, xd: true, xe: '4'};


        const dd = {mm: 1, bb: 1};
        delete dd.mm;
        forIn(dd);
        forIn({a: 1});
        forIn({b: 1});
        forIn({c: 1});
        forIn({s: 1});
        forIn({f: 1});

        const start = perfStart();
        let ret;

        for (let i = 0; i < 1e6 / 5; i++) {
            ret = forIn(obj);
        }
        return perfEnd(start);
    }
}

/**
 * ================================================
 *    Hashtables
 * ================================================
 */


export namespace ObjectKeyValuesHashtableMetric {
    export const name = 'object.keys hashtable + values({a,b,c,d,e})';

    function keyValues(obj: any) {
        const ret = Object.keys(obj);
        const count = ret.length;
        for (let i = 0; i < count; i++) {
            ret[ret.length] = obj[ret[i]];
        }
        return ret;
    }

    export function run() {
        const obj = {asdf: 12, a: 1, yb: 2, c: 3, d: true, e: '4'};
        delete obj.asdf;


        const start = perfStart();
        let ret;
        for (let i = 0; i < 1e6 / 5; i++) {
            ret = keyValues(obj)
        }
        return perfEnd(start);
    }
}

export namespace ForInGenericHashTableMetric {
    export const name = 'for in hashtables generic {a,b,c,d,e}';

    function forIn(obj: any) {
        let ret;
        for (const key in obj) {
            ret = obj[key];
        }
        return ret;
    }

    export function run() {
        const obj = {mm: 34, xa: 1, xyub: 2, xc: 3, xd: true, xe: '4'};
        delete obj.mm;

        forIn({a: 1});
        forIn({b: 1});
        forIn({c: 1});
        forIn({s: 1});
        forIn({f: 1});

        const start = perfStart();
        let ret;

        for (let i = 0; i < 1e6 / 5; i++) {
            ret = forIn(obj);
        }
        return perfEnd(start);
    }
}


export namespace ForInOnlyKeysHashTableMetric {
    export const name = 'for in hashtables {a,b,c,d,e}';

    function forIn(obj: {}) {
        let ret;
        for (const key in obj) {
            ret = key;
        }
        return ret;
    }

    export function run() {
        const obj = {mm: 1, a: 1, b: 2, ci: 3, d: true, e: '4'};
        delete obj.mm;

        const start = perfStart();
        let ret;

        for (let i = 0; i < 1e6 / 5; i++) {
            ret = forIn(obj);
        }
        return perfEnd(start);
    }
}


export namespace ForInGenericHashTablePreoptimizeMetric {
    export const name = 'for in hashtables generic preoptimize {a,b,c,d,e}';

    function forIn(obj: any) {
        for (const key in obj)break;
        let ret;
        for (const key in obj) {
            ret = obj[key];
        }
        return ret;
    }

    export function run() {
        const obj = {mm: 1, xea: 1, xb: 2, xc: 3, xd: true, xe: '4'};
        delete obj.mm;

        forIn({a: 1});
        forIn({b: 1});
        forIn({c: 1});
        forIn({s: 1});
        forIn({f: 1});

        const start = perfStart();
        let ret;

        for (let i = 0; i < 1e6 / 5; i++) {
            ret = forIn(obj);
        }
        return perfEnd(start);
    }
}
