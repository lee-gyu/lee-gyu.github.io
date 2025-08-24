import type { JSX } from "solid-js/jsx-runtime";
import { iconCss } from "src/styles/component-css";

const ICON_LIST = [
    "md-dark-fill",
    "md-dark-outline",
    "md-light-fill",
    "md-light-outline",
    "md-expand-more",
    "md-expand-less",
    "vsc-mail",
    "vsc-github",
    "vsc-book",
    "vsc-info",
    "io5-lang",
    "io5-open",
    "ri-speak-ai-fill",
    "ri-speak-line-outline",
    "bs-sort-num-asc",
    "bs-sort-num-desc",
    "gr-form-prev",
    "gr-form-next",
] as const;

export type IconProps = {
    icon: (typeof ICON_LIST)[number];
};

export default function Icon(props: IconProps) {
    const style = () => {
        return {
            "--icon-mask": `var(--icon-${props.icon})`,
        } as JSX.CSSProperties;
    };

    return <i class={iconCss} style={style()} />;
}
