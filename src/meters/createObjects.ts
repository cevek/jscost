import {perfStart, perfEnd} from '../common/performance';

interface Abc5<T> {
    a: T;
    b: T;
    c: T;
    d: T;
    e: T;
}
interface Abc10<T> {
    a: T;
    b: T;
    c: T;
    d: T;
    e: T;
    f: T;
    g: T;
    h: T;
    i: T;
    j: T;
}

export namespace PlainObject0CreateMetric {
    export const name = '{}';

    export function run() {
        const start = perfStart();
        let ret;
        for (let i = 0; i < 1e6; i++) {
            ret = {};
        }
        return perfEnd(start);
    }
}
export namespace PlainObject5CreateMetric {
    export const name = '{a,b,c,d,e}';

    export function run() {
        const start = perfStart();
        let ret: Abc5<number>;
        for (let i = 0; i < 1e6; i++) {
            ret = {a: i, b: i + 1, c: i + 2, d: i + 3, e: i + 4};
        }
        return perfEnd(start);
    }
}

export namespace PlainObject10CreateMetric {
    export const name = '{a,b,c,d,e,f,g,h,i,j}';

    export function run() {
        const start = perfStart();
        let ret: Abc10<number>;
        for (let i = 0; i < 1e6; i++) {
            ret = {a: i, b: i + 1, c: i + 2, d: i + 3, e: i + 4, f: i + 5, g: i + 6, h: i + 7, i: i + 8, j: i + 9};
        }
        return perfEnd(start);
    }
}


export namespace ConstructorObjectCreateMetric {
    export const name = 'new A(){a,b,c,d,e}';

    class A implements Abc5<number> {
        constructor(public a: number, public b: number, public c: number, public d: number, public e: number) {}
    }

    export function run() {
        const start = perfStart();
        let ret;
        for (let i = 0; i < 1e6; i++) {
            ret = new A(i, i + 1, i + 2, i + 3, i + 4);
        }
        return perfEnd(start);
    }
}

export namespace ConstructorObject10CreateMetric {
    export const name = 'new A(){a,b,c,d,e,f,g,h,k,l}';

    class A implements Abc10<number> {
        constructor(public a: number, public b: number, public c: number, public d: number, public e: number, public f: number, public g: number, public h: number, public i: number, public j: number) {}
    }

    export function run() {

        const start = perfStart();
        let ret;
        for (let i = 0; i < 1e6; i++) {
            ret = new A(i, i + 1, i + 2, i + 3, i + 4, i + 5, i + 6, i + 7, i + 8, i + 9);
        }
        return perfEnd(start);
    }
}


