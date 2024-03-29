export function clamp (input = 0, min = 0, max = 0) : number {
    return Math.max(Math.min(input, max), min);
}