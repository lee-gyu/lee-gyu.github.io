import React from "react";
import css from "./_link-icon-item.module.css";
import Icon, { type IconClass } from "./Icon";

type LinkIconItemProps = {
    icon: IconClass;
    href: string;
    text: string;
    title?: string;
};

function LinkIconItem({ icon, title, href, text }: LinkIconItemProps) {
    return (
        <a
            className={css["list-item"]}
            href={href}
            title={title ?? text}
            target="_blank"
            rel="noopener noreferrer"
        >
            <Icon icon={icon} />
            <span>{text}</span>
        </a>
    );
}

export default React.memo(LinkIconItem);
