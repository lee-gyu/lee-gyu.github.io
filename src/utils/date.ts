import dayjs, { type Dayjs } from "dayjs";

import "dayjs/locale/ko";
import localizedFormat from "dayjs/plugin/localizedFormat";
import relativeTime from "dayjs/plugin/relativeTime";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(localizedFormat);
dayjs.extend(relativeTime);
dayjs.extend(utc);
dayjs.extend(timezone);

export function format(day: Dayjs | Date, lang: string): string {
    return dayjs(day).locale(lang).tz("Asia/Seoul").format("llll");
}

export function fromNow(day: Dayjs | Date, lang: string): string {
    return dayjs(day).locale(lang).fromNow();
}
