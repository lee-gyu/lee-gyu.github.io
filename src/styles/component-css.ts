import { css } from "src/styled-system/css";

export const listItemsCss = css({
    margin: "0.5rem 0",
    lineHeight: "1.75",
    cursor: "default",
    listStyle: "circle",
    paddingLeft: "1.25rem",
});

export const iconCss = css({
    display: "inline-flex",
    width: "1em",
    height: "1em",
    backgroundColor: "currentColor",
    maskImage: "var(--icon-mask)",
    transition: "all 0.15s ease-in-out",
});
