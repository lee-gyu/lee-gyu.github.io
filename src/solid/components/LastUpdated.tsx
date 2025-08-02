import dayjs from "dayjs";
import { getDocLang, useTranslations } from "src/i18n/utils";
import { css } from "src/styled-system/css";
import { fromNow } from "src/utils/date";

const lastUpdatedCss = css({
    fontSize: "0.875rem",
    opacity: 0.8,
    fontWeight: 300,
});

export function LastUpdated() {
    const lang = getDocLang();
    const lastUpdated = fromNow(dayjs(LAST_UPDATED), lang);
    const t = useTranslations(lang);

    return (
        <span
            class={lastUpdatedCss}
        >{`${t("lastUpdated")} ${lastUpdated}`}</span>
    );
}
