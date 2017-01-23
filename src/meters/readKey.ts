import {perfStart, perfEnd} from '../common/performance';
import {condition} from './conditionals';

export namespace ReadKeyMetric {
    export const name = 'obj.a';

    function readDirectKey(obj: any) {
        return obj.a + obj.b + obj.c + obj.d + obj.e + obj.f + obj.j + obj.k + obj.l + obj.m;
    }

    function loop(obj: any, obj2: any, N: number, k: number) {
        let ret = 0;
        for (let i = 0; i < N; i++) {
            ret = readDirectKey(k == -1 ? obj : obj2);
        }
        return ret;
    }

    export function run() {
        const obj = {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, j: 7, k: 8, l: 9, m: 0};
        const start = perfStart();
        loop(obj, obj, 1e5, 1);
        return perfEnd(start) - condition.dur / 10;
    }
}

export namespace ReadGenericDirectKeyMetric {
    export const name = 'obj.a generic';

    function readGenericDirectKey(obj: any) {
        return obj.a + obj.b + obj.c + obj.d + obj.e + obj.f + obj.j + obj.k + obj.l + obj.m;
    }

    export function run() {
        readGenericDirectKey({a: 1});
        readGenericDirectKey({b: 1});
        readGenericDirectKey({c: 1});
        readGenericDirectKey({d: 1});
        readGenericDirectKey({e: 1});
        const obj = {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, j: 7, k: 8, l: 9, m: 0};
        const start = perfStart();
        let ret;
        for (let i = 0; i < 1e5; i++) {
            ret = readGenericDirectKey(obj);
        }
        return perfEnd(start);
    }
}

export namespace ReadGenericDirectNonExistKeyMetric {
    export const name = 'obj.x(non exists) generic';

    function readGenericNonExistsDirectKey(obj: any) {
        return obj.a1;
    }

    export function run() {
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
        return perfEnd(start);
    }
}
export namespace ReadDirectKeyFromMutatedObjectMetric {
    export const name = 'obj.a mutated';

    function readMutatedDirectKey(obj: any) {
        return obj.a + obj.b + obj.c + obj.d + obj.e + obj.f + obj.j + obj.k + obj.l + obj.m;
    }

    const A: any = function A() {};

    export function run() {
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


        readMutatedDirectKey({a: 1});
        readMutatedDirectKey({b: 1});
        readMutatedDirectKey({c: 1});
        readMutatedDirectKey({d: 1});
        readMutatedDirectKey({e: 1});
        const start = perfStart();
        let ret;
        for (let i = 0; i < 1e5; i++) {
            ret = readMutatedDirectKey(obj);
        }
        return perfEnd(start);
    }
}

export namespace ReadDynamicKeyObjectMetric {

    export const name = 'obj[prop]';


    function readProp(obj: any, prop: string) {
        return obj[prop];
    }

    export function run() {


        const obj = {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, j: 7, k: 8, l: 9, m: 0};
        const start = perfStart();
        let ret = 0;
        for (let i = 0; i < 1e5; i++) {
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
        return perfEnd(start);
    }
}
export namespace ReadDynamicGenericKeyObjectMetric {
    export const name = 'obj[prop] generic';

    function readProp(obj: any, prop: string) {
        return obj[prop];
    }

    export function run() {
        readProp({a: 1}, 'a');
        readProp({b: 1}, 'b');
        readProp({c: 1}, 'c');
        readProp({d: 1}, 'd');
        readProp({e: 1}, 'e');
        readProp({f: 1}, 'f');
        const obj = {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, j: 7, k: 8, l: 9, m: 0};
        const start = perfStart();
        let ret = 0;
        for (let i = 0; i < 1e5; i++) {
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
        return perfEnd(start);
    }
}
export namespace ReadDynamicNonExistentKeyObjectMetric {
    export const name = 'obj[non exist prop]';

    function readProp(obj: any, prop: string) {
        return obj[prop];
    }

    export function run() {


        const obj = {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, j: 7, k: 8, l: 9, m: 0};
        const start = perfStart();
        let ret;
        for (let i = 0; i < 1e5; i++) {
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
        return perfEnd(start);
    }
}
export namespace ReadDynamicHashtableKeyObjectMetric {
    export const name = 'obj[prop] hashtable';

    function readProp(obj: any, prop: string) {
        return obj[prop];
    }

    export function run() {


        const obj = {x: 1, adgde: 1, sdfgsb: 2, erc: 3, trd: 4, eewr: 5, sdfgf: 6, jrte: 7, kret: 8, ldte: 9, mytr: 0};
        delete obj.x;
        const start = perfStart();
        let ret;
        for (let i = 0; i < 1e5; i++) {
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
        return perfEnd(start);
    }
}

export namespace ReadDynamicHashtableNonExistsKeyObjectMetric {
    export const name = 'obj[non exist prop] hashtable';

    function readProp(obj: any, prop: string) {
        return obj[prop];
    }

    export function run() {

        const obj = {x: 1, a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, j: 7, k: 8, l: 9, m: 0};
        delete obj.x;
        const start = perfStart();
        let ret;
        for (let i = 0; i < 1e5; i++) {
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
        return perfEnd(start);
    }
}
