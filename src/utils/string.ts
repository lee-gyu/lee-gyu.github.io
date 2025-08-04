export function splitWithCommas(input: string): string[] {
    return input.split(",").map((item) => item.trim());
}
