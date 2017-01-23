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
