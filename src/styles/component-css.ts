import { css } from "src/styled-system/css";

export const listItemsCss = "list-items";

export const iconCss = css({
    display: "inline-flex",
    width: "1em",
    height: "1em",
    backgroundColor: "currentColor",
    maskImage: "var(--icon-mask)",
    transition: "transform 0.15s ease-in-out",
});

export const numAdjCss = css({
    fontFeatureSettings: '"tnum"',
    letterSpacing: "-0.05em",
    fontWeight: 300,
});
