import {perfStart, perfEnd} from '../common/performance';

export namespace PlainObject0CreateMetric {
    export const name = 'object{}';

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
    export const name = 'object{a,b,c,d,e}';

    export function run() {
        const start = perfStart();
        let ret;
        for (let i = 0; i < 1e6; i++) {
            ret = {a: i, b: i + 1, c: i + 2, d: i + 3, e: i + 4};
        }
        return perfEnd(start);
    }
}

export namespace PlainObject10CreateMetric {
    export const name = 'object{a,b,c,d,e,f,g,h,k,l}';

    export function run() {
        const start = perfStart();
        let ret;
        for (let i = 0; i < 1e6; i++) {
            ret = {a: i, b: i + 1, c: i + 2, d: i + 3, e: i + 4, f: i + 5, g: i + 6, h: i + 7, k: i + 8, l: i + 9};
        }
        return perfEnd(start);
    }
}


export namespace ConstructorObjectCreateMetric {
    export const name = 'new A(){a,b,c,d,e}';

    const A:any = function A(this: any, a: number, b: number, c: number, d: number, e: number) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.e = e;
    };

    export function run() {

        const start = perfStart();
        let ret;
        for (let i = 0; i < 1e6; i++) {
            ret = new (A as any)(i, i + 1, i + 2, i + 3, i + 4);
        }
        return perfEnd(start);
    }
}

export namespace ConstructorObject10CreateMetric {
    export const name = 'new A(){a,b,c,d,e,f,g,h,k,l}';

    const A = function A(this: any, a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, k: number, l: number) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.e = e;
        this.f = f;
        this.g = g;
        this.h = h;
        this.k = k;
        this.l = l;
    }

    export function run() {

        const start = perfStart();
        let ret;
        for (let i = 0; i < 1e6; i++) {
            ret = new (A as any)(i, i + 1, i + 2, i + 3, i + 4, i + 5, i + 6, i + 7, i + 8, i + 9);
        }
        return perfEnd(start);
    }
}


