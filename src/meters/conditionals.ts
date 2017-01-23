import {perfStart, perfEnd} from '../common/performance';

export namespace If {
    export const name = 'if (k) v = 1';

    function loop(N: number, n0: number, n1: number, n2: number, n3: number, n4: number, n5: number, n6: number, n7: number, n8: number, n9: number) {
        let ret = 0;
        for (let i = 0; i < N; i++) {
            if (n0) ret = 1;
            if (n1) ret = 2;
            if (n2) ret = 3;
            if (n3) ret = 4;
            if (n4) ret = 5;
            if (n5) ret = 6;
            if (n6) ret = 7;
            if (n7) ret = 8;
            if (n8) ret = 9;
            if (n9) ret = 0;
        }
        return ret;
    }

    export function run() {
        const start = perfStart();
        loop(1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        loop(1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        loop(1e5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        return perfEnd(start);
    }
}
export namespace IfElse {
    export const name = 'if (k) v = 1 else v = 0';

    function loop(N: number, n0: number, n1: number, n2: number, n3: number, n4: number, n5: number, n6: number, n7: number, n8: number, n9: number) {
        let ret = 0;
        for (let i = 0; i < N; i++) {
            if (n0) ret = 1;
            else if (n1) ret = 2;
            else if (n2) ret = 3;
            else if (n3) ret = 4;
            else if (n4) ret = 5;
            else if (n5) ret = 6;
            else if (n6) ret = 7;
            else if (n7) ret = 8;
            else if (n8) ret = 9;
            else if (n9) ret = 0;
        }
        return ret;
    }

    export function run() {
        const start = perfStart();
        loop(1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        loop(1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        loop(1e5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        return perfEnd(start);
    }
}


export namespace Switch {
    export const name = 'switch 10 cases (per case)';

    function loop(N: number, sw: number) {
        let ret = 0;
        for (let i = 0; i < N; i++) {
            switch (sw) {
                case 0:
                    ret = 1;
                    break;
                case 1:
                    ret = 2;
                    break;
                case 2:
                    ret = 3;
                    break;
                case 3:
                    ret = 4;
                    break;
                case 4:
                    ret = 5;
                    break;
                case 5:
                    ret = 6;
                    break;
                case 6:
                    ret = 7;
                    break;
                case 7:
                    ret = 8;
                    break;
                case 8:
                    ret = 9;
                    break;
                case 9:
                    ret = 0;
                    break;
            }
        }
        return ret;
    }

    export function run() {
        const start = perfStart();
        loop(1e5, 100);
        return perfEnd(start);
    }
}

export namespace AndOperator {
    export const name = 'n1 && n2 && ... (per item)';

    function loop(N: number, n0: number, n1: number, n2: number, n3: number, n4: number, n5: number, n6: number, n7: number, n8: number, n9: number) {
        let ret;
        for (let i = 0; i < N; i++) {
            ret = (n0 && n1 && n2 && n3 && n4 && n5 && n6 && n7 && n8 && n9);
        }
        return ret;
    }

    export function run() {
        const start = perfStart();
        loop(1e5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        return perfEnd(start);
    }
}
export namespace OrOperator {
    export const name = 'n1 || n2 || ... (per item)';

    function loop(N: number, n0: number, n1: number, n2: number, n3: number, n4: number, n5: number, n6: number, n7: number, n8: number, n9: number) {
        let ret;
        for (let i = 0; i < N; i++) {
            ret = (n0 || n1 || n2 || n3 || n4 || n5 || n6 || n7 || n8 || n9);
        }
        return ret;
    }

    export function run() {
        const start = perfStart();
        loop(1e5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        return perfEnd(start);
    }
}

export namespace condition {
    export const name = 'k ? 1 : 0';

    function condLoop(N: number, n0: number, n1: number, n2: number, n3: number, n4: number, n5: number, n6: number, n7: number, n8: number, n9: number) {
        let ret = 0;
        for (let i = 0; i < N; i++) {
            ret = (n0 ? 1 : 2) + (n1 ? 3 : 4) + (n2 ? 5 : 6) + (n3 ? 7 : 8) + (n4 ? 9 : 10) + (n5 ? 11 : 12) + (n6 ? 13 : 14) + (n7 ? 15 : 16) + (n8 ? 17 : 18) + (n9 ? 19 : 20);
        }
        return ret;
    }

    export function run() {
        const start = perfStart();
        condLoop(1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        condLoop(1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        condLoop(1e5, 1, 0, 3, 0, 5, 0, 7, 0, 9, 0);
        return perfEnd(start);
    }

    export let dur = Infinity;
    dur = Math.min(dur, run());
    dur = Math.min(dur, run());
}

export namespace conditionLikeSwitch {
    export const name = 'k == 0 ? 1 : k == 1 ? 2 : ... (10) (per cond)';

    function condLoop(N: number, n: number) {
        let ret = 0;
        for (let i = 0; i < N; i++) {
            ret = n == 0 ? 1 : n == 1 ? 2 : n == 2 ? 3 : n == 3 ? 4 : n == 4 ? 5 : n == 5 ? 6 : n == 6 ? 7 : n == 7 ? 8 : n == 8 ? 9 : n == 9 ? 0 : 1;
        }
        return ret;
    }

    export function run() {
        const start = perfStart();
        condLoop(1e5, 100);
        return perfEnd(start);
    }

    export let dur = Infinity;
    dur = Math.min(dur, run());
    dur = Math.min(dur, run());
}
