import Icon from "../../components/Icon";
import switchCss from "./_switch.module.css";

export function GithubLinkIcon() {
    return (
        <a
            class={switchCss["button-wrapper"]}
            href="https://github.com/lee-gyu"
            target="_blank"
            rel="noopener"
            title="open my github profile"
        >
            <Icon icon="vsc-github" />
        </a>
    );
}

export function MailLinkIcon() {
    return (
        <a
            class={switchCss["button-wrapper"]}
            href="mailto:leegyu4dev@gmail.com"
            target="_blank"
            rel="noopener"
            title="send e-mail"
        >
            <Icon icon="vsc-mail" />
        </a>
    );
}

export function BlogLinkIcon() {
    return (
        <a
            class={switchCss["button-wrapper"]}
            href="https://medium.com/@gyuc219"
            target="_blank"
            rel="noopener"
            title="open my blog"
        >
            Blog
        </a>
    );
}
