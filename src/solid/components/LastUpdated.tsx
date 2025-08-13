import dayjs from "dayjs";
import { createSignal, onCleanup, onMount } from "solid-js";
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
    const [text, setText] = createSignal("");
    const t = useTranslations(lang);

    const updateText = () => {
        setText(`${t("lastUpdated")} ${fromNow(dayjs(LAST_UPDATED), lang)}`);
    };

    onMount(() => {
        // 10초 주기로 업데이트
        const interval = setInterval(updateText, 10000);
        updateText();

        onCleanup(() => clearInterval(interval));
    });

    return (
        <span data-scrolled-hidden class={lastUpdatedCss}>
            {text()}
        </span>
    );
}
