export interface Metric {
    name: string;
    timing: number;
    run: () => void;
}