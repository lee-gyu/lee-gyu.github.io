import Icon from "../components/Icon";

const URL_LIST = [
    ["https://lee-gyu.github.io/", "vsc-info", "Profile", "profile link"],
    ["https://github.com/lee-gyu", "vsc-github", "GitHub", "github link"],
    ["https://medium.com/@gyuc219", "vsc-book", "Blog", "blog link"],
] as const;

type Props = {
    mode?: "list" | "simple";
};

export function Links(props: Props) {
    const { mode = "list" } = props;
    const startId = mode === "list" ? 0 : 1;
    const urlList = URL_LIST.slice(startId);

    return (
        <ul class={`links-${mode}`}>
            {urlList.map(([url, icon, text, title]) => (
                <li class="links-item">
                    {mode === "list" ? (
                        <a
                            class="text-link"
                            href={url}
                            title={title}
                            target="_blank"
                        >
                        <Icon icon={icon} />
                            {url}
                        </a>
                    ) : (
                        <a
                            class="text-link"
                            href={url}
                            title={title}
                            target="_blank"
                        >
                            {text}
                        </a>
                    )}
                </li>
            ))}
        </ul>
    );
}
