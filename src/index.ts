import {
    FunctionCallMetric, InlineFunctionCallMetric, NonOptimizedFunctionCallMetric,
    NativeCallMetric, NativeApplyMetric
} from './meters/calls';
import {Group} from './common/Group';
import {EmptyMetric} from './meters/empty';
import {
    PlainObject5CreateMetric, PlainObject10CreateMetric, ConstructorObjectCreateMetric,
    ConstructorObject10CreateMetric
} from './meters/objects';
const groups: Group[] = [];

groups.push(new Group('common', [
    new EmptyMetric(),
]));

groups.push(new Group('functions', [
    new InlineFunctionCallMetric(),
    new FunctionCallMetric(),
    new NativeCallMetric(),
    new NativeApplyMetric(),
    new NonOptimizedFunctionCallMetric(),
]));

groups.push(new Group('objects', [
    new PlainObject5CreateMetric(),
    new PlainObject10CreateMetric(),
    new ConstructorObjectCreateMetric(),
    new ConstructorObject10CreateMetric(),
]));

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
                    metric.run();
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

function doneNode() {
    let out = '';
    for (let i = 0; i < groups.length; i++) {
        const group = groups[i];
        out += `${leftPad(' ' + group.name, 53, '-')} ---------|\n`;
        for (let j = 0; j < group.metrics.length; j++) {
            const metric = group.metrics[j];
            const timing = (!metric.timing || metric.timing === Infinity) ? 0 : metric.timing;
            const roundTiming = Math.round(timing);
            out += `   ${leftPad(metric.name, 50)}:${leftPad(roundTiming, 4)}ns   |${'*'.repeat(roundTiming * SymbolsPerNs)}\n`;
        }
        out += '\n';
    }
    console.log(out);
}

function doneHTML() {
    let html = '';
    for (let i = 0; i < groups.length; i++) {
        const group = groups[i];
        html += `<details open>\n<summary>${group.name}</summary>\n`;
        for (let j = 0; j < group.metrics.length; j++) {
            const metric = group.metrics[j];
            const timing = (!metric.timing || metric.timing === Infinity) ? 0 : metric.timing;
            const roundTiming = Math.round(timing);
            html += `<div class="metric"><span>${metric.name}: ${roundTiming}ns</span>\n<div class="meter" style="width: ${timing * PxPerNs}px"></div></div>\n`;
        }
        html += '</details>\n';
    }
    document.body.innerHTML = html;
}

run();
