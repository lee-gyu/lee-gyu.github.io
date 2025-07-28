import { createSignal, Show } from "solid-js";

import { css } from "src/styled-system/css";
import { getTheme, setTheme } from "src/utils/theme";
import Icon from "../../components/Icon";

const themeSwitchInputCss = css({
    appearance: "none",
    display: "none",
});

export default function ThemeSwitch() {
    const [themeState, setThemeState] = createSignal("");

    return (
        <label class="button-wrapper" title="switch theme">
            <Show when={themeState() !== ""}>
                <Icon
                    icon={
                        themeState() === "dark"
                            ? "md-light-fill"
                            : "md-dark-fill"
                    }
                />
            </Show>
            <input
                tabindex={-1}
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
