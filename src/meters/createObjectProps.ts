import {Metric} from '../common/Metric';
import {perfStart, perfEnd} from '../common/performance';

export class WriteNamedKeyToEmptyObjectMetric implements Metric {
    name = '{}.key=1';
    timing = Infinity;

    run() {
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
        // const objectCreateTime = {};
        const start = perfStart();
        let ret = 0;
        for (let i = 0; i < 1e5; i++) {
            ret = setDirectKeys({}, i);
        }
        const dur = perfEnd(start);
        this.timing = Math.min(this.timing, dur);
        return ret;
    }
}

export class WriteNumVarKeyToEmptyObjectMetric implements Metric {
    name = '{}[9]=1';
    timing = Infinity;

    run() {
        function setNumVar(obj: any, key: number, val: number) {
            obj[key] = val;
            return obj;
        }
        // const objectCreateTime = {};
        const start = perfStart();
        let ret = 0;
        for (let i = 0; i < 1e5; i++) {
            const obj:any = {};
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
        const dur = perfEnd(start);
        this.timing = Math.min(this.timing, dur);
        return ret;
    }
}

export class WriteStrVarKeyToEmptyObjectMetric implements Metric {
    name = '{}["adgrde"]=1';
    timing = Infinity;

    run() {
        function setNumVar(obj: any, key: string, val: number) {
            obj[key] = val;
            return obj;
        }
        // const objectCreateTime = {};
        const start = perfStart();
        let ret = 0;
        for (let i = 0; i < 1e5; i++) {
            const obj:any = {};
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
        const dur = perfEnd(start);
        this.timing = Math.min(this.timing, dur);
        return ret;
    }
}

export class WriteNumStrVarKeyToEmptyObjectMetric implements Metric {
    name = '{}["adgrde" | 4]=1';
    timing = Infinity;

    run() {
        function setNumVar(obj: any, key: string | number, val: number) {
            obj[key] = val;
            return obj;
        }
        // const objectCreateTime = {};
        const start = perfStart();
        let ret = 0;
        for (let i = 0; i < 1e5; i++) {
            const obj:any = {};
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
        const dur = perfEnd(start);
        this.timing = Math.min(this.timing, dur);
        return ret;
    }
}

export class WriteNumStrVarKeyToEmptyConstructorMetric implements Metric {
    name = 'new A()["adgrde" | 4]=1';
    timing = Infinity;

    run() {
        const A:any = function A() {}
        function setNumVar(obj: any, key: string | number, val: number) {
            obj[key] = val;
            return obj;
        }
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
        const dur = perfEnd(start);
        this.timing = Math.min(this.timing, dur);
        return ret;
    }
}

export class WriteNumStrVarKeyToEmptyHashTableMetric implements Metric {
    name = '{}["adgrde" | 4]=1 hashtable';
    timing = Infinity;

    run() {
        function setNumVar(obj: any, key: string | number, val: number) {
            obj[key] = val;
            return obj;
        }

        const startHashTableCreate = perfStart();
        for (let i = 0; i < 1000; i++) {
            const obj:any = {x:1};
            delete obj.x;
        }
        const durHashTableCreate = perfEnd(startHashTableCreate) * 1000;

        const start = perfStart();
        let ret = 0;
        for (let i = 0; i < 1e5; i++) {
            const obj:any = {x:1};
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
        const dur = perfEnd(start) - durHashTableCreate / 10;
        this.timing = Math.min(this.timing, dur);
        return ret;
    }
}

