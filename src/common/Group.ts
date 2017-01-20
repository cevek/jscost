import {Metric} from './Metric';
export class Group {
    constructor(public name: string, public metrics: Metric[]) {}
}