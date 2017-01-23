import {perfStart, perfEnd} from '../common/performance';

export namespace CreateEmptyArrayMetric {
    export const name = 'empty array';

    export function run() {
        const start = perfStart();
        let ret;
        for (let i = 0; i < 1e6; i++) {
            ret = [];
        }
        return perfEnd(start);
    }
}

export namespace Create10NumberArrayMetric {
    export const name = '[0-9] const number';

    export function run() {
        const start = perfStart();
        let ret;
        for (let i = 0; i < 1e6; i++) {
            ret = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        }
        return perfEnd(start);
    }
}

export namespace Create10NumberVarArrayMetric {
    export const name = '[0-9] var number';

    function createArr(n0: number, n1: number, n2: number, n3: number, n4: number, n5: number, n6: number, n7: number, n8: number, n9: number) {
        return [n0, n1, n2, n3, n4, n5, n6, n7, n8, n9];
    }

    export function run() {
        const start = perfStart();
        let ret;
        for (let i = 0; i < 1e6; i++) {
            ret = createArr(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);
        }
        return perfEnd(start);
    }
}


export namespace Create8MixedArrayMetric {
    export const name = '[0-8] mixed';

    export function run() {
        const obj = {};
        const dt = new Date();
        const subArr = [1, 2, 3];
        const start = perfStart();
        let ret;
        for (let i = 0; i < 1e6; i++) {
            ret = [1, true, '3', Infinity, 5.4, obj, subArr, null];
        }
        return perfEnd(start);
    }
}

export namespace Create10MixedArrayMetric {
    export const name = '[0-9] mixed';

    export function run() {
        const obj = {};
        const dt = new Date();
        const subArr = [1, 2, 3];
        const start = perfStart();
        let ret;
        for (let i = 0; i < 1e6; i++) {
            ret = [1, true, '3', Infinity, 5.4, obj, subArr, null, null, dt];
        }
        return perfEnd(start);
    }
}

export namespace Create10MixedGrownArrayMetric {
    export const name = '[] grow 0->9, mixed';

    export function run() {
        const obj = {};
        const dt = new Date();
        const subArr = [1, 2, 3];
        const start = perfStart();
        let ret;
        for (let i = 0; i < 1e6; i++) {
            const arr = [];
            arr[0] = 1;
            arr[1] = true;
            arr[2] = '3';
            arr[3] = Infinity;
            arr[4] = 5.4;
            arr[5] = obj;
            arr[6] = subArr;
            arr[7] = null;
            arr[8] = void 0;
            arr[9] = dt;
            ret = arr;
        }
        return perfEnd(start);
    }
}


export namespace Create10MixedPrimitivesArrayMetric {
    export const name = '[0-9] const primitives(bool, number, string, null, not undefined)';

    export function run() {
        const start = perfStart();
        let ret;
        for (let i = 0; i < 1e6; i++) {
            ret = [1, true, '3', 5, 5.4, true, false, 54595656, '54drfds', 'rsgsfdg'];
        }
        return perfEnd(start);
    }
}

export namespace Create10NumberUndefinedObjArrayMetric {
    export const name = '[0-9] const number + undefined';

    export function run() {
        const start = perfStart();
        let ret;
        for (let i = 0; i < 1e6; i++) {
            ret = [1, 2, 3, 4, undefined, 6, 7, 8, 9, 0];
        }
        return perfEnd(start);
    }
}

export namespace Create10MixedGrownOnlyObjArrayMetric {
    export const name = '[0-9] primitives + set 5 vars, mixed';

    export function run() {
        const obj = {};
        const dt = new Date();
        const subArr = [1, 2, 3];
        const start = perfStart();
        let ret;
        for (let i = 0; i < 1e6; i++) {
            const arr: any[] = [1, true, '3', null, 5.4, null, null, null, null, null];
            arr[3] = Infinity;
            arr[5] = obj;
            arr[6] = subArr;
            arr[8] = void 0;
            arr[9] = dt;
            ret = arr;
        }
        return perfEnd(start);
    }
}

export namespace Create10EmptyNewArrayMetric {
    export const name = 'new Array(10), empty';

    export function run() {
        const start = perfStart();
        let ret;
        for (let i = 0; i < 1e6; i++) {
            ret = new Array(10);
        }
        return perfEnd(start);
    }
}

export namespace Create10MixedNewArrayMetric {
    export const name = 'new Array(10), mixed';

    export function run() {
        const obj = {};
        const dt = new Date();
        const subArr = [1, 2, 3];
        const start = perfStart();
        let ret;
        for (let i = 0; i < 1e6; i++) {
            const arr: any[] = new Array(10);
            arr[0] = 1;
            arr[1] = true;
            arr[2] = '3';
            arr[3] = Infinity;
            arr[4] = 5.4;
            arr[5] = obj;
            arr[6] = subArr;
            arr[7] = null;
            arr[8] = void 0;
            arr[9] = dt;
            ret = arr;
        }
        return perfEnd(start);
    }
}

export namespace Create10Uint8Metric {
    export const name = 'new Uint8Array(10), empty';

    export function run() {
        const start = perfStart();
        let ret;
        for (let i = 0; i < 1e6; i++) {
            ret = new Uint8Array(10);
        }
        return perfEnd(start);
    }
}


export namespace Create10Uint32Metric {
    export const name = 'new Uint32Array(10), empty';

    export function run() {
        const start = perfStart();
        let ret;
        for (let i = 0; i < 1e6; i++) {
            ret = new Uint32Array(10);
        }
        return perfEnd(start);
    }
}



