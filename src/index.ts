import {Group} from './common/Group';
import {
    ReadKeyMetric,
    ReadGenericDirectKeyMetric,
    ReadDirectKeyFromMutatedObjectMetric,
    ReadDynamicKeyObjectMetric,
    ReadDynamicGenericKeyObjectMetric,
    ReadDynamicNonExistentKeyObjectMetric,
    ReadGenericDirectNonExistKeyMetric,
    ReadDynamicHashtableNonExistsKeyObjectMetric,
    ReadDynamicHashtableKeyObjectMetric
} from './meters/readKey';
import {
    ReadArrayDirectIndexMetric,
    ReadArrayDynamicIndexMetric,
    ReadUint8ArrayDynamicIndexMetric,
    ReadArrayDynamicIndexMixedValueMetric,
    ReadUint16ArrayDynamicIndexMetric
} from './meters/readArray';
import {Metric} from './common/Metric';
import {
    InlineFunctionCallMetric,
    FunctionCallMetric,
    NativeCallMetric,
    NativeApplyMetric,
    NonOptimizedFunctionCallMetric
} from './meters/calls';
import {EmptyMetric} from './meters/common';
import {
    PlainObject0CreateMetric,
    PlainObject5CreateMetric,
    PlainObject10CreateMetric,
    ConstructorObjectCreateMetric,
    ConstructorObject10CreateMetric
} from './meters/createObjects';
import {
    WriteNamedKeyToEmptyObjectMetric,
    WriteStrVarKeyToEmptyObjectMetric,
    WriteNumVarKeyToEmptyObjectMetric,
    WriteNumStrVarKeyToEmptyObjectMetric,
    WriteNumStrVarKeyToEmptyConstructorMetric,
    WriteNumStrVarKeyToEmptyHashTableMetric
} from './meters/createObjectProps';
import {
    ObjectKeysMetric,
    ObjectKeyValuesMetric,
    ForInOnlyKeysMetric,
    ForInOnlyKeysGenericMetric,
    ForInGenericMetric,
    ForInGenericPreoptimizedMetric,
    ForInGenericWithHashTableMetric,
    ForInGenericWithHashTablePreoptimizedMetric,
    ObjectKeyValuesHashtableMetric,
    ForInOnlyKeysHashTableMetric,
    ForInGenericHashTableMetric,
    ForInGenericHashTablePreoptimizeMetric
} from './meters/objectKeys';
import {
    CreateEmptyArrayMetric,
    Create10NumberArrayMetric,
    Create8MixedArrayMetric,
    Create10MixedArrayMetric,
    Create10MixedGrownArrayMetric,
    Create10MixedGrownOnlyObjArrayMetric,
    Create10EmptyNewArrayMetric,
    Create10MixedNewArrayMetric,
    Create10Uint8Metric,
    Create10Uint32Metric,
    Create10MixedPrimitivesArrayMetric,
    Create10NumberUndefinedObjArrayMetric,
    Create10NumberVarArrayMetric
} from './meters/createArrays';
import {If, Switch, AndOperator, OrOperator, condition, IfElse, conditionLikeSwitch} from './meters/conditionals';
const groups: Group[] = [];

// const m = ReadArrayDirectIndexMetric();
/*
groups.push(new Group('common', [
    EmptyMetric,
]));*/


groups.push(new Group('conditionals', [
    If,
    IfElse,
    Switch,
    AndOperator,
    OrOperator,
    conditionLikeSwitch,
    condition
]));

groups.push(new Group('readKey', [
    ReadKeyMetric,
    ReadGenericDirectKeyMetric,
    ReadGenericDirectNonExistKeyMetric,
    ReadDirectKeyFromMutatedObjectMetric,
    ReadDynamicKeyObjectMetric,
    ReadDynamicGenericKeyObjectMetric,
    ReadDynamicHashtableKeyObjectMetric,
    ReadDynamicNonExistentKeyObjectMetric,
    ReadDynamicHashtableNonExistsKeyObjectMetric,
]));


groups.push(new Group('functions', [
    InlineFunctionCallMetric,
    FunctionCallMetric,
    NativeCallMetric,
    NativeApplyMetric,
    NonOptimizedFunctionCallMetric,
]));

groups.push(new Group('create objects', [
    PlainObject0CreateMetric,
    PlainObject5CreateMetric,
    PlainObject10CreateMetric,
    ConstructorObjectCreateMetric,
    ConstructorObject10CreateMetric,
]));

groups.push(new Group('create objects 10 props (per key)', [
    WriteNamedKeyToEmptyObjectMetric,
    WriteStrVarKeyToEmptyObjectMetric,
    WriteNumVarKeyToEmptyObjectMetric,
    WriteNumStrVarKeyToEmptyObjectMetric,
    WriteNumStrVarKeyToEmptyConstructorMetric,
    WriteNumStrVarKeyToEmptyHashTableMetric,
]));

