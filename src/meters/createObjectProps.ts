import {perfStart, perfEnd} from '../common/performance';

export namespace WriteNamedKeyToEmptyObjectMetric {
    export const name = '{}.key=1';

    function setDirectKeys(obj: any, i: number) {
        obj.k1 = i;
        obj.k2 = i;
        obj.k3 = i;
        obj.k4 = i;
        obj.k5 = i;
        obj.k6 = i;
        obj.k7 = i;
        obj.k8 = i;
        obj.k9 = i;
        obj.k0 = i;
        return obj;
    }

    export function run() {


        // const objectCreateTime = {};
        const start = perfStart();
        let ret = 0;
        for (let i = 0; i < 1e5; i++) {
            ret = setDirectKeys({}, i);
        }
        return perfEnd(start);
    }
}

export namespace WriteNumVarKeyToEmptyObjectMetric {
    export const name = '{}[9]=1';

    function setNumVar(obj: any, key: number, val: number) {
        obj[key] = val;
        return obj;
    }

    export function run() {


        // const objectCreateTime = {};
        const start = perfStart();
        let ret = 0;
        for (let i = 0; i < 1e5; i++) {
            const obj: any = {};
            setNumVar(obj, 1, i);
            setNumVar(obj, 2, i);
            setNumVar(obj, 3, i);
            setNumVar(obj, 4, i);
            setNumVar(obj, 5, i);
            setNumVar(obj, 6, i);
            setNumVar(obj, 7, i);
            setNumVar(obj, 8, i);
            setNumVar(obj, 9, i);
            setNumVar(obj, 0, i);
        }
        return perfEnd(start);
    }
}

export namespace WriteStrVarKeyToEmptyObjectMetric {
    export const name = '{}["adgrde"]=1';

    function setNumVar(obj: any, key: string, val: number) {
        obj[key] = val;
        return obj;
    }

    export function run() {

        // const objectCreateTime = {};
        const start = perfStart();
        let ret = 0;
        for (let i = 0; i < 1e5; i++) {
            const obj: any = {};
            setNumVar(obj, 'adasgf', i);
            setNumVar(obj, 'atedsf', i);
            setNumVar(obj, 'tty5re', i);
            setNumVar(obj, 'rhytfr', i);
            setNumVar(obj, 'rthete', i);
            setNumVar(obj, 'gur4rf', i);
            setNumVar(obj, 'yobsfg', i);
            setNumVar(obj, 'rtorky', i);
            setNumVar(obj, 'rejjvo', i);
            setNumVar(obj, 'ads4fk', i);
        }
        return perfEnd(start);
    }
}

export namespace WriteNumStrVarKeyToEmptyObjectMetric {
    export const name = '{}["adgrde" | 4]=1';

    function setNumVar(obj: any, key: string | number, val: number) {
        obj[key] = val;
        return obj;
    }

    export function run() {


        // const objectCreateTime = {};
        const start = perfStart();
        let ret = 0;
        for (let i = 0; i < 1e5; i++) {
            const obj: any = {};
            setNumVar(obj, 1, i);
            setNumVar(obj, 'atedsf', i);
            setNumVar(obj, 2, i);
            setNumVar(obj, 'rhytfr', i);
            setNumVar(obj, 3, i);
            setNumVar(obj, 'gur4rf', i);
            setNumVar(obj, 4, i);
            setNumVar(obj, 'rtorky', i);
            setNumVar(obj, 5, i);
            setNumVar(obj, 'ads4fk', i);
        }
        return perfEnd(start);
    }
}

export namespace WriteNumStrVarKeyToEmptyConstructorMetric {
    export const name = 'new A()["adgrde" | 4]=1';
    const A: any = function A() {}

    function setNumVar(obj: any, key: string | number, val: number) {
        obj[key] = val;
        return obj;
    }

    export function run() {



        // const objectCreateTime = {};
        const start = perfStart();
        let ret = 0;
        for (let i = 0; i < 1e5; i++) {
            ret = new A();
            setNumVar(ret, 1, i);
            setNumVar(ret, 'atedsf', i);
            setNumVar(ret, 2, i);
            setNumVar(ret, 'rhytfr', i);
            setNumVar(ret, 3, i);
            setNumVar(ret, 'gur4rf', i);
            setNumVar(ret, 4, i);
            setNumVar(ret, 'rtorky', i);
            setNumVar(ret, 5, i);
            setNumVar(ret, 'ads4fk', i);
        }
        return perfEnd(start);
    }
}

export namespace WriteNumStrVarKeyToEmptyHashTableMetric {
    export const name = '{}["adgrde" | 4]=1 hashtable';

    function setNumVar(obj: any, key: string | number, val: number) {
        obj[key] = val;
        return obj;
    }

    export function run() {


        const startHashTableCreate = perfStart();
        for (let i = 0; i < 1000; i++) {
            const obj: any = {x: 1};
            delete obj.x;
        }
        const durHashTableCreate = perfEnd(startHashTableCreate) * 1000;

        const start = perfStart();
        let ret = 0;
        for (let i = 0; i < 1e5; i++) {
            const obj: any = {x: 1};
            delete obj.x;
            setNumVar(obj, 1, i);
            setNumVar(obj, 'atedsf', i);
            setNumVar(obj, 2, i);
            setNumVar(obj, 'rhytfr', i);
            setNumVar(obj, 3, i);
            setNumVar(obj, 'gur4rf', i);
            setNumVar(obj, 4, i);
            setNumVar(obj, 'rtorky', i);
            setNumVar(obj, 5, i);
            setNumVar(obj, 'ads4fk', i);
        }
        return perfEnd(start) - durHashTableCreate / 10;
    }
}

