import type { JSX } from "solid-js/jsx-runtime";
import { iconCss } from "src/styles/component-css";

const ICON_LIST = [
    "md-dark-fill",
    "md-dark-outline",
    "md-light-fill",
    "md-light-outline",
    "vsc-mail",
    "vsc-github",
    "vsc-book",
] as const;

type IconProps = {
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
