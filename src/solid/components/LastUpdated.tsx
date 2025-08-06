import dayjs from "dayjs";
import { getDocLang, useTranslations } from "src/i18n/utils";
import { css } from "src/styled-system/css";
import { fromNow } from "src/utils/date";

const lastUpdatedCss = css({
    fontSize: "0.875rem",
    opacity: 0.8,
    fontWeight: 300,
    transition: "opacity 0.2s ease-in-out",
});

export function LastUpdated() {
    const lang = getDocLang();
    const lastUpdated = fromNow(dayjs(LAST_UPDATED), lang);
    const t = useTranslations(lang);

    return (
        <span
            data-scrolled-hidden
            class={lastUpdatedCss}
        >{`${t("lastUpdated")} ${lastUpdated}`}</span>
    );
}
