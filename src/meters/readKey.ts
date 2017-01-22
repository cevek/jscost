import {Metric} from '../common/Metric';
import {perfStart, perfEnd} from '../common/performance';

export class ReadKeyMetric implements Metric {
    name = 'obj.a';
    timing = Infinity;

    run() {
        function readDirectKey(obj: any) {
            return obj.a + obj.b + obj.c + obj.d + obj.e +obj.f + obj.j + obj.k +obj.l + obj.m;
        }
        const obj = {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, j: 7, k: 8, l: 9, m: 0};
        const start = perfStart();
        let ret = 0;
        for (let i = 0; i < 1e6; i++) {
            ret = readDirectKey(obj);
        }
        const dur = perfEnd(start) / 10;
        this.timing = Math.min(this.timing, dur);
        return ret;
    }
}

export class ReadGenericDirectKeyMetric implements Metric {
    name = 'obj.a generic';
    timing = Infinity;

    run() {
        function readGenericDirectKey(obj: any) {
            return obj.a + obj.b + obj.c + obj.d + obj.e +obj.f + obj.j + obj.k +obj.l + obj.m;
        }
        readGenericDirectKey({a: 1});
        readGenericDirectKey({b: 1});
        readGenericDirectKey({c: 1});
        readGenericDirectKey({d: 1});
        readGenericDirectKey({e: 1});
        const obj = {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, j: 7, k: 8, l: 9, m: 0};
        const start = perfStart();
        let ret;
        for (let i = 0; i < 1e6; i++) {
            ret = readGenericDirectKey(obj);
        }
        const dur = perfEnd(start) / 10;
        this.timing = Math.min(this.timing, dur);
        return ret;
    }
}


export class ReadGenericDirectNonExistKeyMetric implements Metric {
    name = 'obj.x(non exists) generic';
    timing = Infinity;

    run() {
        function readGenericNonExistsDirectKey(obj: any) {
            return obj.a1;
        }
        readGenericNonExistsDirectKey({a: 1});
        readGenericNonExistsDirectKey({b: 1});
        readGenericNonExistsDirectKey({c: 1});
        readGenericNonExistsDirectKey({d: 1});
        readGenericNonExistsDirectKey({e: 1});
        const obj = {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, j: 7, k: 8, l: 9, m: 0};
        const start = perfStart();
        let ret;
        for (let i = 0; i < 1e6; i++) {
            ret = readGenericNonExistsDirectKey(obj);
        }
        const dur = perfEnd(start);
        this.timing = Math.min(this.timing, dur);
        return ret;
    }
}

export class ReadDirectKeyFromMutatedObjectMetric implements Metric {
    name = 'obj.a mutated';
    timing = Infinity;

    run() {
        const A:any = function A(){};
        const obj = new A();
        obj.a = 1;
        obj.b = 1;
        obj.c = 1;
        obj.d = 1;
        obj.e = 1;
        obj.f = 1;
        obj.j = 1;
        obj.k = 1;
        obj.l = 1;
        obj.m = 1;

        function readMutatedDirectKey(obj: any) {
            return obj.a + obj.b + obj.c + obj.d + obj.e +obj.f + obj.j + obj.k +obj.l + obj.m;
        }
        readMutatedDirectKey({a: 1});
        readMutatedDirectKey({b: 1});
        readMutatedDirectKey({c: 1});
        readMutatedDirectKey({d: 1});
        readMutatedDirectKey({e: 1});
        const start = perfStart();
        let ret;
        for (let i = 0; i < 1e6; i++) {
            ret = readMutatedDirectKey(obj);
        }
        const dur = perfEnd(start) / 10;
        this.timing = Math.min(this.timing, dur);
        return ret;
    }
}


export class ReadDynamicKeyObjectMetric implements Metric {
    name = 'obj[prop]';
    timing = Infinity;

    run() {
        function readProp(obj: any, prop: string) {
            return obj[prop];
        }
        const obj = {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, j: 7, k: 8, l: 9, m: 0};
        const start = perfStart();
        let ret = 0;
        for (let i = 0; i < 1e6; i++) {
            ret += readProp(obj, 'a');
            ret += readProp(obj, 'b');
            ret += readProp(obj, 'c');
            ret += readProp(obj, 'd');
            ret += readProp(obj, 'e');
            ret += readProp(obj, 'f');
            ret += readProp(obj, 'j');
            ret += readProp(obj, 'k');
            ret += readProp(obj, 'l');
            ret += readProp(obj, 'm');
        }
        const dur = perfEnd(start) / 10;
        this.timing = Math.min(this.timing, dur);
        return ret;
    }
}

