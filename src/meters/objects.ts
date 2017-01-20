import {Metric} from '../common/Metric';
import {perfStart, perfEnd} from '../common/performance';

export class PlainObject5CreateMetric implements Metric {
    name = 'object{a,b,c,d,e}';
    timing = Infinity;

    run() {
        const start = perfStart();
        let ret;
        for (let i = 0; i < 1e6; i++) {
            ret = {a: i, b: i + 1, c: i + 2, d: i + 3, e: i + 4};
        }
        const dur = perfEnd(start);
        this.timing = Math.min(this.timing, dur);
        return ret;
    }
}

export class PlainObject10CreateMetric implements Metric {
    name = 'object{a,b,c,d,e,f,g,h,k,l}';
    timing = Infinity;

    run() {
        const start = perfStart();
        let ret;
        for (let i = 0; i < 1e6; i++) {
            ret = {a: i, b: i + 1, c: i + 2, d: i + 3, e: i + 4, f: i + 5, g: i + 6, h: i + 7, k: i + 8, l: i + 9};
        }
        const dur = perfEnd(start);
        this.timing = Math.min(this.timing, dur);
        return ret;
    }
}


export class ConstructorObjectCreateMetric implements Metric {
    name = 'new A(){a,b,c,d,e}';
    timing = Infinity;

    run() {
        function A(a: number, b: number, c: number, d: number, e: number) {
            this.a = a;
            this.b = b;
            this.c = c;
            this.d = d;
            this.e = e;
        }

        const start = perfStart();
        let ret;
        for (let i = 0; i < 1e6; i++) {
            ret = new (A as any)(i, i + 1, i + 2, i + 3, i + 4);
        }
        const dur = perfEnd(start);
        this.timing = Math.min(this.timing, dur);
        return ret;
    }
}

export class ConstructorObject10CreateMetric implements Metric {
    name = 'new A(){a,b,c,d,e,f,g,h,k,l}';
    timing = Infinity;

    run() {
        function A(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, k: number, l: number) {
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

        const start = perfStart();
        let ret;
        for (let i = 0; i < 1e6; i++) {
            ret = new (A as any)(i, i + 1, i + 2, i + 3, i + 4, i + 5, i + 6, i + 7, i + 8, i + 9);
        }
        const dur = perfEnd(start);
        this.timing = Math.min(this.timing, dur);
        return ret;
    }
}


