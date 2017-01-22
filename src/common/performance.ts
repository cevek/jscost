export function perfStart() {
    if (typeof performance === 'object') {
        return performance.now();
    }
    return process.hrtime();
}

export function perfEnd(start: number | [number, number]) {
    if (typeof performance === 'object') {
        return performance.now() - (start as number);
    }
    const end = process.hrtime(start as [number, number]);
    return (end[0] * 1000) + (end[1] / 1000000);
}
//optimize
for (let i = 0; i < 500; i++) {
    perfEnd(perfStart());
}