export class ReadDynamicGenericKeyObjectMetric implements Metric {
    name = 'obj[prop] generic';
    timing = Infinity;

    run() {
        function readProp(obj: any, prop: string) {
            return obj[prop];
        }
        readProp({a: 1}, 'a');
        readProp({b: 1}, 'b');
        readProp({c: 1}, 'c');
        readProp({d: 1}, 'd');
        readProp({e: 1}, 'e');
        readProp({f: 1}, 'f');
        const obj = {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, j: 7, k: 8, l: 9, m: 0};
        const start = perfStart();
        let ret = 0;
        for (let i = 0; i < 1e6; i++) {
            ret += readProp(obj, 'a');
            ret += readProp(obj, 'b');
            ret += readProp(obj, 'c');
            ret += readProp(obj, 'd');
            ret += readProp(obj, 'e');
            ret += readProp(obj, 'f');
            ret += readProp(obj, 'j');
            ret += readProp(obj, 'k');
            ret += readProp(obj, 'l');
            ret += readProp(obj, 'm');
        }
        const dur = perfEnd(start) / 10;
        this.timing = Math.min(this.timing, dur);
        return ret;
    }
}

export class ReadDynamicNonExistentKeyObjectMetric implements Metric {
    name = 'obj[non exist prop]';
    timing = Infinity;

    run() {
        function readProp(obj: any, prop: string) {
            return obj[prop];
        }
        const obj = {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, j: 7, k: 8, l: 9, m: 0};
        const start = perfStart();
        let ret;
        for (let i = 0; i < 1e6; i++) {
            ret = readProp(obj, 'a1');
            ret = readProp(obj, 'b1');
            ret = readProp(obj, 'c1');
            ret = readProp(obj, 'd1');
            ret = readProp(obj, 'e1');
            ret = readProp(obj, 'f1');
            ret = readProp(obj, 'j1');
            ret = readProp(obj, 'k1');
            ret = readProp(obj, 'l1');
            ret = readProp(obj, 'm1');
        }
        const dur = perfEnd(start) / 10;
        this.timing = Math.min(this.timing, dur);
        return ret;
    }
}

export class ReadDynamicHashtableKeyObjectMetric implements Metric {
    name = 'obj[prop] hashtable';
    timing = Infinity;

    run() {
        function readProp(obj: any, prop: string) {
            return obj[prop];
        }
        const obj = {x: 1, adgde: 1, sdfgsb: 2, erc: 3, trd: 4, eewr: 5, sdfgf: 6, jrte: 7, kret: 8, ldte: 9, mytr: 0};
        delete obj.x;
        const start = perfStart();
        let ret;
        for (let i = 0; i < 1e6; i++) {
            ret = readProp(obj, 'adgde');
            ret = readProp(obj, 'sdfgsb');
            ret = readProp(obj, 'erc');
            ret = readProp(obj, 'trd');
            ret = readProp(obj, 'eewr');
            ret = readProp(obj, 'sdfgf');
            ret = readProp(obj, 'jrte');
            ret = readProp(obj, 'kret');
            ret = readProp(obj, 'ldte');
            ret = readProp(obj, 'mytr');
        }
        const dur = perfEnd(start) / 10;
        this.timing = Math.min(this.timing, dur);
        return ret;
    }
}
export class ReadDynamicHashtableNonExistsKeyObjectMetric implements Metric {
    name = 'obj[non exist prop] hashtable';
    timing = Infinity;

    run() {
        function readProp(obj: any, prop: string) {
            return obj[prop];
        }
        const obj = {x: 1, a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, j: 7, k: 8, l: 9, m: 0};
        delete obj.x;
        const start = perfStart();
        let ret;
        for (let i = 0; i < 1e6; i++) {
            ret = readProp(obj, 'a1');
            ret = readProp(obj, 'b1');
            ret = readProp(obj, 'c1');
            ret = readProp(obj, 'd1');
            ret = readProp(obj, 'e1');
            ret = readProp(obj, 'f1');
            ret = readProp(obj, 'j1');
            ret = readProp(obj, 'k1');
            ret = readProp(obj, 'l1');
            ret = readProp(obj, 'm1');
        }
        const dur = perfEnd(start) / 10;
        this.timing = Math.min(this.timing, dur);
        return ret;
    }
}
