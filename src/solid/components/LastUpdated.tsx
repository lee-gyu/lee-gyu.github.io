import dayjs from "dayjs";
import { createSignal, onCleanup, onMount } from "solid-js";
import { getDocLang, useTranslations } from "src/i18n/utils";
import { css } from "src/styled-system/css";
import { fromNow } from "src/utils/date";

const lastUpdatedCss = css({
    display: "inline-block",
    marginTop: "docPadTop",
    marginLeft: "docPadLeft",
    fontSize: "0.875rem",
    opacity: 0.8,
    fontWeight: 300,
    transition: "opacity 0.2s ease-in-out",
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
