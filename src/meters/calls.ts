import {perfStart, perfEnd} from '../common/performance';

export namespace FunctionCallMetric {
    export const name = 'function call';

    function call(n: number) {
        //for disable inline, over 600bytes function body                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       //
        return n;
    }


    export function run() {

        const start = perfStart();
        let ret = 0;
        for (let i = 0; i < 1e5; i++) {
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
        return perfEnd(start);
    }
}


export namespace InlineFunctionCallMetric {
    export const name = 'inline function call';

    function call(n: number) {
        return n;
    }

    export function run() {


        let ret = 0;
        const start = perfStart();
        for (let i = 0; i < 1e5; i++) {
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
        return perfEnd(start);
    }
}

export namespace NonOptimizedFunctionCallMetric {
    export const name = 'non optimized function call';

    function nonOptFnCall(n: number) {
        //for disable inline, over 600bytes function body                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       //
        arguments[0] = 1;
        return n;
    }

    export function run() {


        let ret = 0;
        const start = perfStart();
        for (let i = 0; i < 1e5; i++) {
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
        return perfEnd(start);
    }
}


export namespace NativeCallMetric {
    export const name = 'fn.call(obj, val)';

    function ctxCall(this: {val: number}, n: number) {
        //for disable inline, over 600bytes function body                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       //
        return this.val + n;
    }

    export function run() {


        let obj = {val: 1};
        let ret = 0;
        const start = perfStart();
        for (let i = 0; i < 1e5; i++) {
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
        return perfEnd(start);
    }
}

export namespace NativeApplyMetric {
    export const name = 'fn.apply(obj, args)';

    function applyCall(this: {val: number}, n: number) {
        //for disable inline, over 600bytes function body                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       //
        return this.val + n;
    }


    export function run() {

        let obj = {val: 1};
        let ret = 0;
        const args = [45];
        const start = perfStart();
        for (let i = 0; i < 1e5; i++) {
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
        return perfEnd(start);
    }
}

