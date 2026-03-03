import { navigate } from "astro:transitions/client";
import { getDocLang } from "src/i18n/utils";
import Icon from "../../components/Icon";

export function LangToggle() {
    const lang = getDocLang();

    const clickHandler = () => {
        navigate(lang === "ko" ? "/en" : "/");
    };

    return (
        <button
            class="button-wrapper"
            onClick={clickHandler}
            type="button"
            title="switch language"
        >
            <Icon icon="io5-lang" />
        </button>
    );
}
