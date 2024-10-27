import React from "react";
import type { IconType } from "react-icons/lib";
import { VscGithubAlt } from "react-icons/vsc";
import { VscMail } from "react-icons/vsc";
import { VscBook } from "react-icons/vsc";

export type IconClass = "github" | "blog" | "mail";

type IconProps = {
    icon: IconClass;
};

const ICON_MAP: Record<string, IconType> = {
    blog: VscBook,
    mail: VscMail,
    github: VscGithubAlt,
};

function OrgIcon({ icon }: IconProps) {
    const Icon = ICON_MAP[icon];

    return Icon ? <Icon size="1.5em" /> : "unknown";
}

export default React.memo(OrgIcon);
