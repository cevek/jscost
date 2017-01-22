import {perfEnd, perfStart} from '../common/performance';
import {ifs} from './common';


const ifsDur = ifs.dur;

export namespace ReadArrayDirectIndexMetric {
    export const name = 'arr[1]';

    function loop(arr: number[], N: number) {
        let ret = 0;
        for (let i = 0; i < N; i++) {
            ret += (arr[0] ? 1 : 0) + (arr[1] ? 1 : 0) + (arr[2] ? 1 : 0) + (arr[3] ? 1 : 0) + (arr[4] ? 1 : 0) + (arr[5] ? 1 : 0) + (arr[6] ? 1 : 0) + (arr[7] ? 1 : 0) + (arr[8] ? 1 : 0) + (arr[9] ? 1 : 0);
        }
        return ret;
    }

    export function run() {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const start = perfStart();
        loop(arr, 1e5);
        return perfEnd(start) - ifsDur;
    }
}

export namespace ReadArrayDirectIndexGenericMetric {
    export const name = 'arr[1] generic';

    function loop(arr: any[], N: number) {
        let ret = 0;
        for (let i = 0; i < N; i++) {
            ret += (arr[0] ? 1 : 0) + (arr[1] ? 1 : 0) + (arr[2] ? 1 : 0) + (arr[3] ? 1 : 0) + (arr[4] ? 1 : 0) + (arr[5] ? 1 : 0) + (arr[6] ? 1 : 0) + (arr[7] ? 1 : 0) + (arr[8] ? 1 : 0) + (arr[9] ? 1 : 0);
        }
        return ret;
    }

    export function run() {
        const obj = {a: 1, b: 1};
        const arr:any[] = [1, '234', 4, 5.5, false, null, [1, 2, []], obj, Infinity, 0, 1];
        const start = perfStart();
        loop(arr, 1e5);
        return perfEnd(start) - ifsDur;
    }
}

export namespace ReadGrownArrayDirectIndexMetric {
    export const name = 'arr[1] grown';

    function loop(arr: number[], N: number) {
        let ret = 0;
        for (let i = 0; i < N; i++) {
            ret += (arr[0] ? 1 : 0) + (arr[1] ? 1 : 0) + (arr[2] ? 1 : 0) + (arr[3] ? 1 : 0) + (arr[4] ? 1 : 0) + (arr[5] ? 1 : 0) + (arr[6] ? 1 : 0) + (arr[7] ? 1 : 0) + (arr[8] ? 1 : 0) + (arr[9] ? 1 : 0);
        }
        return ret;
    }

    export function run() {
        const arr = [];
        arr[0] = 1;
        arr[1] = 1;
        arr[2] = 1;
        arr[3] = 1;
        arr[4] = 1;
        arr[5] = 1;
        arr[6] = 1;
        arr[7] = 1;
        arr[8] = 1;
        arr[9] = 1;

        const start = perfStart();
        loop(arr, 1e5);
        return perfEnd(start) - ifsDur;
    }
}


export namespace ReadArrayDynamicIndexMetric {
    export const name = 'arr[i]';

    function loop(arr: number[], N: number, k: number) {
        let ret = 0;
        for (let i = 0; i < N; i++) {
            ret += arr[k] ? 1 : 0;
        }
        return ret;
    }

    export function run() {
        loop([1,2,3], 1, 1);
        loop([1,2,3], 1, 2);
        const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        const start = perfStart();
        loop(arr, 1e6, 5);
        return perfEnd(start) - ifsDur;
    }
}

export namespace ReadArrayDynamicIndexMixedValueMetric {
    export const name = 'arr[i] generic value';

    function loop(arr: any[], N: number, k: number) {
        let ret;
        for (let i = 0; i < N; i++) {
            ret = arr[k == -1 ? 0 : k];
        }
        return ret;
    }

    export function run() {
        const obj = {a: 1, b: 1};
        // loop([0], 1, 0);
        // loop([false], 1, 0);
        // loop([null], 1, 0);
        const arr:any[] = [1, '234', 4, 5.5, true, null, [1, 2, []], obj, Infinity, true, 1];
        const start = perfStart();
        loop(arr, 1e5, 0);
        loop(arr, 1e5, 1);
        loop(arr, 1e5, 2);
        loop(arr, 1e5, 3);
        loop(arr, 1e5, 4);
        loop(arr, 1e5, 5);
        loop(arr, 1e5, 6);
        loop(arr, 1e5, 7);
        loop(arr, 1e5, 8);
        loop(arr, 1e5, 9);
        return perfEnd(start) - ifsDur;
    }
}


export namespace ReadUint8ArrayDynamicIndexMetric {
    export const name = 'uint8[i]';

    function loop(arr: Uint8Array, N: number, k: number) {
        let ret = 0;
        for (let i = 0; i < N; i++) {
            ret += arr[k] ? 1 : 0;
        }
        return ret;
    }

    export function run() {
        const arr = new Uint8Array(10);
        arr[1] = 1;
        const start = perfStart();
        loop(arr, 1e6, 1);
        return perfEnd(start) - ifsDur;
    }
}

export namespace ReadUint16ArrayDynamicIndexMetric {
    export const name = 'uint16[i]';

    function loop(arr: Uint16Array, N: number, k: number) {
        let ret = 0;
        for (let i = 0; i < N; i++) {
            ret += arr[k] ? 1 : 0;
        }
        return ret;
    }

    export function run() {
        const arr = new Uint16Array(10);
        arr[1] = 1;
        const start = perfStart();
        loop(arr, 1e6, 1);
        return perfEnd(start) - ifsDur;
    }
}
