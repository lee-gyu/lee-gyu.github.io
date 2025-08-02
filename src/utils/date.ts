import dayjs, { type Dayjs } from "dayjs";

import "dayjs/locale/ko";
import localizedFormat from "dayjs/plugin/localizedFormat";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(localizedFormat);
dayjs.extend(relativeTime);

export function format(day: Dayjs | Date, lang: string): string {
    return dayjs(day).locale(lang).format("llll");
}

export function fromNow(day: Dayjs | Date, lang: string): string {
    return dayjs(day).locale(lang).fromNow();
}
