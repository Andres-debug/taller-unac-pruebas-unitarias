export function sum(arr: number[]): number {
    let result: number = 0;
    for (let i = 0; i < arr.length; ++i) {
        result += arr[i];
    }
    return result;
}

