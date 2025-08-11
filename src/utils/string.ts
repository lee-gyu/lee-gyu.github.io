export const COMMA_SEPARATOR = " ,, ";

export function splitCommas(input: string): string[] {
    return input.split(COMMA_SEPARATOR).map((item) => item.trim());
}

export function joinCommas(...input: string[]): string {
    return input.join(COMMA_SEPARATOR);
}
