import {Metric} from '../common/Metric';
import {perfStart, perfEnd} from '../common/performance';

export class EmptyMetric implements Metric {
    name = 'empty';
    timing = Infinity;

    run() {
        const start = perfStart();
        let ret = 0;
        for (let i = 0; i < 1e6; i++) {
            ret = i;
        }
        const dur = perfEnd(start) / 10;
        this.timing = Math.min(this.timing, dur);
        return ret;
    }
}
