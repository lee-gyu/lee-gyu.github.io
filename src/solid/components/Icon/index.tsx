import type { JSX } from "solid-js/jsx-runtime";
import { css } from "src/styled-system/css";
import "./_icon.css";

const ICON_LIST = [
    "md-dark-fill",
    "md-dark-outline",
    "md-light-fill",
    "md-light-outline",
] as const;

type IconProps = {
    icon: (typeof ICON_LIST)[number];
};

const iconCss = css({
    display: "inline-flex",
    width: "1em",
    height: "1em",
    backgroundColor: "currentcolor",
    maskImage: "var(--icon-mask)",
    transition: "all 0.15s ease-in-out",
});

export default function Icon(props: IconProps) {
    const style = () => {
        return {
            "--icon-mask": `var(--icon-${props.icon})`,
        } as JSX.CSSProperties;
    };

    return <i class={iconCss} style={style()} />;
}
