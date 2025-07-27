import { createSignal, Show } from "solid-js";

import { css } from "src/styled-system/css";
import { getTheme, setTheme } from "src/utils/theme";
import Icon from "../Icon";

import switchCss from "./_switch.module.css";

const themeSwitchInputCss = css({
    appearance: "none",
    display: "none",
});

export default function ThemeSwitch() {
    const [themeState, setThemeState] = createSignal("");

    return (
        <label class={switchCss["switch-wrapper"]}>
            <Show when={themeState() !== ""}>
                <Icon
                    icon={
                        themeState() === "dark"
                            ? "md-dark-fill"
                            : "md-light-fill"
                    }
                />
            </Show>
            <input
                ref={onReady}
                type="checkbox"
                name="theme-switch"
                aria-label="Dark Mode Switch"
                class={themeSwitchInputCss}
                onChange={(ev) => {
                    const nextTheme = ev.target.checked ? "dark" : "light";

                    setTheme(nextTheme);
                    setThemeState(nextTheme);
                }}
            />
        </label>
    );

    function onReady(el: HTMLInputElement) {
        el.checked = getTheme() === "dark";
        setThemeState(getTheme());
    }
}
