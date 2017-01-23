import {perfStart, perfEnd} from '../common/performance';

export namespace EmptyMetric {
    export const name = 'empty';

    export function run() {
        const start = perfStart();
        let ret = 0;
        for (let i = 0; i < 1e6; i++) {
            ret = i;
        }
        return perfEnd(start);
    }
}

export namespace ifs {
    export const name = 'k ? 1 : 0';

    function ifsLoop(N: number, n0: number, n1: number, n2: number, n3: number, n4: number, n5: number, n6: number, n7: number, n8: number, n9: number) {
        let ret = 0;
        for (let i = 0; i < N; i++) {
            ret += (n0 ? 1 : 0) + (n1 ? 1 : 0) + (n2 ? 1 : 0) + (n3 ? 1 : 0) + (n4 ? 1 : 0) + (n5 ? 1 : 0) + (n6 ? 1 : 0) + (n7 ? 1 : 0) + (n8 ? 1 : 0) + (n9 ? 1 : 0);
        }
        return ret;
    }

    export function run() {
        const start = perfStart();
        ifsLoop(1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        ifsLoop(1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        ifsLoop(1e5, 1, 0, 3, 0, 5, 0, 7, 0, 9, 0);
        return perfEnd(start);
    }

    export let dur = Infinity;
    dur = Math.min(dur, run());
    dur = Math.min(dur, run());
}
