import { navigate } from "astro:transitions/client";
import { useContext } from "solid-js";
import Icon from "../../components/Icon";
import switchCss from "./_switch.module.css";
import { PageTopActionsContext } from "./context";

export default function LangToggle() {
    const { lang } = useContext(PageTopActionsContext);
    const icon = lang === "ko" ? "tb-alphabet-en" : "tb-alphabet-ko";

    const clickHandler = () => {
        navigate(lang === "ko" ? "/en" : "/");
    };

    return (
        <button
            class={switchCss["button-wrapper"]}
            onClick={clickHandler}
            type="button"
        >
            <Icon icon={icon} />
        </button>
    );
}
