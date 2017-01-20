import {Metric} from '../common/Metric';
import {perfStart, perfEnd} from '../common/performance';

export class FunctionCallMetric implements Metric {
    name = 'function call';
    timing = Infinity;

    run() {
        function call(n: number) {
            //for disable inline, over 600bytes function body                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       //
            return n;
        }

        const start = perfStart();
        let ret = 0;
        for (let i = 0; i < 1e6; i++) {
            ret += call(i);
            ret -= call(ret);
            ret += call(ret);
            ret -= call(ret);
            ret += call(ret);
            ret -= call(ret);
            ret += call(ret);
            ret -= call(ret);
            ret += call(ret);
            ret -= call(ret);
        }
        const dur = perfEnd(start) / 10;
        this.timing = Math.min(this.timing, dur);
        return ret;
    }
}


export class InlineFunctionCallMetric implements Metric {
    name = 'inline function call';
    timing = Infinity;

    run() {
        function call(n: number) {
            return n;
        }

        let ret = 0;
        const start = perfStart();
        for (let i = 0; i < 1e6; i++) {
            ret += call(i);
            ret -= call(ret);
            ret += call(ret);
            ret -= call(ret);
            ret += call(ret);
            ret -= call(ret);
            ret += call(ret);
            ret -= call(ret);
            ret += call(ret);
            ret -= call(ret);
        }
        const dur = perfEnd(start) / 10;
        this.timing = Math.min(this.timing, dur);
        return ret;
    }
}

export class NonOptimizedFunctionCallMetric implements Metric {
    name = 'non optimized function call';
    timing = Infinity;

    run() {
        //todo:
        function nonOptFnCall(n: any) {
            //for disable inline, over 600bytes function body                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       //
            arguments[0] = 1;
            return n;
        }

        let ret = 0;
        const start = perfStart();
        for (let i = 0; i < 1e6; i++) {
            ret += nonOptFnCall(i);
            ret -= nonOptFnCall(ret);
            ret += nonOptFnCall(ret);
            ret -= nonOptFnCall(ret);
            ret += nonOptFnCall(ret);
            ret -= nonOptFnCall(ret);
            ret += nonOptFnCall(ret);
            ret -= nonOptFnCall(ret);
            ret += nonOptFnCall(ret);
            ret -= nonOptFnCall(ret);
        }
        const dur = perfEnd(start) / 10;
        this.timing = Math.min(this.timing, dur);
        return ret;
    }
}


export class NativeCallMetric implements Metric {
    name = 'fn.call(obj, val)';
    timing = Infinity;

    run() {
        function ctxCall(n: number) {
            //for disable inline, over 600bytes function body                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       //
            return this.val + n;
        }

        let obj = {val: 1};
        let ret = 0;
        const start = perfStart();
        for (let i = 0; i < 1e6; i++) {
            ret += ctxCall.call(obj, i);
            ret -= ctxCall.call(obj, ret);
            ret += ctxCall.call(obj, ret);
            ret -= ctxCall.call(obj, ret);
            ret += ctxCall.call(obj, ret);
            ret -= ctxCall.call(obj, ret);
            ret += ctxCall.call(obj, ret);
            ret -= ctxCall.call(obj, ret);
            ret += ctxCall.call(obj, ret);
            ret -= ctxCall.call(obj, ret);
        }
        const dur = perfEnd(start) / 10;
        this.timing = Math.min(this.timing, dur);
        return ret;
    }
}

export class NativeApplyMetric implements Metric {
    name = 'fn.apply(obj, args)';
    timing = Infinity;

    run() {
        function applyCall(n: number) {
            //for disable inline, over 600bytes function body                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       //
            return this.val + n;
        }

        let obj = {val: 1};
        let ret = 0;
        const args = [45];
        const start = perfStart();
        for (let i = 0; i < 1e6; i++) {
            ret += applyCall.apply(obj, args);
            ret -= applyCall.apply(obj, args);
            ret += applyCall.apply(obj, args);
            ret -= applyCall.apply(obj, args);
            ret += applyCall.apply(obj, args);
            ret -= applyCall.apply(obj, args);
            ret += applyCall.apply(obj, args);
            ret -= applyCall.apply(obj, args);
            ret += applyCall.apply(obj, args);
            ret -= applyCall.apply(obj, args);
        }
        const dur = perfEnd(start) / 10;
        this.timing = Math.min(this.timing, dur);
        return ret;
    }
}