groups.push(new Group('read objectKeysValues (per key)', [
    ObjectKeysMetric,
    ObjectKeyValuesMetric,

    ForInOnlyKeysMetric,
    ForInOnlyKeysGenericMetric,

    ForInGenericMetric,
    // ForInGenericPreoptimizedMetric,

    ForInGenericWithHashTableMetric,
    // ForInGenericWithHashTablePreoptimizedMetric,
]));

groups.push(new Group('objectKeys in hashtable (per key)', [
    ObjectKeyValuesHashtableMetric,
    ForInOnlyKeysHashTableMetric,
    ForInGenericHashTableMetric,
    // ForInGenericHashTablePreoptimizeMetric,
]));

groups.push(new Group('readArray', [
    ReadArrayDirectIndexMetric,
    ReadArrayDynamicIndexMetric,
    ReadArrayDynamicIndexMixedValueMetric,
    ReadUint8ArrayDynamicIndexMetric,
    ReadUint16ArrayDynamicIndexMetric,
]));

groups.push(new Group('createArray', [
    CreateEmptyArrayMetric,
    Create10NumberArrayMetric,
    Create10NumberVarArrayMetric,
    Create10MixedPrimitivesArrayMetric,
    Create8MixedArrayMetric,
    Create10MixedArrayMetric,
    Create10NumberUndefinedObjArrayMetric,
    Create10MixedGrownArrayMetric,
    Create10MixedGrownOnlyObjArrayMetric,
    Create10EmptyNewArrayMetric,
    Create10MixedNewArrayMetric,
    Create10Uint8Metric,
    Create10Uint32Metric,
]));

function runner(metric: Metric) {
    const dur = metric.run();
    metric.timing = Math.min(metric.timing || Infinity, dur);
}

const PxPerNs = 5;
const SymbolsPerNs = 1;


let runCounter = 0;
function run() {
    for (let i = 0; i < groups.length; i++) {
        const group = groups[i];
        for (let j = 0; j < group.metrics.length; j++) {
            const metric = group.metrics[j];
            for (let k = 0; k < 5; k++) {
                const runMetric = () => {
                    runner(metric);
                    runCounter--;
                    if (runCounter === 0) {
                        done();
                    }
                };
                setTimeout(runMetric);
                runCounter++;
            }
        }
    }
}

function done() {
    if (typeof window === 'object') {
        doneHTML();
        doneMD();
    } else {
        doneNode();
    }
}

function leftPad(str: number | string, count: number, sym: string = ' ') {
    str = str + '';
    let s = '';
    let leftCount = count - str.length;
    for (let i = 0; i < leftCount; i++) {
        s += sym;
    }
    return s + str;
}

function prepareTime(timing: number) {
    let time = Math.max(0, (!timing || timing === Infinity) ? 0 : timing);
    return time < 5 ? (Math.round(time * 10) / 10) : Math.round(time);
}

function doneNode() {
    let out = '';
    for (let i = 0; i < groups.length; i++) {
        const group = groups[i];
        out += `${leftPad(' ' + group.name, 53, '-')} ---------|\n`;
        for (let j = 0; j < group.metrics.length; j++) {
            const metric = group.metrics[j];
            const timing = prepareTime(metric.timing);
            out += `   ${leftPad(metric.name, 50)}:${leftPad(timing, 4)}ns   |${'*'.repeat(timing * SymbolsPerNs)}\n`;
        }
        out += '\n';
    }
    console.log(out);
}

function doneMD() {
    let md = 'https://github.com/cevek/jscost\n<pre>';
    for (let i = 0; i < groups.length; i++) {
        const group = groups[i];
        md += `<h2>${group.name}</h2>\n`;
        for (let j = 0; j < group.metrics.length; j++) {
            const metric = group.metrics[j];
            const timing = prepareTime(metric.timing);
            const code = metric.run.toString().replace(/</g, '&lt;').replace(/>/g, '&gt;');
            // md += `<div><img src="http://placehold.it/${timing * PxPerNs}x5/87cefa/?text=+"></div>\n<details><summary>${metric.name}: ${timing}ns</summary>\n<pre>${code}</pre>\n</details>\n`;
            md += `${metric.name}: ${timing}ns\n<img src="http://placehold.it/${timing * PxPerNs}x10/87cefa/?text=+">\n`;
        }
        md += '\n';
    }
    md += '</pre>';
    console.log('markdown\n', md);
}

function doneHTML() {
    let html = '';
    for (let i = 0; i < groups.length; i++) {
        const group = groups[i];
        html += `<details open>\n<summary>${group.name}</summary>\n`;
        for (let j = 0; j < group.metrics.length; j++) {
            const metric = group.metrics[j];
            const timing = prepareTime(metric.timing);
            html += `<div class="metric"><span>${metric.name}: ${timing}ns</span>\n<div class="meter" style="width: ${timing * PxPerNs}px"></div></div>\n`;
        }
        html += '</details>\n';
    }
    document.body.innerHTML = html;
}

run();
