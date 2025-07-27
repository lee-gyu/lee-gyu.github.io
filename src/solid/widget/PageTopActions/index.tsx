import { css } from "src/styled-system/css";
import { PageTopActionsContext } from "./context";
import LangToggle from "./LangToggle";
import ThemeSwitch from "./ThemeSwitch";

type PageTopActionsProps = {
    lang: Lang;
};

export default function PageTopActions(props: PageTopActionsProps) {
    return (
        <PageTopActionsContext.Provider value={{ lang: props.lang }}>
            <div
                class={css({
                    display: "inline-flex",
                    alignItems: "center",
                    marginLeft: "auto",
                    gap: "0.5rem",
                })}
            >
                <LangToggle />
                <ThemeSwitch />
            </div>
        </PageTopActionsContext.Provider>
    );
}
